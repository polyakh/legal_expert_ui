module.exports = {
  locales: ['en', 'ca', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home'],
    '/second-page': ['home'],
  },
  "loadLocaleFrom": (lang, ns) =>
  // You can use a dynamic import, fetch, whatever. You should
  // return a Promise with the JSON file.
  import(`/public/locales/${lang}/${ns}.json`).then((m) => m.default),
}