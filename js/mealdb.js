// // get input value by clicking button
// // Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });

const loadAllData=async()=>{
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value
    const spinner=document.getElementById('spinner')
    spinner.classList.remove('d-none')
   if (searchText.length==0) {
    spinner.classList.add('d-none')
       document.getElementById('warning').classList.remove('d-none')
    searchField.value=''
   }
   else{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    //    console.log(url)
    const res=await fetch(url)
    const data=await res.json()
    disPlayMeals(data.meals)
    // console.log(data.meals)
    spinner.classList.add('d-none')
    document.getElementById('warning').classList.add('d-none')

    searchField.value=''
   }
}
// all meals shows in ui
const disPlayMeals=(meals)=>{
    let CardContainer=document.getElementById('meal-items')
    CardContainer.innerHTML=''
   
        meals.forEach(meal => {
            //    console.log(meal)
                const newCard=document.createElement('div')
                newCard.classList.add('col')
            const{idMeal,strMeal,strMealThumb}=meal;
                newCard.innerHTML=`
              
                              <div onClick="showSigleItem(${idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="card h-100">
                                <img src="${strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${strMeal}</h5>
                                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <button type="button" class="btn btn-danger w-50 mx-auto mb-3" >Show Details</button>
                              </div>
                            
                `
                CardContainer.appendChild(newCard)
                
            });
    
       

    
}

// show single data in ui
const showSigleItem=async(id)=>{
    const modalBody=document.getElementById('modal-body')
    modalBody.innerHTML=''
   const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
   const res=await fetch(url)
   const data=await res.json()
   const singleData=data.meals[0]
   console.log(singleData)
   const newCard=document.createElement('div')
   const{strMeal,strCategory,strArea}=singleData
   newCard.innerHTML=`
<p>Name: ${strMeal}</>
<p>Category: ${strCategory}</>
<p>Origin: ${strArea}</p>
 `
 modalBody.appendChild(newCard)
}

