/*
  01

  - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.
*/

const name = 'Rafael'

/*
  02

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/

const showAge = () => {
  let age = 31

  console.log(age)
}

showAge()

/*
  03

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/

const car = {
  name: 'Panamera',
  brand: 'Porsche',
  colors: ["Black", "Red", "White"],
  isRunning: false,
  run () {
    this.isRunning = true
    return `O ${this.name} está em movimento`
  },
  stop () {
    this.isRunning = false
    return `O ${this.name} está parado`
  },
  getColorsMessage () {
    const lastColor = `${this.colors[this.colors.length - 1]}`
    const colors = this.colors.join(", ").replace(`, ${lastColor}`, ` e ${lastColor}`)

    return `O ${this.name} está disponível nas cores ${colors}`
  }
}

/*
  04

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/

console.log(car.run())
console.log(car.isRunning)

/*
  05

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/

console.log(car.stop())
console.log(car.isRunning)

/*
  06

  - Exiba, no console, a mensagem com as cores do carro.
*/

console.log(car.getColorsMessage())

/*
  07

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/

console.log(`O carro é um ${car['brand']} ${car['name']}`)
