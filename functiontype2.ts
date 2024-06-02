const nickNames = ["Alexander", "Alex", "Alexander the Great"];

function allNicknames(callback: (index: number) => string) {
    for (let i = 0; i < nickNames.length; i++) {
        console.log(callback(i));
    }
}

function getNameAt(index: number) {
    return `${nickNames[index]}`
}

allNicknames(getNameAt)

function logName(name: string) {
    return `${name}`
}

allNicknames(logName)



const nickNames2 = ["Assadullah", "Asad", "Assadullah the Great"];

function allNicknames2(callback: (index: number) => string) {
    for (let i = 0; i < nickNames2.length; i++) {
        console.log(callback(i));
    }
}

function getNameAt2(index: number) {
    return `${nickNames2[index]}`
}
allNicknames2(getNameAt2)
function logName2(name: string) {
    return `${name}`
    
}
allNicknames2(logName2)