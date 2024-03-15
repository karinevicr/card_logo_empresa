function somar(a, b) {
    return a + b;
  }
  
  function subtrair(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    return a / b;
  }
  
  function calcular(operacao, a, b) {
    switch (operacao) {
      case '+':
        return somar(a, b);
      case '-':
        return subtrair(a, b);
      case '*':
        return multiplicar(a, b);
      case '/':
        return dividir(a, b);
      default:
        throw new Error('Operação inválida');
    }
  }
  
  const resultado = calcular('+', 2, 3);
  console.log(resultado); // 5
  
  const resultado2 = calcular('*', 4, 5);
  console.log(resultado2); // 20