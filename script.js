//global variabes
let personAge;
let loveMatch;
let  personName;
// search btn
function search(){
     personName = prompt('What is your name?');
     personAge = prompt('What is your age?');
    var h1Element = document.createElement('h1');
     loveMatch = Math.floor(Math.random() * 100);
    var textAnswer = document.createTextNode(personName + ', your love match is ' + loveMatch + ' & you are ' + personAge + ' years old');
    h1Element.setAttribute('id', 'loveMatch');
    h1Element.appendChild(textAnswer);
    document.getElementById('love-found').appendChild(h1Element);
    match();
}

function match(){
var p = document.createElement('p');
var textAnswer1 = document.createTextNode( '');
p.setAttribute('id','condition');
p.appendChild(textAnswer1);
document.getElementById('love-found1').appendChild(p);

    // var x = 2;
    // var y = 1;

    console.log(personAge, loveMatch);
    if(personAge >= loveMatch){
        let result = document.getElementById('love-found1');
        result.innerHTML = 'Congrats, you both match';
        result.classList.add('pass')

}else{
        let result = document.getElementById('love-found1')
        result.innerHTML = 'Sorry, We did not find your match, please try again'; 
        result.classList.add('fail')
}
}

// reset
function reset(){
    document.getElementById('loveMatch').remove();
    document.getElementById('condition').remove();

}

// A 10 times guesses game 
