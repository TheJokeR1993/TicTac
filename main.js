// const game = document.querySelector('.game')
// const game_item = document.querySelectorAll('.game_item')
// const player = document.querySelector('.player')
// const player_items = document.querySelectorAll('.player_item')
// const draw = document.querySelector('.draw')
// const back = document.querySelector('.back')
// const container_first= document.querySelector('.container_first')
// let Game = {
//     first:{
//         win :0,
//         lose : 0,
//         draw : 0,
//         count_game:0,
//         back_step : 0,
//         name : ''
//     },
//     second : {
//         win :0,
//         lose : 0,
//         draw : 0,
//         count_game:0,
//         back_step : 0,
//         name : ''
//     },
//     first_move: true,
//     step : true,
//     isCurrent_game:false,
//     history : [],
//     data : [],
    
    

// }
// const get_current_time = new Date().getTime()/1000;

// let number = 0
// const arr=[1,2,3,4,5,6,7,8,9]
// const win_arr =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


// function redirect(){
//     const name =location.search.slice(1).split('&')
//     if(name.length !== 1){
//         Game.first.name = name[0]
//         Game.second.name = name[1]
//         player_items[1].children[0].innerHTML = Game.second.name
//         player_items[0].children[0].innerHTML = Game.first.name

//     }else{
//         location.href = location.href.split('index.html').join('') + 'first.html'
//     }
    
// }

// first_start.redirect
// first_start.first()
// function first() {
//     if( JSON.parse(localStorage.getItem('last'))){
//         Game = JSON.parse(localStorage.getItem('last'))

//         if( Game.data+86400 <= get_current_time) {
//              localStorage.removeItem('last')
//             return first()
//             }
            
//         for (let i = 0; i < Game.history.length; i++) {
//             Game.history[i]==='x' && (game_item[i].innerHTML='x')
//             Game.history[i]==='o' && (game_item[i].innerHTML='o')
//             Game.history[i] !== +Game.history[i] &&(number+=1)
//             arr[i]= Game.history[i]
            
//         }
//          victory()       
//         if(number===9) return draw_f()
//         first_move(player_items)
//     } else {
//         if(JSON.parse(localStorage.getItem('games'))){
//             Game = JSON.parse(localStorage.getItem('games'))
//         }
        
        
//         Game.data = get_current_time
//         Game.step = true
        
//         first_move(player_items)
      
//         Game.first.back_step = 0
//         Game.second.back_step = 0
//     }

// }





// function first_move(arg){
//     console.log(Game.first_move);
//     if(Game.first_move){
//         arg[1].children[0].innerHTML = Game.second.name
//         arg[0].children[0].innerHTML = Game.first.name
//         active(Game.step)
//         statistics(arg[0],arg[1])
//     } else{
//         arg[1].children[0].innerHTML = Game.first.name
//         arg[0].children[0].innerHTML = Game.second.name
//         active(Game.step)  
//         statistics(arg[1],arg[0])
//     }
    
    
// }
// first()

// function statistics (...item){
    
//     for (let i = 0; i < item.length; i++) {
        
//         item[i].innerHTML += `
//             <p class="win_statistics">
//             victory : <b>${i?Game.second.win:Game.first.win}</b>
//             </p>
           
//         `
        
//     }
  
    
// }



// game.addEventListener('click',e=>{
    
//     if(e.target.innerHTML || e.target.className === 'repeat_img') return
    
//     const num = +e.target.classList[1].slice(2)
//     back.innerHTML = `<button value="${e.target.classList[1]}">Back</button>`
  
//    if(Game.step){
//        e.target.innerHTML = "x" 
//        arr[num-1]= 'x'
//        back_step(Game.first.back_step)
//        Game.step = !Game.step
//    }else{
//        e.target.innerHTML = "o"
//        arr[num-1]= 'o'
//        back_step(Game.second.back_step)
//        Game.step = !Game.step
//    }
//    active(Game.step)
//     number++
//     rezults(number)
//     Current_game(Game.isCurrent_game)
// })

// function Current_game(arg){
//     Game.isCurrent_game = true
//     Game.history= arr
//     localStorage.setItem('last',JSON.stringify(Game))

// }


// function active(arg){
//     player_items[+arg].classList.remove('active')
//     player_items[+!arg].classList.add('active')
// }

 

// function rezults (item){
//     if(item===9) return draw_f()
//     if(item>=5){
//         victory()
//     } 
     
// }

// function victory(){
//  return  win_arr.forEach(i=>{
//         if(arr[i[0]] ===arr[i[1]] && arr[i[0]] ===arr[i[2]]){
//           let wins=(  player_items[0].children[1].innerHTML ===  arr[i[0]]
//               ?player_items[0].children[0].innerHTML
//               :player_items[1].children[0].innerHTML )     
//           player_items[0].parentElement.innerHTML =`
//           <div class="result">
//           <h2>${wins}</h2>
//           <img src="https://www.spirit-of-metal.com/les%20goupes/V/Victory%20(GER)/pics/logo.jpg" alt="">
//           </div>
//           `
//           game_item[i[0]].style.background = 'rgb(0, 212, 0)'
//           game_item[i[1]].style.background = 'rgb(0, 212, 0)'
//           game_item[i[2]].style.background = 'rgb(0, 212, 0)'
//           Game.first.count_game +=1
//           Game.second.count_game +=1
//           if(wins === Game.first.name){
//               Game.first.win +=1
//               Game.second.lose +=1
//           } else{
//             Game.second.win +=1
//             Game.first.lose +=1
//           }
//         repeat()
//         } 
        
//     })
// }


// function draw_f(){
   
//     victory()
//     player_items[0].classList.add('active')
//     player_items[1].classList.add('active')
//     draw.innerHTML=`
//         <h3>draw</h3>
//         <img src="https://img2.freepng.ru/20180824/aiy/kisspng-vector-graphics-clip-art-handshake-image-illustrat-about-us-5b8096f8eadd97.579423981535153912962.jpg">
//     `
//     repeat()
//     Game.first.draw +=1
//     Game.second.draw +=1
//     Game.first.count_game +=1
//     Game.second.count_game +=1
    
// }

// function repeat (){
//    game.innerHTML += `
//    <div class="repeat" onclick="new_game(Game)">
//    <img  class="repeat_img" src="http://s1.iconbird.com/ico/0512/BrushedMetalIcons/file1336772950.png" alt="">
//    </div>
//    `
//    back.innerHTML=''
// }

// back.addEventListener('click',e=>{
//     const last_box = +e.target.value.slice(2)
//     number--
    

//     game_item[last_box-1].innerHTML= ''

//     arr[last_box-1]= last_box
//     Game.history = arr
//     Game.step = !Game.step
//     Game.step
//     ? Game.first.back_step +=1
//     : Game.second.back_step +=1
//     e.target.style.display = 'none'
//     localStorage.setItem('last',JSON.stringify(Game))
//     active(!Game.step)
    
   
// })

// function back_step(i){
//     i>=3 &&(back.children[0].style.display='none') 
// }

// function new_game(arg){
//     arg.first_move = !arg.first_move
//     arg.history = []
//     localStorage.removeItem('last')
//     localStorage.setItem('games',JSON.stringify(arg))
//     setInterval(() => {
//         location.reload();
//     return false;
//     }, 500);
    
// }

// document.addEventListener('click',e=>{
//     const back_name= location.href.split('index.html')
    
//    if(e.target.innerHTML==='X') {
//     localStorage.removeItem('last')
//     localStorage.removeItem('games')
//        location.href = back_name[0] + 'first.html'
// }
// })










// console.log(Game.history);



// const  UserS = win_rezult(robot_figure)
// const step = stepFun(another_player)






// const s = all_win_position(UserS,step)
// console.log(s);
// console.log(win_position(s));

// const dataStep = {
//     robot : {
//         name : robot_figure,
//         arrWin :  win_rezult(another_player),
//         step : stepFun(robot_figure),
//         arrMaybeWin : function(){
            
//             return all_win_position(this.arrWin,this.step)
//         },
//         arrStep : function(){return win_position(this.arrMaybeWin())},
        
//     },
//     user :{
//         name : another_player,
//         arrWin :  win_rezult(robot_figure),
//         step : stepFun(another_player),
//         arrMaybeWin : function(){
//             return all_win_position(this.arrWin,this.step)
//         },
//         arrStep : function(){return win_position(this.arrMaybeWin())},
//     }
    
    
    
// }

