/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
    treeshake: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    baseUrl: '/slash',
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
