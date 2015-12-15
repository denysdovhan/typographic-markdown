import { equal } from 'assert';
import t from './index';

it('should pass options', () =>
  equal(t('_"quotes"_', { locale: 'uk' }), '_«quotes»_')
);

it('should pass plugins', () =>
  equal(t('**"quotes"**', { locale: 'en-us' }, ['typographic-quotes']), '**“quotes”**')
);
