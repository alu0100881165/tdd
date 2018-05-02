var assert = require('assert');

function Raices(a, b, c)
{
  var Raiz_oper = Math.sqrt(b * b - 4 * a * c);
  var R1 = (-b + Raiz_oper) / (2 * a);
  var R2 = (-b - Raiz_oper) / (2 * a);
  return [[R1,0],[R2,0]];
}

assert.deepEqual(Raices(1,-5,0), [[5,0],[0,0]]);
assert.deepEqual(Raices(2,5,0), [[0,0],[-2.5,0]]);
assert.deepEqual(Raices(1,5,0), [[0,0],[-5,0]]);
