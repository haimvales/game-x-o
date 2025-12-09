
export function screen_printing(screen){
        console.log(`screen:`);    
    screen.forEach(element => {   
        console.log(element);
    });
}

export function screen_launcher(){
    return [['?','-','?'],['_','.','*'],['.','-','?']]
}

export function edit_value(screen,x,y,val){
    screen[y][x] = val
}

