
import Mario from "./mario.js";
import Koopa from "./koopa.js";




//main
var a = new Mario();
document.getElementById("mario").style.bottom = a.bottom;
document.getElementById("mario").style.left = a.left;
//ready step
document.querySelector("#mario").style.display = "none";
document.querySelector("#input").style.display = "none";
document.querySelector("#restart").style.display = "none";
document.querySelector("#menu").style.display = "none";

document.querySelector("#ready").addEventListener("click", ()=>{
    document.querySelector("#ready").style.display = "none";
    document.querySelector("#mario").style.display = "block";
    document.querySelector("#input").style.display = "block";
    playbgmusic();
    //tính điểm 
    let score = 0;
    let time = 91;
    //xử lý tín hiệu nhận input
    let inputTextTag = document.querySelector("#input").querySelector("input");
    inputTextTag.focus();
    //xử lý koopa
    var b = new Koopa();
    //loop

    let count = 0;
    let countDisplayGun = 0;
    var isExplode = false;
    let isDisplayGun = false;

    let mainInterval = setInterval(()=>{
        //vòng for tần số cao
        //mario chạy
        a.renderRun();
        //xử lý string input
        inputTextTag.focus();
        var stringInput = inputTextTag.value;
        if(stringInput.length > 3){
            var len = stringInput.length;
            stringInput = inputTextTag.value.substring(len-3, len);
        }
        //check từ đang xét
        if(stringInput.includes(b.queue[0])){
            //nếu trúng 1 con koopa
            document.getElementById("curscore").textContent = `SCORE: ${++score}`;
            isDisplayGun = true;
            isExplode = true;
            b.queue.shift();
            inputTextTag.value = ""; 

        }
        if(countDisplayGun <= 5 && isDisplayGun == true){
            a.renderMarioGun();
            countDisplayGun++;
            playshotmusic();
            if(isExplode ==true){
                document.querySelectorAll(".kpEle")[0].querySelector("img").src = "./asset/explode.gif";
                isExplode = false;
                document.querySelectorAll(".kpEle")[0].querySelector("div").textContent = "";
            }
        }else if(a.curmario == "./asset/mariogun2.png"){
            a.curmario = "./asset/mario1_move0.png";
            countDisplayGun = 0;
            isDisplayGun = false;
            document.querySelectorAll(".kpEle")[0].remove();
        }
        //vòng for tần số thấp để xuất koopa
        if(count%30==0){
            b.renderRun();
        }
        

        //kiểm tra game over
        if(Koopa.returnGameOver() == true){
            a.marioDead();
            document.getElementById("input").remove();
            document.getElementById("score").remove();       
            document.querySelector("#bg").style.animation = "setGameOver 2s linear";
            playdeadmusic();
            document.querySelector("#bg").style.backgroundImage = "url(\"./asset/dead.png\")";  
            setTimeout(()=>{
                document.querySelector("#restart").style.display = "block";
                document.querySelector("#menu").style.display = "block";

            }, 3000);
            clearInterval(mainInterval);
        }
        
        //for tần số thấp để countdown thời gian
        if(count%10 == 0){
            time--;
            document.getElementById("time").textContent = `TIME LEFT: ${time}s`
        }
        count++;
        console.log(count);
    }, 100);

})

function playdeadmusic(){
    document.querySelector("audio").remove();
    var a = document.createElement("audio");
    a.src = "./asset/thua-cuoc.mp3";
    a.play();
}
function playbgmusic(){
    var a = document.querySelector("audio");
    a.play();
}
function playshotmusic(){
    var a = document.createElement("audio");
    a.src = "./asset/gun.mp3";
    a.play();
}

