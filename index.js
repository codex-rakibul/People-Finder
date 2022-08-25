import { peoples} from './peoples.js';


for(let people of peoples) {
    showMonster(people);

}

function showMonster(people){
    const peopleDiv=document.createElement('div');
    peopleDiv.className="people";


    const img = document.createElement('img');
    img.src = people.img;
    img.alt = people.name;

    const name= document.createElement('p');
    name.className='name';
    name.innerHTML=people.name;

    const email= document.createElement('p');
    email.className='email';
    email.innerHTML=people.email; 

    peopleDiv.append(img, name, email);
    document.querySelector('.peoples').append(peopleDiv);
}

notFound();
function notFound(){
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className='p-1 not-found';
    notFoundDiv.style.display='none';

    const span = document.createElement('span');
    span.innerText='404';

    const h1= document.createElement('h1');
    h1.innerText='🧟‍♂️ No People Found 🧟‍♂️';

    notFoundDiv.append(span, h1);
    document.querySelector('.peoples').append(notFoundDiv);
}


/**********************/
/*   search-people  */
/**********************/
document.querySelector('#search-people')
    .addEventListener('keyup', function(e){
    const keyword = e.target.value.toLowerCase();
    const peoples = document.querySelectorAll('.people');
    
    let notFound = true;

    for(let people of peoples) {
        const name = people.children[1].innerText.toLowerCase();
        const email = people.children[2].innerText.toLowerCase();

        if(name.includes(keyword) || email.includes(keyword)){
            people.style.display = 'block';
            notFound = false;
        }else{
            people.style.display = 'none';

        }
    }
    if(notFound) {
        document.querySelector('.not-found').style.display = 'block';
    }else{
        document.querySelector('.not-found').style.display = 'none';
    }

});
document.querySelector('#search-people-form').
    addEventListener('submit', e=>{
        e.preventDefault();
    });
