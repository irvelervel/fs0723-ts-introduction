console.log('Ciao TypeScript!')
console.log('ciao di nuovo')
console.log('ciao terza volta')

console.log('scrivo in TS, ma vedo le modifiche nel browser!')

let x = 10
x = 20
// x = 'topogigio' // -> TS non ce lo fa fare! non possiamo assegnare un valore stringa a una variabile
// nata con valore numerico

// TIPI DI DATO PRIMITIVI IN TS?
// string
// number
// boolean
// undefined e null
// any
// never, etc. (altri)

let firstName: string = 'topogigio'
firstName = 'tartarugheninja'
firstName = firstName + 10 // 'tartarugheninja10' ||| 10 + '10' = '1010'

let myNumber = '1000'
// la capacità di TS di intuire il tipo di una variabile dal suo VALORE iniziale è chiamata "TYPE INFERENCE"

let myBool = false

let boh: any // TODO: togli sto any!
boh = 50
boh = 'topogigio'

let myNewName = 'Giancarlo'
console.log(myNewName.toUpperCase())

const sayHello = () => {
  return 'Hello!'
}

sayHello().substring(0, 1) // -> 'H'

const addition = (num1, num2) => {
  return num1 + num2
}

console.log(addition(5, 6)) // 11
console.log(addition('5', '6')) // 56

// typeof torna il tipo di un dato, anche in JS!
const additionWithCheck = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return 'Errore nel calcolo'
  }
}

console.log(additionWithCheck('50', 100))

// risolviamo definitivamente con TS!
const additionWithTypeScript = (num1: number, num2: number) => {
  return num1 + num2
}

console.log(additionWithTypeScript(5, 6))
// console.log(additionWithTypeScript('5', 6)) // --> errore :)

// TYPE UNION
let hello: string | undefined | boolean // un singolo | indica una UNIONE di tipi

if (5 < 10) {
  hello = 'stefano'
} else {
  hello = undefined
}
// hello = 'Stefano'
// hello = undefined
// hello = true
// hello = 10 // errore, non c'è number tra i tipi

// attenzione perchè quando si ha un tipo union TS diventa molto pignolo sulle operazioni che fate sulla variabili
console.log((hello as string).toUpperCase())
// TS non era abbastanza intelligente da capire che alla riga 82 la variabile hello era al 100% una stringa
// (perchè 5 è minore di 10!)
// quindi secondo TS la variabile "hello" alla riga 82 poteva ANCHE essere undefined -> toUpperCase() non compilava!
// per risolvere ho dovuto eseguire un -casting- della variabile hello, "rassicurando" TS che alla riga 82
// hello doveva "venire trattato" come stringa

let hello2: string = 'ciao'
console.log(hello2.toUpperCase())

// TYPE ALIAS
type TopoGigio = string | number

let y: TopoGigio = 50
y = 'strapazzami'
// in TS potete dare un nome ai vostri tipi personalizzati

// ARRAY in TS
const arrayOfNames = ['Michela', 'Antonio', 'Elisa', 'Alex', 'Alessandro']
// TS ha automaticamente dedotto il tipo "array di stringhe" --> string[] oppure Array<string>
const arrayOfNumbers: number[] = []
arrayOfNumbers.push(50)
arrayOfNumbers.push(500.5)
// arrayOfNumbers.push('topogigio') // "topogigio" non è un numero
arrayOfNames.push('Topo Gigio')

const arrayOfNevers = [] // array inutile! un array di never non serve a niente :(

const mixedArray: (string | boolean)[] = ['stefano'] // Array<string | boolean>
mixedArray.push(true)
console.log(mixedArray)

arrayOfNames.forEach((name) => {
  console.log(name.length.toString().slice(0, 1)) // torna il primo carattere della lunghezza del nome
})

const anotherArrayOfNames: Array<string> = ['Pasquale'] // string[]
anotherArrayOfNames.push('Antonio')
anotherArrayOfNames.pop()
console.log(anotherArrayOfNames.length) // 1

// un array dichiarato con un'unione di tipi ci permette di inserire al proprio interno un dato con un tipo
// qualsiasi tra quelli prefissati
const mistoMareArray: (number | string)[] = ['stefano', 50, 50, 50, 'epicode']
// però non garantisce il numero degli elementi e il loro posizionamento

// esiste una struttura dati presente SOLO in TS che permette il controllo sul numero degli elementi iniziali
// e il loro tipo posizione x posizione
// parliamo della TUPLA
const myTuple: [string, number, string] = ['wendy', 10, 'dalila']
// dopo la dichiarazione iniziale è possibile pusharci al proprio interno nuove stringhe o numeri
myTuple.push('stefano')
myTuple.push('stefano2')
myTuple.push(50)
