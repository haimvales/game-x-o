import input from 'analiza-sync'
import { edit_value, screen_launcher, screen_printing } from './utils/screen.js'
import { is_it_again, is_it_empty, is_there_a_winner } from './utils/translator.js'
import { actor_creator, add_win, create_rand_num, preent_winer } from './utils/pleyer.js'

export let player_pointer = 0
export const mod_Player_pointer = 2
export const valus = ['X','O']
export let screen = screen_launcher()
export const val = input('you is x or o').toLocaleUpperCase()
export let players = actor_creator(input('enter your name'),val,'momo')
export let again = 'Y'
export let x = 0
export let y = 0
while(again == 'Y'){
 
    player_pointer = 0
    screen = screen_launcher()
    let is = valus[mod_Player_pointer % 2]
    let index = players.findIndex(element => element.value == is)

    while(is_there_a_winner(screen) == false && player_pointer < 9){
        is = valus[player_pointer % 2]
        index = players.findIndex(element => element.value == is)        
        if(players[index].name != 'AI'){
            
            x = input("enter x")
            y = input("enter y")
        }
        else{
           x = create_rand_num(3)
           y = create_rand_num(3)
       }      
        if(is_it_empty(screen,x,y)){
            edit_value(screen,x,y,is)
            player_pointer += 1
            screen_printing(screen)                
            }
        else{
            console.log(`is not empty`);
            screen_printing(screen)
        }
    }
    if (is_there_a_winner(screen)){
        console.log(players);
        
        players = add_win(players,is)
        preent_winer(is,players)
        screen_printing(screen)
    }
    else{
        console.log(`no winer`);
        screen_printing(screen)  
    }
    again = is_it_again()
}
