const listElement = document.getElementById('list')
const fizz = 'fizz'
const buzz = 'buzz'

for(let i = 1; i < 101; i++){
    console.log(i)
    const markup = `<li>${i}</li>`; 
    const elementFizz = `<li class="box_fizz">${fizz}</li>`;
    const buzzelement = `<li class="box_buzz">${buzz}</li>`
    const elementfizzbuzz = `<li class="box_fizzbuzz">${fizz}${buzz}</li>`
    console.log(markup);
    if(i % 3 == 0){
        listElement.innerHTML += elementFizz
    
    } else if (i % 5 == 0){
        listElement.innerHTML += buzzelement
    } else {
        listElement.innerHTML += markup
    }
    if (i % 5 ==0 && i % 3 == 0){
        listElement.innerHTML += elementfizzbuzz
    }
    
}