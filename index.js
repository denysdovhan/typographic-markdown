import mdast from 'mdast';
import mdtextr from 'mdast-textr';
import base from 'typographic-base';

export default function typographicMarkdown(
  text = '',
  options = { locale: 'en-us' },
  plugins = [ base ]
) {
  return mdast.use(mdtextr, { options, plugins }).process(text).trim();
};
