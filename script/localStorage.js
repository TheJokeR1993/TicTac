function Current_game(arg){
    Game.isCurrent_game = true
    Game.history= arr
    localStorage.setItem('last',JSON.stringify(Game))

}

function new_game(arg){
    arg.first_move = !arg.first_move
    arg.history = []
    localStorage.removeItem('last')
    localStorage.setItem('games',JSON.stringify(arg))
    setInterval(() => {
        location.reload();
    return false;
    }, 500);
    
}

document.addEventListener('click',e=>{
    const back_name= location.href.split('index.html')
   if(e.target.innerHTML==='X') {
    localStorage.removeItem('last')
    localStorage.removeItem('games')
       location.href = back_name[0] + 'first.html'
}
})

const save_step_robot = ()=>{

    localStorage.setItem('last',JSON.stringify(Game))

}
