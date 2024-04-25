var fan_on = true;
var box_red = true;

console.log("We are in class!");
if(fan_on){
    console.log("Effective learning can commence!");
}

if(!box_red){
    console.log("Effective learning!");
}
else{
    console.log("Less effective learning!");
}


var number = 12;

console.log((number%2)+"=="+0);

if((number%2)==0){
    console.log("Even number");
}

// Expression 1: Initialization
// Expression 2: Condition
// Expression 3: Statement
console.log("for(b = 0; b < 5; b++)");
for(b=0;b<5;b++){
    if(b>=1){
        b++;
        console.log(b+" Is an even");
    }
}

array = ["ball", "pen", "egg", "chair", "paper", "laptop"];

for(b=0; b<array.length; b++){
    console.log((b+1)+". "+array[b]);
}

var i = 0;
while(i<5){
    i++;
    console.log(i)
}

var Lemuel = array.length;
while(Lemuel>0){
    Lemuel--;
    console.log(array[Lemuel])
}