import * as PIXI from 'pixi.js';
import setupDefaultControls from './control';
import TitleScreen from './TitleScreen';

async function main(){

    setupDefaultControls();
	//Create a Pixi Application
	let app = new PIXI.Application({width: 600, height: 800});
    TitleScreen.loadAssets(app.loader);
    app.loader
        .load((bort)=>{
            console.log("load complete", bort);

            let ts = new TitleScreen({app});
            ts.start();
            
            //Add the canvas that Pixi automatically created for you to the HTML document
            document.getElementById("pixi").appendChild(app.view);

        });

}

window.main = main;
