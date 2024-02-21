const listElement = document.getElementById('list')
const fizz = 'fizz'
const buzz = 'buzz'

for(let i = 1; i < 101; i++){
    console.log(i)
    const markup = `<li>${i}</li>`

    if(i % 3 == 0){
        console.log(markup);
        listElement.innerHTML += markup
    } else if (i % 5 == 0){

    }else (i % 5 ==0 && i % 3 == 0){

    }


}