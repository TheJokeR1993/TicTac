back.addEventListener('click',e=>{
    const last_box = +e.target.value.slice(2)
    number--
    

    game_item[last_box-1].innerHTML= ''

    arr[last_box-1]= last_box
    Game.history = arr
    Game.step = !Game.step
    Game.step
    ? Game.first.back_step +=1
    : Game.second.back_step +=1
    e.target.style.display = 'none'
    localStorage.setItem('last',JSON.stringify(Game))
    active(!Game.step)
    
   
})

function back_step(i){
    i>=3 &&(back.children[0].style.display='none') 
}
