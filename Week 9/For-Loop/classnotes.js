for (var i=0; i <= 2; i++) {
    console.log(i);
    if(i == 1) {
        break;
    }
} 

console.log("finished");

/* prints 0 1 finished */

var person = {fname: "Kenny", lname: "James", age: 22};
var text = "";

for (var x in person) {
    text += person[x] + " ";
}

console.log(person);
console.log(text);

var cables = ["hdmi", "microb", "type-c", "type-a"];
var container = "";

for (var electronics of cables) {
    container += electronics + "\n";
}

console.log(container);