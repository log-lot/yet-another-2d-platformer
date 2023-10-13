const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { DrawUtils } from "../utils/DrawUtils.js"

export class Menu {

    draw = new DrawUtils()
    opacity = 1
    check = false

    constructor() {}

    drawMenu() {
        this.draw.Text("Yet Another 2d Platformer", 300, 200, `rgba(255, 255, 255, ${this.opacity})`, `rgba(100, 100, 100, ${this.opacity})`)

        this.draw.Text("Press W To Start", 300, 400, `rgba(255, 255, 255, ${this.opacity})`, `rgba(100, 100, 100, ${this.opacity})`)
    }

    fade() {
        check = true
        for(let i = 0; i < 20; i++) {
            this.sleep(1000 / 60)
            this.opacity -= 1/20
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}