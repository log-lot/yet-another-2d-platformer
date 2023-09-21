'use strict';

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
var scaleX = 0;
var scaleY = 0;

// import { Map }
// import { Camera }
import { DrawUtils } from "../utils/DrawUtils.js"
import { Background } from "./map-camera/Background.js"

export class GameDisplayer {

    // system
    game;
    map;
    camera;
    background = new Background();
    
    // fields
    originalWidth = canvas.width;
    originalHeight = canvas.height;

    drawUtils = new DrawUtils();
    background = new Background();

    constructor(game, map, camera) {
        this.game = game;
        this.map = map;
        this.camera = camera;
    }

    // methods (functions)
    drawGameFrame() {
       // this.camera.move(5, 3, 3)

        this.resizeCanvasForWindowSize();

        ctx.fillStyle = "#a7c7d8";
        ctx.rect(0, 0, 10000, 10000) 
        ctx.fill()

        this.background.Draw(this.camera.x, this.camera.y)

        this.drawUtils.Bean(this.originalWidth / 2, this.originalHeight / 2, 50, 100) 
     // this.drawBean(1000, 400, 100, 150)
     
        this.map.draw(this.camera.x, this.camera.y);
    }


    
    // don't alter this, just ignore it
    // we don't kow how it works, it just does
    resizeCanvasForWindowSize() {
        var currentWidth = canvas.width;
        var currentHeight = canvas.height;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var desiredWidth = windowWidth;
        var aspectRatio = this.originalWidth / this.originalHeight;
        var desiredHeight = desiredWidth / aspectRatio;
        canvas.width = desiredWidth;
        canvas.height = desiredHeight;
        scaleX = (desiredWidth / this.originalWidth);
        scaleY = (desiredHeight / this.originalHeight);
        ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
         currentWidth = canvas.width;
         currentHeight = canvas.height;
        if (currentHeight >= windowHeight) {
           desiredHeight = windowHeight;
           aspectRatio = this.originalWidth / this.originalHeight;
           desiredWidth = desiredHeight * aspectRatio;
          canvas.width = desiredWidth;
          canvas.height = desiredHeight;
          scaleX = (desiredWidth / this.originalWidth);
          scaleY = (desiredHeight / this.originalHeight);
          ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
        }
    }

}