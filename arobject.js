/* #1 */
var myPenguin = {name:"Club Penguin #234", origin:"Penguin Igloo"};
/* #2 */
function hello(name){
    return "こんにちは, my name is " + name + "!"; 
};
console.log(hello(myPenguin.name))
/* #3 */
myPenguin.canFly = false;
/* #4 */
myPenguin.chirp = 
    function() {
        return "CHIRP! CHIRP! Penguins sound like this?"
    };
/* #5 */
myPenguin.sayHello = 
    function() {
        return "こんにちは, my name is " + this.name + "!"; 
    };
/* #6 */
console.log(myPenguin.sayHello());
/* #7 */
myPenguin.name = "Penguin McPengwuinface";
myPenguin.sayHello = 
    function() {
        return "こんにちは, my name is " + this.name + "!"; 
    };
console.log(myPenguin.sayHello());
/* #8 */
myPenguin.fly = 
    function() {
        if (myPenguin.canFly === true) {
            return "Look! I can fly, momma!"
    }
        else {
            return "Darn it, no flying for me..";
        }
    };
/* #9 */
console.log(myPenguin.fly());
/* #10 */
myPenguin.canFly = true;
/* #11 */
console.log(myPenguin.fly());
/* #12 */
for (key in myPenguin) {
    console.log(key)
};
/* #13 */
for (value in myPenguin) {
    console.log(myPenguin[value]);
};
