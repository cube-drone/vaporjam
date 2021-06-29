import * as PIXI from 'pixi.js';

export default class TitleScreen{

    static loadAssets(loader){
        loader
            .add("background", "images/vaporjam/bgwave.gif")
            .add("bg_grid", "images/vaporjam/magenta-grid-tall.gif")
            .add("bg_memphis", "images/vaporjam/memphis-colorshocked.png")
            .add("title", "images/vaporjam/title.png")
            .add("title_window", "images/vaporjam/window.png")
        return loader;
    }

    constructor({app}){
        this.app = app;
        this.started = false;
        this.container = new PIXI.Container();

        this.start = this.start.bind(this);
        this.animate = this.animate.bind(this);
        this.triggerTitleWindow = this.triggerTitleWindow.bind(this);
        this.stop = this.stop.bind(this);
    }

    start(){
        let app = this.app;
        this.bg = new PIXI.Sprite(app.loader.resources.background.texture);
        this.container.addChild(this.bg);
        
        this.grid = new PIXI.Sprite(app.loader.resources.bg_grid.texture);
        this.container.addChild(this.grid);

        this.memphis = new PIXI.Sprite(app.loader.resources.bg_memphis.texture);
        this.memphis.scale.x = 1.5;
        this.memphis.scale.y = 1.5;
        this.container.addChild(this.memphis);
        
        app.stage.addChild(this.container);
        
        setTimeout(this.triggerTitleWindow, 500);

        app.ticker.add(this.animate);
    }

    animate(){
        this.memphis.x -= 1;
        this.grid.y -= 1;
        if(this.memphis.x < -600){
            this.memphis.x = 0;
        }
        if(this.grid.y < -500){
            this.grid.y = 0;
        }
    }

    triggerTitleWindow(){
        let app = this.app;

        let titleWindow = new PIXI.Sprite(app.loader.resources.title_window.texture);
        titleWindow.x = 10;
        titleWindow.y = 10;
        this.container.addChild(titleWindow);

        let title = new PIXI.Sprite(app.loader.resources.title.texture);
        title.x = 240;
        title.y = 130;
        this.container.addChild(title);

        let startText = new PIXI.Text('S T A R T', {
            fontFamily : 'Arial', 
            fontSize: 24, 
            fill : 0xff1010, 
            align : 'center'
        });
        startText.x = 50;
        startText.y = 400;

        this.container.addChild(startText);

    }

    stop(){
        this.app.stage.removeChild(this.container);
        this.container.destroy();
        this.app.ticker.remove(this.animate);
    }

}