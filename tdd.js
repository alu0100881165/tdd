var assert = require('assert');

function Raices(a, b, c)
{
  var Operacion = b * b - 4 * a * c;

  if(Operacion > 0)
  {
    var Raiz_oper = Math.sqrt(Operacion);
    var Real1 = (-b + Raiz_oper) / (2 * a);
    var Real2 = (-b - Raiz_oper) / (2 * a);
    var Imag1 = 0;
    var Imag2 = 0;
  }
  else
  {
    var Raiz_oper = Math.sqrt(-Operacion);
    var Real1 = 0;
    var Real2 = -0;
    var Imag1 = (-b + Raiz_oper) / (2 * a);
    var Imag2 = (-b - Raiz_oper) / (2 * a);
  }

  return [[Real1,Imag1],[Real2,Imag2]];
}

assert.deepEqual(Raices(1,-5,0), [[5,0],[0,0]]);
assert.deepEqual(Raices(2,5,0), [[0,0],[-2.5,0]]);
assert.deepEqual(Raices(1,5,0), [[0,0],[-5,0]]);
assert.deepEqual(Raices(1,0,1), [[0,1],[0,-1]]);
