const i18n = require('i18n');

i18n.configure({
  locales: ['fr'],
  defaultLocale: 'fr',
  objectNotation: true,
  directory: `${__dirname}/../../locales`,
});

export default i18n;
