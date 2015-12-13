import mdast from 'mdast';
import mdtextr from 'mdast-textr';
import base from 'typographic-base';

export default function typographicMarkdown(text = '', options = {}) {
  options.plugins = options.plugins || [base];
  return mdast.use(mdtextr, options).process(text).trim();
};
