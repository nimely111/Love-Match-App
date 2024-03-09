//global variabes
let  person_Age;
let  love_Match;
let  person_Name;
let  love_Match_Result = document.getElementById('loveMatch');
let  love_Found = document.querySelector('.love-found');
// search btn
function search(h1_Element, love_Match){
        person_Name = prompt('What is your name?');
        person_Age = prompt('What is your age?');
        h1_Element = document.createElement('h1');
        love_Match = Math.floor(Math.random() * 100);
        h1_Element.setAttribute('id', 'loveMatch');
        h1_Element.appendChild(document.createTextNode
            (`${person_Name}, your love match is ${love_Match} & you are ${person_Age} years old`));
            love_Found.appendChild(h1_Element);
        match();
}

//match users to their random love match
function match(p, text_Answer1, result){
        p = document.createElement('p');
        text_Answer1 = document.createTextNode( '');
        p.setAttribute('id','condition');
        p.appendChild(text_Answer1);
        love_Found.appendChild(p);

    if(person_Age >= love_Match){
        result = document.querySelector('.love-found');
        result.innerHTML = 'Congrats, you both match';
        result.classList.add('pass')

    }else{
        result = document.querySelector('.app-response')
        result.innerHTML = 'Sorry, We did not find your match, please try again'; 
        result.classList.add('fail')
}
}

// reset
function reset(){
    love_Match_Result.remove()
    document.getElementById('condition').remove();
}
