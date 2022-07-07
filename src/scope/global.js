// variables

var a // declaramos
var b = 'b' // declaramos y asignamos

// Global scope

var fruit = 'Apple'

function bestFruit() {
  console.log(fruit)
}

bestFruit()

function countries() {
  country = 'Colombia'
  console.log(country)
}

countries()
console.log(country)
