export default class Mario{
    mm0 = "./asset/mario1_move0.png";
    mm1 = "./asset/mario1_move1.png";
    mm2 = "./asset/mario1_move2.png";
    mj= "./asset/mario1_jump.png";
    m = "./asset/mario.png";
    curmario = "./asset/mario.png";
    bottom = "19vh";
    left = "15vw";
    //constructor
    constructor(){}
    //method
    //delay
    
    renderRun(){
        if(this.curmario == this.m){
            this.curmario = this.mm0;
            document.getElementById("mario").querySelector("img").style.width = "15vh";
        }else if(this.curmario == this.mm0){
            this.curmario = this.mm1;
            document.getElementById("mario").querySelector("img").style.width = "15vh";
        }else if(this.curmario == this.mm1){
            this.curmario = this.mm2;
            document.getElementById("mario").querySelector("img").style.width = "15vh";
        }else if(this.curmario == this.mm2){
            this.curmario = this.mm0;
            document.getElementById("mario").querySelector("img").style.width = "15vh";
        }
        document.getElementById("mario").querySelector("img").src = this.curmario;
        //chỉnh background trôi về trái nếu không phải là đang cầm súng
        if(this.curmario != "./asset/mariogun3.png"
        && this.curmario != "./asset/mariogun2.png"
        && this.curmario != "./asset/mariogun1.png"){
            setBgFlow();
        }
    
    }
    //gun
    
    renderMarioGun(){
        var i = 2;
        this.curmario = `./asset/mariogun${i}.png`;
        document.getElementById("mario").querySelector("img").src = this.curmario;
        if(this.curmario == "./asset/mariogun1.png"){
            document.getElementById("mario").querySelector("img").style.width = "21vh";
        }else{
            document.getElementById("mario").querySelector("img").style.width = "17vh";
        }
        //tiện thể dừng background luôn
        setBgStop();
    }
    //mario die
    marioDead(){
        document.querySelector("#mario").querySelector("img").src = "./asset/tomb.png";
        document.querySelector("#mario").style.bottom = this.bottom;
        setBgStop();
    }
}
function setBgStop(){
    document.querySelector("#jump").innerHTML = `
        #bg2{
            position: absolute;
            width: 200vw;
            height: 100vh;
            top: 1vh;
            background-image: url("./asset/bg3.png");
            background-size: cover;
        }
    `;
}
function setBgFlow(){
    document.querySelector("#jump").innerHTML = `
        #bg2{
            position: absolute;
            width: 200vw;
            height: 100vh;
            top: 1vh;
            background-image: url("./asset/bg3.png");
            background-size: cover;
            animation: bg2GoLeft 2s linear infinite;
        }
    `;
}
