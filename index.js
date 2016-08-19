import remark from 'remark';
import remarkTextr from 'remark-textr';
import base from 'typographic-base';

export default function typographicMarkdown(
  text = '',
  options = { locale: 'en-us' },
  plugins = [ base ]
) {
  return remark().use(remarkTextr, {
    options: Array.isArray(options) ? { locale: 'en-us' } : options,
    plugins: Array.isArray(options) ? options : plugins
  }).process(text).toString().trim();
};
