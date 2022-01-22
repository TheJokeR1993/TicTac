function rezults (item){
    if(item===9) return draw_f()
    if(item>=5){
        victory()
    } 
     
}

function victory(){
 return  win_arr.forEach(i=>{
        if(arr[i[0]] ===arr[i[1]] && arr[i[0]] ===arr[i[2]]){
          let wins=(  player_items[0].children[1].innerHTML ===  arr[i[0]]
              ?player_items[0].children[0].innerHTML
              :player_items[1].children[0].innerHTML ) 
                //   console.log(player_items[0].parentElement);
          player_items[0].parentElement.innerHTML =`
          <div class="result">
          <h2>${wins}</h2>
          <img src="https://www.spirit-of-metal.com/les%20goupes/V/Victory%20(GER)/pics/logo.jpg" alt="">
          </div>
          `
          game_item[i[0]].style.background = 'rgb(0, 212, 0)'
          game_item[i[1]].style.background = 'rgb(0, 212, 0)'
          game_item[i[2]].style.background = 'rgb(0, 212, 0)'
          Game.first.count_game +=1
          Game.second.count_game +=1
          if(wins === Game.first.name){
              Game.first.win +=1
              Game.second.lose +=1
          } else{
            Game.second.win +=1
            Game.first.lose +=1
          }
        repeat()
        } 
        
    })
}


function draw_f(){
   
    victory()
    player_items[0].classList.add('active')
    player_items[1].classList.add('active')
    draw.innerHTML=`
        <h3>draw</h3>
        <img src="https://img2.freepng.ru/20180824/aiy/kisspng-vector-graphics-clip-art-handshake-image-illustrat-about-us-5b8096f8eadd97.579423981535153912962.jpg">
    `
    repeat()
    Game.first.draw +=1
    Game.second.draw +=1
    Game.first.count_game +=1
    Game.second.count_game +=1
    
}
function repeat (){
    game.innerHTML += `
    <div class="repeat" onclick="new_game(Game)">
    <img  class="repeat_img" src="http://s1.iconbird.com/ico/0512/BrushedMetalIcons/file1336772950.png" alt="">
    </div>
    `
    back.innerHTML=''
 }