const inventory = newInventory()
move(inventory).to(0, 0)
//When we are finished, the player should be able to move the character by pressing the arrow keys. In other words, when the user presses the up arrow, the character should move up. If the player then presses the right arrow, the character should switch directions and move right.

//Since the direction of our character will change, we will need to track it with a variable:
const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)



//move(newImage('assets/tree.png')).withArrowKeys(200, 450)


//Notice we are using another callback function here. The addEventListener receives the inline function we are passing, calls it whenever the event we specify fires, and passes in the e object as an argument.

//Recall "e" is an object containing details about the event that fired.

//Inside our callback function, we will need to check which key was pressed. We can do this using e.key. We will check e.key and, depending on its value, change the character's direction accordingly:

//At this point, you should be able to open the browser, press any of the arrow keys, and see the character start to move across the screen. However, when you release the key, the character probably keeps moving.
//We need one more event listener to stop the character when the user releases a key:







//move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)