


const addPlayer=()=>{
    const url=`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=mbappe`
fetch(url)
.then(res=>res.json())
.then(data=>{
   const{strPlayer}=data.player[0]

   const newPlayer=document.createElement('div')
   newPlayer.classList.add('col-lg-3')
   newPlayer.innerHTML=`<h3>
   ${strPlayer}</h3>`
document.getElementById('section').appendChild(newPlayer)
})
}

