
export default function setupControlEvents(){
    window.LKeys = ["KeyA", "KeyJ", "ArrowLeft", "Digit1", "Digit4", "Digit7"];
    window.MKeys = ["KeyS", "KeyW", "KeyK", "ArrowUp", "ArrowDown", "Digit2", "Digit5", "Digit8"];
    window.RKeys = ["KeyD", "KeyL", "ArrowRight", "Digit3", "Digit6", "Digit9"];

    window.addEventListener('keydown', function(event){
        if(window.LKeys.includes(event.code)){
            window.L = true;
            window.dispatchEvent(new Event("LPressed"))
        }
        if(window.MKeys.includes(event.code)){
            window.M = true;
            // so, you're brad pitt? 
            // that impress you much, right? 
            //  right?
            window.dispatchEvent(new Event("MPressed"))
        }
        if(window.RKeys.includes(event.code)){
            window.R = true;
            window.dispatchEvent(new Event("RPressed"))
        }
    })
    window.addEventListener('keyup', function(event){
        if(window.LKeys.includes(event.code)){
            window.L = false;
            window.dispatchEvent(new Event("LReleased"))
        }
        if(window.MKeys.includes(event.code)){
            window.M = false;
            window.dispatchEvent(new Event("MReleased"))
        }
        if(window.RKeys.includes(event.code)){
            window.R = false;
            window.dispatchEvent(new Event("RReleased"))
        }
    })

    window.addEventListener('LPressed', function(event){
        console.log("LPressed");
    })
    window.addEventListener('MPressed', function(event){
        console.log("MPressed");
    })
    window.addEventListener('RPressed', function(event){
        console.log("RPressed");
    })
    window.addEventListener('LReleased', function(event){
        console.log("LReleased");
    })
    window.addEventListener('MReleased', function(event){
        console.log("MReleased");
    })
    window.addEventListener('RReleased', function(event){
        console.log("RReleased");
    })

}