type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
	//....
}
function printToConsole(s: string) {
	console.log(s);
}
greeter(printToConsole);

console.log('====================================Allah');
