import mdast from 'mdast';
import mdtextr from 'mdast-textr';
import base from 'typographic-base';

export default function typographicMarkdown(
  text = '',
  options = { locale: 'en-us' },
  plugins = [ base ]
) {
  return mdast.use(mdtextr, {
    options: Array.isArray(options) ? { locale: 'en-us' } : options,
    plugins: Array.isArray(options) ? options : plugins
  }).process(text).trim();
};
