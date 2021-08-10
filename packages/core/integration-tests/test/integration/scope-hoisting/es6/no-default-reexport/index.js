import _default, {other} from './a.js';

sideEffectNoop(_default, other);

output = import('./async').then(mod => mod.default);
