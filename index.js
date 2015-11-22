import mdast from 'mdast';
import typo from 'mdast-typographer';

export default function typographer(text = '', options = {}) {
  return mdast.use(typo, options).process(text).trim();
};
