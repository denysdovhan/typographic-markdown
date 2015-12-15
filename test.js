import { equal } from 'assert';
import t from './index';

it('should pass options', () =>
  equal(t('_"quotes"_', { options: { locale: 'uk' }}), '_«quotes»_')
);

it('should pass plugins', () =>
  equal(t('**ellipses**...', { plugins: ['typographic-ellipses'] }), '**ellipses**…')
);
