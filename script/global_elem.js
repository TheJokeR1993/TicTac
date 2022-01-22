let Game = {
    first:{
        win :0,
        lose : 0,
        draw : 0,
        count_game:0,
        back_step : 0,
        name : ''
    },
    second : {
        win :0,
        lose : 0,
        draw : 0,
        count_game:0,
        back_step : 0,
        name : ''
    },
    first_move: true,
    step : true,
    isCurrent_game:false,
    history : [],
    data : [],
}

const get_current_time = new Date().getTime()/1000;

let number = 0
const arr=[1,2,3,4,5,6,7,8,9]
const win_arr =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const name = location.search.slice(1).split('&')
const proritet = {
    one : [1,3,5,7],
    two : [0,2,6,8],
    three: [4]
}