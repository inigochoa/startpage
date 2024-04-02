module.exports = {
  mode: 'jit',
  content: ['./src/**/*.njk'],
  safelist: [],
  theme: {
    extend: {
      colors: {
        background: '#282c34',
        garnet: 'rgba(255, 0, 0, 0.65)',
        primary: '#abb2bf',
        section: '#1e222a',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      minHeight: {
        '2.5': '10rem',
      },
      outline: {
        garnet: ['2px dashed rgba(255, 0, 0, 0.65)'],
      },
    },
  },
  plugins: [],
}
