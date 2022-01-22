
function redirect() {
    if(name.length <= 1) return  location.href = location.href.split('index.html').join('') + 'first.html'

    Game.first.name = name[0]
    Game.second.name = name[1]
    player_items[1].children[0].innerHTML = Game.second.name
    player_items[0].children[0].innerHTML = Game.first.name
    
    

}


function first() {
    if (JSON.parse(localStorage.getItem('last'))) {
        Game = JSON.parse(localStorage.getItem('last'))

        if (Game.data + 86400 <= get_current_time) {
            localStorage.removeItem('last')
            return first()
        }

        Game.history.forEach((item, index) => {
            if (typeof item === 'number') return
            game_item[index].innerHTML = item
            number += 1
            arr[index] = item
        })



        victory()
        if (number === 9) return draw_f()
        first_move(player_items)
    } else {
        if (JSON.parse(localStorage.getItem('games'))) {
            Game = JSON.parse(localStorage.getItem('games'))
        }

// console.log(
//     // JSON.parse(localStorage.getItem('games'))
// );
        Game.data = get_current_time
        Game.step = true

        first_move(player_items)

        Game.first.back_step = Game.second.back_step = 0
    }

}





function first_move(arg) {

    const first = +!Game.first_move
    const second = +Game.first_move


    arg[first].children[0].innerHTML = Game.first.name
    arg[second].children[0].innerHTML = Game.second.name
    statistics(arg[first], arg[second])
    active(Game.step)
}


function statistics(...item) {

    for (let i = 0; i < item.length; i++) {

        item[i].innerHTML += `
            <p class="win_statistics">
            victory : <b>${i ? Game.second.win : Game.first.win}</b>
            </p>
           
        `

    }


}

function active(arg) {
    player_items[+arg].classList.remove('active')
    player_items[+!arg].classList.add('active')
}




(function () {
    redirect()
    first()
    first_step_robo()
})()

