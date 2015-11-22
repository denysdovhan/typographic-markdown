import { equal } from 'assert';
import typographer from './index';

it('should process', () =>
  equal(typographer('**"quotes"**'), '**“quotes”**')
);

it('should not touch code blocks', () =>
  equal(
    typographer('em-dash -- is not a decrement `i--`...'),
    'em-dash — is not a decrement `i--`…'
  )
);

it('should pass options', () =>
  equal(typographer('_"quotes"_', { locale: 'uk' }), '_«quotes»_')
)

it('should typographer invalid input', () =>
  equal(typographer(), '')
);
