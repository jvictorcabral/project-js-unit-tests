const productDetails = require("../src/productDetails");

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    // Consegui com a ajuda da Fernanda na mentoria
    expect(typeof productDetails).toBe("function");

    expect(Array.isArray(productDetails("a", "b"))).toBe(true);

    expect(productDetails("a", "b")).toHaveLength(2);

    expect(typeof productDetails("a", "b")).toBe("object");

    expect(productDetails("a", "b")).not.toStrictEqual(itens[0], itens[1]);
  });
});
