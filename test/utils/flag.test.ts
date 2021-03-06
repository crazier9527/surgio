import test from 'ava';
import { addFlagMap, prependFlag, removeFlag } from '../../lib/utils/flag';

test.before(() => {
  addFlagMap(/foobar/i, '🚀');
});

test('addFlag', t => {
  t.is(prependFlag('美国'), '🇺🇸 美国');
  t.is(prependFlag('上海美国'), '🇺🇸 上海美国');
  t.is(prependFlag('美国上海'), '🇺🇸 美国上海');
  t.is(prependFlag('阿联酋'), '阿联酋');
  t.is(prependFlag('US'), '🇺🇸 US');
  t.is(prependFlag('us'), '🇺🇸 us');
  t.is(prependFlag('🇺🇸 jp'), '🇺🇸 jp');
  t.is(prependFlag('🇯🇵 US'), '🇯🇵 US');
  t.is(prependFlag('🇺🇸 jp', true), '🇯🇵 jp');
  t.is(prependFlag('🇯🇵 🇺🇸 jp', true), '🇯🇵 jp');
  t.is(prependFlag('🇺🇸 🇯🇵 US', true), '🇺🇸 US');
  t.is(prependFlag('foobar 节点'), '🚀 foobar 节点');
});

test('removeFlag', t => {
  t.is(removeFlag('🇺🇸 jp'), 'jp');
  t.is(removeFlag('🇺🇸 🇺🇸 jp'), 'jp');
});
