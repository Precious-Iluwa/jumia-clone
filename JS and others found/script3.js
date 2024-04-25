function sum(num1, num2){
    console.log("The sum of "+num1+" and "+num2+" is: "+(num1+num2));
}

sum(2, 4);


function hbd(name, age, height){
    console.log("Happy "+age_suffix(age)+" birthday, "+name+". I hate you so much. Why? What about location? Hahahaha because "+height+" short");
}

function age_suffix(age){
    age_string = age;
    if(age>=10&&age<=20)
    age_string = age_string+"th";

    return age_string;
}

hbd("Jeffrey", 19, 1.75);
hbd("Praise", 12, 1.3);

array = ["ball", "pen", "egg", "chair", "paper", "laptop"];

lists = "<ol>";
for(b=0; b<array.length; b++){
    lists += "<li>"+array[b]+"</li>";
}
lists += "</ol>";

document.getElementById("list").style.color = "red";
document.getElementById("list").innerHTML = lists;