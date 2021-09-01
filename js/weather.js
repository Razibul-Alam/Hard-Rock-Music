

// const getData=()=>{
//     let searchValue=document.getElementById('search-input');
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue.value}&appid=cb4fefbf15545bfd34b26b01263bd0ae`)
// .then(res=>res.json())
// .then(data=>getSingleCity(data.main))


// }

// const showData=(data,extra)=>{
//     let h1=document.createElement('h1')
//     h1.innerText=''
//     let vary=''
//     if (extra=='temp') {
//         vary="Temperature"
//     }
//     else if(extra=='humidity'){
//         vary="Humidity"
//     }
//     else{
//       vary="Pressure"  
//     }
//     const dataDiv=document.createElement('div')
//       const div=document.getElementById('new-div')
// dataDiv.innerHTML=`
// <h1 id="h1">${vary} ${data}</h1>`
//     div.appendChild(dataDiv)
    
// }

// const getSingleCity=(data)=>{
//     const{temp,humidity,pressure}=data
//     console.log(data)
//     const mainSection=document.getElementById('main-section')
//     mainSection.innerHTML=''
//     let searchValue=document.getElementById('search-input');
// const newDiv=document.createElement('div')
// newDiv.setAttribute('id','new-div')
// newDiv.classList.add('border', 'border-danger', 'w-50', 'p-5', 'bg-primary', 'text-dark')
// newDiv.innerHTML=`
// <h1>City : ${searchValue.value}</h1>
// <div class="d-flex justify-content-center align-items-center mt-5" id="btn-div">
// <h1 class="mx-5"><i class="fas fa-sun" onClick="showData(${temp},'temp')"></i></h1>
// <h1 class="mx-5" onClick="showData(${humidity},'humidity')"><i class="fas fa-cloud-sun-rain"></i></h1>
// <h1 class="mx-5" onClick="showData(${pressure})"><i class="fab fa-pushed"></i></h1>
// </div>`

// mainSection.append(newDiv)
// // mainSection.appendChild(maxTemp)
// searchValue.value=''
// }

// let searchValue=document.getElementById('search-input');

// // Execute a function when the user releases a key on the keyboard
// searchValue.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     // document.getElementById("myBtn").click();
//     console.log('working')
//     getData()
//   }
// }); 



var axios = import("axios").default;

var options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/report/country/all',
  params: {date: '2020-04-01'},
  headers: {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': ''
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});