let returnStringOrNumber: (() => string) | number

returnStringOrNumber = "Alexander"
returnStringOrNumber = 7
returnStringOrNumber = () => "Alexander"
returnStringOrNumber = () => 7

let aboutImran: (name: string) => number

aboutImran = (name: string) => {
    return 7
}
aboutImran = (name: string) => "7"
aboutImran = (name: string) => name.length
console.log(aboutImran("Imran"))

// returnStringOrNumber = function (): number {return 7}
// returnStringOrNumber = function (): string {return "7"}
// returnStringOrNumber = 7


// let aboutImran: (name: string) => number

// aboutImran = (name: string) => {
//     return "7"
// }


let imran: (name: string) => string;

imran = (name) => `Hello ${name.toUpperCase()}`

returnStringOrNumber = imran
console.log(returnStringOrNumber("Imran"))