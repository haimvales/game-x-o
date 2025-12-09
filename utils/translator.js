import input from 'analiza-sync'

export function is_it_empty(screen,x,y){
    if(screen[y][x] != 'X' && screen[y][x] != 'O')
        return true
    return false
}

export function is_there_a_winner(s){
    if(s[0][0] === s[0][1] && s[0][0] === s[0][2])
        return s[0][0]
    if(s[1][0] === s[1][1] && s[1][0] === s[1][2])
        return s[1][0]
    if(s[2][0] === s[2][1] && s[2][0] === s[2][2])
        return s[2][0]
    if(s[0][0] === s[1][0] && s[0][0] === s[2][0])
        return s[0][0]
    if(s[0][1] === s[1][1] && s[0][1] === s[2][1])
        return s[0][1]
    if(s[0][2] === s[1][2] && s[0][2] === s[2][2])
        return s[0][2]
    if(s[0][0] === s[1][1] && s[0][0] === s[2][2])
        return s[0][0]
    if(s[0][2] === s[1][1] && s[0][2] === s[2][0])
        return s[0][2]
    return false
}

export function is_it_again(){
    const again = input('Is it again? y/n')
    return again.toLocaleUpperCase()
}

