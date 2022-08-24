import { monsters} from './monsters.js';


console.log(monsters);

for(let monster of monsters) {
    showMonster(monster);

}

function showMonster(monster){
    const monsterDiv=document.createElement('div');
    monsterDiv.className="monster";


    const img = document.createElement('img');
    img.src = monster.img;
    img.alt = monster.name;

    const name= document.createElement('p');
    name.className='name';
    name.innerHTML=monster.name;

    const email= document.createElement('p');
    email.className='email';
    email.innerHTML=monster.email; 

    monsterDiv.append(img, name, email);
    document.querySelector('.monsters').append(monsterDiv);
}

notFound();
function notFound(){
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className='p-1 not-found';
    notFoundDiv.style.display='none';

    const span = document.createElement('span');
    span.innerText='404';

    const h1= document.createElement('h1');
    h1.innerText='🧟‍♂️ No Monster Found 🧟‍♂️';

    notFoundDiv.append(span, h1);
    document.querySelector('.monsters').append(notFoundDiv);
}