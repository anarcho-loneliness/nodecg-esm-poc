# nodecg-esm-poc

This is a proof-of-concept which shows that it is indeed possible to interop with native ES Modules in most common bundlers, and that it isn't _that_ difficult.

My current perspective on the benefits and tradeoffs of using ESM instead of a Global:

## Vanilla JavaScript
Works out of the box, without using any magic. Purely uses standards in their native browser form.

Good chance that an IDE will be able to support autocomplete, due to the `import` being explicitly present in the code.

However, the ESM currently requires using ugly relative or absolute paths unless `package.json#nodecg.transformBareModuleSpecifiers` is true. But, this will eventually be addressed by Import Maps, meaning that this approach gets cleaner naturally over time, without us doing any additional work on NodeCG core itself.

## TypeScript

Pretty much the same as Vanilla JS. We also don't need to mess around with Ambient Declarations or manually referencing types -- they'll "just work".

## Webpack
Webpack will require extra work on behalf of the bundle author, regardless of if we choose globals or ESM.

If we choose globals, then they must add something like the following to their `webpack.config.js`:
```js
externals: {
  NodeCGLib: 'NodeCGLib'
},
```

If we choose ESM, then they must add the above `externals` snippet, but also:
1. Separately import `NodeCG` into the global scope in their HTML via something like:
```html
<script type="module">
    import * as NodeCGLib from 'nodecg';
    window.NodeCGLib = NodeCGLib;
</script>
```
2. Ensure that their webpack output loads _after_ this global has been set up. This could be done by making their `script` tag use `defer`, or `type="module"`, and ensuring it comes _after_ the `NodeCGLib` setup block above:
```
<script src="bundle.js" defer></script>
```

This isn't all _that_ much extra work. Also, it means that as Webpack gets better at interop with ESM, NodeCG can reap those benefits for free and these small workarounds will begin to go away.

## Parcel

Same idea as Webpack, but since Parcel does not support Externals, the `import nodecg` statement will have to be omitted, but the global `NodeCGLib` object would still be used in the same way. This does mean that if using TypeScript, some extra work would have to be done to tell TypeScript to apply the NodeCG typedef to this `window.NodeCGLib` global.

If that approach doesn't work for someone, then the `nodecg` lib will just have to get compiled into the build output. This should indeed work and I don't think it'll hurt anything, it's just kind of annoying because it means that the bundle has to be compiled for the specific version of NodeCG it is running against. That's the tradeoff to be made for having a zero-config bundler, I suppose.

## Rollup

It's barely documented, but Rollup's `format` parameter does indeed support `esm`. This, combined with an `external`, means that using the `nodecg` lib is pretty painless:

```
export default [{
  input: 'graphic.js',
  output: [
    {
      file: 'dist/graphic.js',
      format: 'esm'
    }
  ],
  external: [
    'nodecg'
  ]
}];
```

## Conclusion

Yes, it is extra work to use an excluded ESM in most bundlers. But, it's not _that_ much extra work, and it's extra work that is likely to go away in the future.

Most crucially, using ESM provides a _completely idiomatic_ on-ramp for newbies just getting started with programming and NodeCG. They don't need to learn any tools or reason with any injected globals. They just use the native ES Module loader that their browser already has, and they're good to go. Plus, they can get autocomplete, and have a good transition to TypeScript.