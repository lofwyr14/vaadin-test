# vaadin-test
Just a try to test the packaging of vaadin-components with rollup

Build the first time:
```
npm install
npm run rollup
```

Build:
```
npm run rollup
```

### This will generate a file: bundle.js and some warnings:

```
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
@vaadin/vaadin-date-picker/vaadin-date-picker.js (imported by index.js)
```

### How to solve this?