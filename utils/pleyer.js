
export function actor_creator(name_player_1,val,name_player_2 = 'AI'){
    if(val === 'X'){var val_ai = 'O'}  
    else{var val_ai = 'X'}
    const player1 = {name:name_player_1,number_of_wins:0,value:val}
    const player2 = {name:name_player_2,number_of_wins:0,value:val_ai}
    return [player1,player2]
}

export function create_rand_num(n){
    const num = Math.floor(Math.random() * n ) 
    return num
}

export function add_win(players,val){
    let index = players.findIndex( elemnt => elemnt.value === val)
    players[index].number_of_wins += 1
    return players
}

export function preent_winer(val,players){
    let winer = players.find(element => element.value == val)
    console.log(`winer`, winer);
    console.log(players);
}

