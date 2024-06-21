const data = document.getElementById('counter');

const parentColor = document.getElementById('parent');

const decBtn = document.getElementById('btn1');
const incBtn = document.getElementById('btn2');


decBtn.addEventListener('click',()=>{
    parentColor.style.backgroundColor = 'red';

    setTimeout(()=>{
        parentColor.style.backgroundColor = 'white';
    },100)
})

incBtn.addEventListener('click',()=>{
    parentColor.style.backgroundColor = 'green';

    setTimeout(() => {
        parentColor.style.backgroundColor = 'white';
    }, 100 );
})


const increment = () =>{
    let value = parseInt(data.innerText);
    value+=1;
    data.innerText = value;
}
const decrement = () =>{
    let value = parseInt(data.innerText);
    value-=1;
    data.innerText = value;
}