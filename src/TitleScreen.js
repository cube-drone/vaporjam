import * as PIXI from 'pixi.js';

export default class TitleScreen{

    static assetsToLoad(){

    }

    constructor({app}){
        this.app = app;
        this.started = false;
        this.container = new PIXI.Container();
    }

    start(){
        let app = this.app;
        let bg = new PIXI.Sprite(app.loader.resources.background.texture);
        this.container.addChild(bg);
        
        let grid = new PIXI.Sprite(app.loader.resources.bg_grid.texture);
        this.container.addChild(grid);

        let memphis = new PIXI.Sprite(app.loader.resources.bg_memphis.texture);
        memphis.scale.x = 1.5;
        memphis.scale.y = 1.5;
        this.container.addChild(memphis);
        
        let titleWindow = new PIXI.Sprite(app.loader.resources.title_window.texture);
        titleWindow.x = 10;
        titleWindow.y = 10;
        this.container.addChild(titleWindow);

        let title = new PIXI.Sprite(app.loader.resources.title.texture);
        title.x = 240;
        title.y = 130;
        this.container.addChild(title);

        app.stage.addChild(this.container);
        
        app.ticker.add((dt)=>{
            memphis.x -= 1;
            grid.y -= 1;
            if(memphis.x < -600){
                memphis.x = 0;
            }
            if(grid.y < -500){
                grid.y = 0;
            }
        })
    }

    stop(){

    }

}