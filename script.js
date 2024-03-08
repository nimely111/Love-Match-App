//global variabes
let person_Age;
let love_Match;
let  person_Name;
// search btn
function search(h1_Element, love_Match){
     person_Name = prompt('What is your name?');
     person_Age = prompt('What is your age?');
     h1_Element = document.createElement('h1');
     love_Match = Math.floor(Math.random() * 100);
     text_Answer = document.createTextNode(person_Name + ', your love match is ' + love_Match + ' & you are ' + person_Age + ' years old');
    h1_Element.setAttribute('id', 'loveMatch');
    h1_Element.appendChild(text_Answer);
    document.querySelector('.love-found').appendChild(h1_Element);
    match();
}

function match(p, text_Answer1){
 p = document.createElement('p');
 text_Answer1 = document.createTextNode( '');
p.setAttribute('id','condition');
p.appendChild(text_Answer1);
document.querySelector('.love-found').appendChild(p);

    // var x = 2;
    // var y = 1;

    console.log(person_Age, love_Match);
    if(person_Age >= love_Match){
        let result = document.querySelector('.love-found');
        result.innerHTML = 'Congrats, you both match';
        result.classList.add('pass')

}else{
        let result = document.querySelector('.app-response')
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
