import * as PIXI from 'pixi.js';

async function main(){
	//Create a Pixi Application
	let app = new PIXI.Application({width: 600, height: 800});

	//Add the canvas that Pixi automatically created for you to the HTML document
	document.getElementById("pixi").appendChild(app.view);

	console.log("hello worlg");

    let LKeys = ["KeyA", "KeyJ", "ArrowLeft", "Digit1", "Digit4", "Digit7"];
    let MKeys = ["KeyS", "KeyW", "KeyK", "ArrowUp", "ArrowDown", "Digit2", "Digit5", "Digit8"];
    let RKeys = ["KeyD", "KeyL", "ArrowRight", "Digit3", "Digit6", "Digit9"];

    window.addEventListener('keydown', function(event){
        if(LKeys.includes(event.code)){
            window.L = true;
            console.log("L");
        }
        if(MKeys.includes(event.code)){
            window.M = true;
            console.log("M");
        }
        if(RKeys.includes(event.code)){
            window.R = true;
            console.log("R");
        }
    })
    window.addEventListener('keyup', function(event){
        if(LKeys.includes(event.code)){
            window.L = false;
        }
        if(MKeys.includes(event.code)){
            window.M = false;
        }
        if(RKeys.includes(event.code)){
            window.R = false;
        }
        
        //console.log(event.key, event.code);
    })
}

window.main = main;
