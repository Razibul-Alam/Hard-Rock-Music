// selected elements by using id 
const searchField=document.getElementById('search-field').value;
const mainDiv=document.getElementById('main-div');
const modalBody=document.getElementById('modal-body');

// get all data from server
const getAllData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>displayData(data))
}

// show all data at home page 
const displayData=(data)=>{
// console.log(memes)
data.forEach(meme => {
    const{name,email,id}=meme;
    const newDiv=document.createElement('div')
    newDiv.classList.add('col-lg-3','text-center', 'border', 'border-danger', 'm-4', 'p-3')
    newDiv.innerHTML=`
    <h3>${name}</h3>
    <h4>${email}</h4>
    <button onclick="getDetails(${id})"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
    `
    mainDiv.appendChild(newDiv)
});

}

// show single data at ui
const getDetails=(id)=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/`)
    .then(res=>res.json())
    .then(data=>{
       modalBody.innerHTML=`
       <h2>Id: ${data.id}</h2>
       <h3>Name: ${data.name}</>
       <h4>Email: ${data.email}</h4>
       ` 
    })
    }
