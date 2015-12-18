import { equal } from 'assert';
import t from './index';
import quotes from 'typographic-quotes';

it('should pass options', () =>
  equal(t('_"quotes"_', { locale: 'uk' }), '_«quotes»_')
);

it('should pass plugins', () =>
  equal(t('**"quotes"**...', [quotes]), '**“quotes”**...')
);
