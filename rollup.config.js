import resolve from "rollup-plugin-node-resolve"

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'vaadin_test'
  },
  plugins: [
    resolve()
  ]
};
