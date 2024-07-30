const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

        //this.hookState(11302 + this.camera.x, -2227 + this.camera.y)
        //this.pickaxeState(4424 + this.camera.x,9345 + this.camera.y)
        //this.hookTip(5743,9072, "right")
        //this.jump(7533,-389)



export class Keys {
    camera;
    door = new Image();
    keyD = new Image();
    keyW = new Image();
    keyQ = new Image();
    keyE = new Image();
    keySpace = new Image();
    keyShift = new Image();
    keyS = new Image();
    keyL = new Image();
    warnLava = new Image();
    warnGrey = new Image();
    redFlag = new Image();
    hookDisabled = new Image();
    hookEnabled = new Image();
    pickaxeDisabled = new Image();
    pickaxeEnabled = new Image();
    bazookaDisabled = new Image();
    bazookaEnabled = new Image();
    shotgunEnabled = new Image();
    shotgunDisabled = new Image();
    dashEnabled = new Image();
    dashDisabled = new Image();
    leftClick = new Image()
    rightClick = new Image()

    constructor(cam, root){
        this.camera = cam
        this.door.src = 'assets/images/door.png';
        this.keyD.src = 'assets/images/keys/D_Key_Dark.png';
        this.keyW.src = 'assets/images/keys/W_Key_Dark.png';
        this.keyQ.src = 'assets/images/keys/Q_Key_Dark.png';
        this.keyE.src = 'assets/images/keys/E_Key_Dark.png';
        this.keyS.src = 'assets/images/keys/S_Key_Dark.png';
        this.keyL.src = 'assets/images/keys/L_Key_Dark.png'; //
        this.leftClick.src = 'assets/images/keys/Mouse_Left_Key_Dark.png';
        this.rightClick.src = 'assets/images/keys/Mouse_Right_Key_Dark.png';
        this.keySpace.src = 'assets/images/keys/Space_Key_Dark.png';
        this.warnLava.src = 'assets/images/warn.png';
        this.warnGrey.src = 'assets/images/warnGrey.png';
        this.redFlag.src = 'assets/images/redFlag.png';
        this.hookDisabled.src = 'assets/images/hookDisabled.png';
        this.hookEnabled.src = 'assets/images/hookEnabled.png';
        this.bazookaDisabled.src = 'assets/images/bazookaDisabled.png';
        this.bazookaEnabled.src = 'assets/images/bazookaEnabled.png';
        this.shotgunEnabled.src = 'assets/images/shotgunEnabled.png';
        this.pickaxeDisabled.src = 'assets/images/pickaxeDisabled.png';
        this.pickaxeEnabled.src = 'assets/images/pickaxeEnabled.png';
        this.dashDisabled.src = 'assets/images/dashDisabled.png';
        this.dashEnabled.src = 'assets/images/dashEnabled.png';
        this.game = root

    }
    drawKeys() {

        if(this.game.debug.shortsMap) {} else {
            this.drawMisc()
            this.hookTip(5347,-621, "left")
            this.jump(2273, 642)
            this.jump(5377,645)
            this.jump(8089,-522)
            this.jump(8824,-14,83,78 )

            this.hookTip(14308,-2763, "left")
            this.hookTip(-6033,-16668,"right")
 
            this.hookState(12162 + this.camera.x,-2256 + this.camera.y)
            this.hookState(-4292+ this.camera.x + 40,-18644 + this.camera.y + 40 )
 

            this.pickaxeState(-8417 + this.camera.x,-16145 + this.camera.y)
            
 
            
        }
    }

    
 
    
    jump(x, y) {
        ctx.drawImage(this.keyW, x + this.camera.x, y + this.camera.y)
        ctx.drawImage(this.keySpace, x + this.camera.x, (y + 50) + this.camera.y)
    }

    hookTip(x, y, type){
        if(type == "left") {
            ctx.drawImage(this.leftClick, x + this.camera.x, y + this.camera.y)
            this.hookState(x+100 + this.camera.x, y + this.camera.y)
        }
        
        if(type == "right") {
            ctx.drawImage(this.leftClick, x + this.camera.x, y + this.camera.y)
            this.pickaxeState(x + this.camera.x+100, y + this.camera.y)
        }
    }
    hookState(x, y) {
        if(this.game.player.hookHeld) {
            ctx.drawImage(this.hookEnabled, x, y, 100, 100)
        } else {
            ctx.drawImage(this.hookDisabled, x, y, 100, 100)
        }
    }

    pickaxeState(x, y) {
        if(this.game.player.hookHeldII) {
            ctx.drawImage(this.pickaxeEnabled, x, y, 100, 100)
        } else {
            ctx.drawImage(this.pickaxeDisabled, x, y, 100, 100)
        }
    }

    drawMisc(){//3301 -11555
        this.drawImage(this.keyD, 388, 600)
        this.drawImage(this.warnLava, 5976, -1211)
        this.drawImage(this.warnLava, 5976, -811)
        this.drawImage(this.warnLava, 5976, -1611)

            this.drawImage(this.hookDisabled, 4161,-11545, 100, 100)

            this.drawImage(this.keyQ,-4313,-18498)
            this.drawImage(this.keyE,-4213,-18498)
 
            this.drawImage(this.door,7030,-20273, 200, 200)
            this.drawImage(this.door,11888+50,-21774, 200, 200) // 11357,-26575
            this.drawImage(this.door,20865-50,-32125, 200, 200)

            this.drawImage(this.door,14175 - 40,-14777,200,200)
            this.drawImage(this.door,11357 + 40,-26575 + 70,200,200)
            // this.hitboxes[this.hitboxes.length] = new Hitbox(,8,130 )
 
 
 
 
 
        this.drawImage(this.keyW, 17395,-4977)
        this.drawImage(this.keyS, 17395,-4877)
    }

    drawImage(img, x, y, width, height) {
        if(!width){
            ctx.drawImage(img, x +this.camera.x, y + this.camera.y)
        } else (
            ctx.drawImage(img, x +this.camera.x, y + this.camera.y, width, height)
        )
    }
    
}


