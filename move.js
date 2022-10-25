function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left,bottom, callback) {
        let direction = null
        //It will also be helpful to keep track of the character's current position with the following variables:
        let x=left
        let y = bottom
        //Now we can think through the logic that would move the character image based on the current direction. For example, if the character is moving west, then x (the distance between the character and the left side of the screen) should decrease:
        setInterval(function() {
        if(direction === 'west') {
            x = x -1
        }
        
        if(direction === 'north') {
            y = y + 1
        }
        
        if(direction === 'east') {
            x = x +1
        }
        
        if(direction === 'south') {
           y = y -1
        } 
        
        //We will finish by using x and y to update the character's left and bottom properties. We are left with the following:
        element.style.left = x + 'px'
        element.style.bottom = y +'px'
        } ,1)
        //The only real problem with this logic is that it runs once (when the page loads and our character should be standing still). We need it to run repeatedly, so the character moves continuously when the direction is not null.
        //There is a function in JavaScript called setInterval that can help with this. The setInterval function takes a callback function as its first argument and a certain number of milliseconds as its second argument. It then calls the callback repeatedly, waiting the specified number of milliseconds between each call.
        
        //Now that we can move the character by setting the direction variable, let's use event listeners to change the direction whenever the user presses one of the arrow keys. There is a DOM event we can listen for named keydown, which will fire anytime the user presses a key:
        
        document.addEventListener('keydown', function(e){
            if(e.repeat){
                return
            }
                   if(e.key === 'ArrowLeft') {
                    direction ='west'
                   }
        
                   if(e.key === 'ArrowRight') {
                    direction ='east'
                   }
        
                   if(e.key === 'ArrowUp') {
                    direction = 'north'
                   }
        
                   if(e.key === 'ArrowDown') {
                    direction = 'south'
                   }
        
                 callback(direction)
        })

        document.addEventListener('keyup' , function(e){
            direction = null
        })
    
         callback(direction)
    }

    
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}