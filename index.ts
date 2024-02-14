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

// OGGETTI
const yourEpicodeTeacher = {
  firstName: 'Stefano',
  module: 'Frontend',
  age: 18,
}

// grazie type inference!
console.log(yourEpicodeTeacher.firstName.slice(2, 4))

// quando non si conosce il tipo di un oggetto, oppure si vogliono creare degli oggetti tutti dello stesso tipo
// viene necessario dichiarare il TIPO degli oggetti; è possibile farlo con l'operatore "Type" però
// per gli oggetti è ancora più comodo dichiarare un'INTERFACCIA
interface TennisPlayer {
  firstName: string
  favouriteArm: string
  age: number
  tournamentsWon: number | string
}

const firstTennisPlayer: TennisPlayer = {
  firstName: 'Rafael Nadal',
  favouriteArm: 'left',
  age: 37,
  tournamentsWon: 'troppi',
}

const secondTennisPlayer: TennisPlayer = {
  firstName: 'Andre Agassi',
  favouriteArm: 'right',
  age: 53,
  tournamentsWon: 100,
}

const arrayOfTennisPlayers: TennisPlayer[] = []
// const arrayOfTennisPlayers: Array<TennisPlayer> = []

arrayOfTennisPlayers.push(firstTennisPlayer)
arrayOfTennisPlayers.push(secondTennisPlayer)
// arrayOfTennisPlayers.push('Federer') // questo non è un oggetto di tipo TennisPlayer

const arrayOfTennisPlayersNames: string[] = arrayOfTennisPlayers.map(
  (player) => player.firstName
) // ['Rafael', 'Andre']

interface HumainBeing {
  firstName: string
  age: number
  city: string
}

const mario: HumainBeing = {
  firstName: 'Mario',
  age: 80,
  city: 'Pizzocalabro',
}

interface Developer extends HumainBeing {
  // abbiamo ereditato firstName, age e city
  yearsOfExp: number
  language?: 'JS' | 'TS' | 'JAVA' // il punto di domanda identifica una proprietà OPZIONALE di un oggetto
}

const luigiDev: Developer = {
  yearsOfExp: 5,
  firstName: 'Luigi',
  age: 75,
  city: 'Mushroom Kingdom',
  language: 'TS',
}

const toadDev: Developer = {
  age: 68,
  yearsOfExp: 1,
  firstName: 'Toad',
  city: 'Mushroom Kingdom',
  // language: 'JAVA' // non è indispensabile in un oggetto Developer
}

toadDev.language?.slice(0, 1) // il ? è detto "OPTIONAL CHAINING"

// GENERICS
// I GENERICS vengono anche chiamati "type arguments". Sostanzialmente si tratta di parametri passati ad
// interfacce, che forniscono un tipo. Servono per rendere un po' più "generiche" le interfacce, in modo
// da poter venire ri-utilizzate più facilmente

interface Address<A = string> {
  street: string
  civicNumber: number
  zipCode: number
  city: string
  area: A
}

const italianAddress: Address = {
  street: 'Via dei pinguini',
  civicNumber: 10,
  zipCode: 45000,
  city: 'Cellino S. Marco',
  area: 'Italy', // string, come il mio generic A!
}

interface USAArea {
  state: string
  country: string
}

const americanAddress: Address<USAArea> = {
  street: 'Road avenue',
  civicNumber: 580,
  zipCode: 435345,
  city: 'New York',
  area: {
    state: 'New York',
    country: 'USA',
  },
}
