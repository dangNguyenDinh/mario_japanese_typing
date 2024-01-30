
import Mario from "./mario.js";
import Koopa from "./koopa.js";




//main
var a = new Mario();
document.getElementById("mario").style.top = a.top;
document.getElementById("mario").style.left = a.left;

//xử lý phần nhận tín hiệu để sử dụng vũ khí
// document.addEventListener("keydown",function(e){
//     if(e.key === " "){
//         a.renderMarioGun();
//         b.stop();
//     }
// });
// document.addEventListener("keydown",function(e){
//     if(e.key === "Enter"){
//         a.curmario = "./asset/mario1_move0.png";
//         b.run();
//     }
// });

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
    var stringInput = inputTextTag.value;
    if(stringInput.length > 3){
        var len = stringInput.length;
        stringInput = inputTextTag.value.substring(len-3, len);
    }
    //check từ đang xét
    if(stringInput.includes(b.queue[0])){
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
    //vòng for tần số thấp
    if(count%30==0){
        b.renderRun();
    }
    count++;

    //kiểm tra game over
    if(Koopa.returnGameOver() == true){
        clearInterval(mainInterval);
        alert("game over");
    }
    
}, 100);

function playbgmusic(){
    var a = document.createElement("audio");
    a.src = "./asset/bg.mp3";
    a.play();
}
function playshotmusic(){
    var a = document.createElement("audio");
    a.src = "./asset/gun.mp3";
    a.play();
}