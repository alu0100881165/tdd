var assert = require('assert');

function Raices(a, b, c)
{
  var Operacion = b * b - 4 * a * c;
  var Raiz_oper;
  var Real1;
  var Real2;
  var Imag1;
  var Imag2;
  var dos_a = 2 * a;

  if(Operacion > 0)
  {
    Raiz_oper = Math.sqrt(Operacion);
    Real1 = (-b + Raiz_oper) / dos_a;
    Real2 = (-b - Raiz_oper) / dos_a;
    Imag1 = 0;
    Imag2 = 0;
  }
  else
  {
    Raiz_oper = Math.sqrt(-Operacion);
    Real1 = -b / dos_a;
    Real2 = -b / dos_a;
    Imag1 = Raiz_oper / dos_a;
    Imag2 = -Raiz_oper / dos_a;
  }

  return [[Real1,Imag1],[Real2,Imag2]];
}

assert.deepEqual(Raices(1,-5,0), [[5,0],[0,0]]);
assert.deepEqual(Raices(2,5,0), [[0,0],[-2.5,0]]);
assert.deepEqual(Raices(1,5,0), [[0,0],[-5,0]]);
assert.deepEqual(Raices(1,0,1), [[0,1],[0,-1]]);
assert.deepEqual(Raices(1,-2,5), [[1,2],[1,-2]]);
assert.deepEqual(Raices(1,1,1), [[-0.5,Math.sqrt(3)/2],[-0.5,-Math.sqrt(3)/2]]);
assert.deepEqual(Raices(1,-3,3), [[1.5,Math.sqrt(3)/2],[1.5,-Math.sqrt(3)/2]]);
