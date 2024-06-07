export class Held {
    game
    heldItems = []
    selected = -1
    image = new Image()
    imageX = 0
    imageY = 0
    imageA = 0
    constructor(game){
        this.game = game
    }

    grounded(){
        this.game.dash.reset()
    }

    up(){
        this.check()
        this.selected++
        var i=0
        while(!this.heldItems[this.selected] && i < 30){
            this.selected++
            i++
            if(this.selected > 4){
                this.selected = 0
            }
        }
        if(!this.heldItems[this.selected]){
            this.cancel()
        } else {this.makeImg()}
    }

    down(){
        this.check()
        this.selected--
        var i=0
        while(!this.heldItems[this.selected] && i < 30){
            this.selected--
            i++
            if(this.selected < 0){
                this.selected = 4
            }
        }
        if(!this.heldItems[this.selected]){
            this.cancel()
        } else {this.makeImg()}
    }

    cancel(){
        this.selected = -1
    }

    makeImg(){
        if(this.selected == 0){
            this.image = this.game.keys.hookEnabled
        }else if(this.selected==1){
            this.image = this.game.keys.pickaxeEnabled
        }else if(this.selected==2){
            this.image = this.game.keys.bazookaEnabled
        }else if(this.selected==3){
            this.image = this.game.keys.shotgunEnabled
        }else if(this.selected==4){
            this.image = this.game.keys.warnLava
        }
        this.imageA = 5
        this.game.audio.cycleSound(.3)
    }

    check(){
        this.heldItems[0] = false
        this.heldItems[1] = false
        this.heldItems[2] = false
        this.heldItems[3] = false
        this.heldItems[4] = false
        if(this.game.player.hookHeld){
            this.heldItems[0] = true
        }
        if(this.game.player.hookHeldII){
            this.heldItems[1] = true
        }
        if(this.game.player.bazookaHeld){
            this.heldItems[2] = true
        }
        if(this.game.player.shotgunHeld){
            this.heldItems[3] = true
        }
        this.heldItems[4] = true
    }

    execute(){
        if(this.selected == 0){
            this.hook()
        }else if(this.selected == 1){
            this.pickaxe()
        }else if(this.selected == 2){
            this.bazooka()
        }else if(this.selected == 3){
            this.shotgun()
        }else if(this.selected == 4){
            this.dash()//
        }
    }

    unExecute(){
        this.hookUp()
        this.pickaxeUp()
    }

    dash(){
        this.game.dash.execute()
    }

    shotgun(){
        this.game.shotgun.execute()
    }

    hook(){
        this.game.hook.visibility = true
        this.game.hook.enabled = false
        this.game.hook.motion = true
        this.game.hook.mouseUpdate()
        if (this.game.hook.visibility) {
          this.game.audio.hookSound()
        } else {
          this.game.audio.breakSound()
        }
    }

    pickaxe(){
        this.game.hookII.visibility = true
        this.game.hookII.enabled = false
        this.game.hookII.motion = true
        this.game.hookII.setup()
        if (this.game.hookII.visibility) {
          this.game.audio.hookSound()
        } else {
          this.game.audio.breakSound()
        }
    }
    
    bazooka(){
        this.game.bazooka.summon()
    }

    hookUp(){
        if(this.game.hook.visibility){
            this.game.hook.visibility = false
            this.game.hook.enabled = false
            this.game.hook.motion = true
            this.game.hook.mouseUpdate()
            if (this.game.hook.visibility) {
              this.game.audio.hookSound()
            } else {
              this.game.audio.breakSound()
            }
          }
    }

    pickaxeUp(){
        if(this.game.hookII.visibility){
            this.game.hookII.visibility = false
            this.game.hookII.enabled = false
            this.game.hookII.motion = true
            if (this.game.hookII.visibility) {
              this.game.audio.hookSound()
            } else {
              this.game.audio.breakSound()
            }
          }
    }


}