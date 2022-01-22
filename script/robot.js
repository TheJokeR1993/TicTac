
const all_win_position =( UserS,step)=>{
   
    return UserS.map(win=>{
        let count = 0;
        step.forEach(step=>win.includes(step) && count++)

        return {
            win : win,
            count : count,
            winStep : win.filter(i=>arr[i]===i+1 )
        }
    })
    
}
const win_position= (arg)=>{
   
    // const win = []
    // const all_win =[]
    // arg.filter(obj=>{
    //     if(obj.count=== 2){
    //         return  win.push(obj)
    //     } else if(obj.count=== 1){
    //           obj.winStep.map(i=>all_win.push(obj))
    //     }
    // })

   let max = 0;
   arg.forEach(d=> d.count > max && (max = d.count))
   return arg.filter(d=>d.count === max)
//    console.log(max);
   

    if(win.length>0){
          return win
    } else{
    //   let all_wins =all_win.filter((i,index)=>all_win.win.indexOf(i,index+1)>0)
     let all_wins = all_win
      return  all_wins.length>0 ? all_wins :all_win
        
    }
  
}

const stepFun = (figure)=>Game.history.map((item,index)=>item === figure ? index:null).filter(i=>i !==null)
const win_rezult =(figure)=>{

    const steps =stepFun(figure)

    const winSteps = win_arr.filter(win=>{
    
       let isWin = false
     steps.forEach(step => {
    
          if(  win.includes(step)){
              isWin =  true
          }
        });
    
        return !isWin
       
    })
    return winSteps 
}

const all_step =(rob,user)=>{
    let  ad =[];
    rob.forEach(i=>i.winStep.map(ii=> ad.push(ii)))
    user.forEach(i=>i.winStep.map(ii=> ad.push(ii)))


    const currentA = {
        replay : 0,
        arr : []
    }
    ad.forEach(num=>{  
        const arrNumRep = ad.filter(n=>n===num)

        if(currentA.replay < arrNumRep.length){
            currentA.replay = arrNumRep.length
           
            currentA.arr = [arrNumRep[0]]
        }else if(currentA.replay === arrNumRep.length&& !currentA.arr.includes(arrNumRep[0])){
            currentA.arr = [...currentA.arr,arrNumRep[0]]
        }
    })

   
        return currentA.arr

}

//!

function robot_step() {
    if (name.length <= 2 || game.children.length === 10) return
    start_robot()
    save_step_robot()
}
const first_step_robo = () => {
    robot_figure = Game.first_move ? 'o' : 'x'
    another_player = robot_figure === 'x' ? 'o' : 'x'
    !Game.first_move && start_robot()
    
}



//?
const current_win_arr = (arg1, arg2) => {


    let maxs = 0;
    let current_win_step = []
    arg1.forEach(item => {
        let max = 0;
        arg2.forEach((step) => item.includes(step) && max++)

        if (max > maxs) {
            maxs = max
            current_win_step = []
            current_win_step.push(item)

        } else if (max === maxs) {
            current_win_step.push(item)
        }
    })
   

    return { current_win_step, maxs }
}

//?

function start_robot() {
    
    const fluently_index = arr
        .map((item, index) => (+item || item === 0) && index).filter(item => item || item === 0)

    if (!fluently_index.length) return
    smart_step(fluently_index)
    number += 1
    active(Game.first_move)
    Game.step = !Game.step

    rezults(number)
}


const paint_step = (fluently_index) => {
    // console.log(fluently_index);
    const random = Math.ceil(Math.random() * fluently_index.length - 1)


    arr[fluently_index[random]] = robot_figure
    game_item[fluently_index[random]].innerHTML = robot_figure
}

const smart_step = (fluently_index) => {
   
    switch (name[2]) {
        case 'easy':

            paint_step(fluently_index)

            break;
        case 'normal':
            paint_step(hard_step('medium'))
            break;
        case 'hard':
            
            paint_step(hard_step('hard'))
           // console.log(hard_step());
    
        }

}



const hard_step = (arg) => { 
    // const step_robot = arr.map((item, index) => item === robot_figure ? index : null).filter(el => el !== null)


    // const win_arr_User = win_rezult(robot_figure)
    // const win_arr_Robot = win_rezult(another_player)

    
    // const win_arr_another = win_arr.filter(item => step_robot.find(rob_st => item.includes(rob_st)) === undefined)
  
    // const area_step_another = arr.map((item, index) => item === another_player ? index : null).filter(el => el !== null)
    // const win_arr_robot = win_arr.filter(item => area_step_another.find(rob_st => item.includes(rob_st)) === undefined)
    
    // const robot = current_win_arr(win_arr_robot, step_robot)
    // const player = current_win_arr(win_arr_another, area_step_another)
    
    // const steps_robot = [];
    // const rezult_steps_robot = []
    console.log(10);
    console.log(Game.history);
    const dataStep = {
        robot : {
            name : robot_figure,
            arrWin :  win_rezult(another_player),
            step : stepFun(robot_figure),
            arrMaybeWin : function(){
                
                return all_win_position(this.arrWin,this.step)
            },
            arrStep : function(){return win_position(this.arrMaybeWin())},
            
        },
        user :{
            name : another_player,
            arrWin :  win_rezult(robot_figure),
            step : stepFun(another_player),
            arrMaybeWin : function(){
                return all_win_position(this.arrWin,this.step)
            },
            arrStep : function(){return win_position(this.arrMaybeWin())},
        }
        
        
        
    }
    window.dataStep = dataStep
    const rob = dataStep.robot.arrStep()
    const user = dataStep.user.arrStep()
    if(dataStep.robot.arrWin.length===0) return  [Game.history.find(i=>typeof i==='number')-1]
if(arg === 'hard'){

    
    if(dataStep.robot.step.length===1){
       if(Game.history[0]===Game.history[8]  ||Game.history[2]===Game.history[6])  return [1,3,5,7]
    } 
    
    if(rob[0].count === 2) return rob[0].winStep
    if(user[0].count === 2) return user[0].winStep
}


 return all_step(rob,user)




     
// if(steps_robot.includes(4)) return [4]


    
//     robot.current_win_step.filter(i => //get arr win combination player
//         i.filter(ii => {
//             player.current_win_step.filter(l =>
//                 l.filter(ll => ii === ll && (steps_robot.push(ii))))
//             }));
//             // console.log(10);
//             // console.log( steps_robot);

// // console.log(20);

// if(player.maxs||robot.maxs ===2){
//     let last_change = player.maxs === 2?player:robot
//     return  last_change.current_win_step[0].filter(i=>+arr[i])
    
// }
// // console.log(30);
// steps_robot.filter(i => { // get last arr step robot
    
    
//     if (proritet.two.filter(l => l === i).length) {
        
//         !rezult_steps_robot.includes(i) && rezult_steps_robot.push(i)
        
//     }
// })


// if(!rezult_steps_robot.length){
    
//     return arr.filter(i=>(+i||+i===0))
// }




}




