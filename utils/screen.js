
export function screen_printing(screen){
        console.log(`screen:`);    
    screen.forEach(element => {   
        console.log(element);
    });
}

export function screen_launcher(){
    return [['0.0','1.0','2.0'],['0.1','1.1','2.1'],['0.2','1.2','2.2']]
}

export function edit_value(screen,x,y,val){
    screen[y][x] = val
}

