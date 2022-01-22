const click_step = (e)=>{
 

    const num = +e.target.classList[1].slice(2)
   if(window.location.search.split('&').length>2){
    back.innerHTML = ""
   }else{
        back.innerHTML = `<button value="${e.target.classList[1]}">Back</button>`
   }
  
   if(Game.step){
       e.target.innerHTML = "x" 
       arr[num-1]= 'x'
       back_step(Game.first.back_step)
       Game.step = !Game.step
   }else{
       e.target.innerHTML = "o"
       arr[num-1]= 'o'
       back_step(Game.second.back_step)
       Game.step = !Game.step
   }
   active(Game.step)
    number++
    rezults(number)
    Current_game(Game.isCurrent_game)

}


game.addEventListener('click',e=>{
    if(e.target.innerHTML || e.target.className === 'repeat_img') return
    click_step(e)
   
  
    robot_step()

   

})
function Current_game(arg){
    Game.isCurrent_game = true
    Game.history= arr
    localStorage.setItem('last',JSON.stringify(Game))

}