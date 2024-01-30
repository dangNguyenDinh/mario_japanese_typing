export default class{
    kp1 = "./asset/koopa.png";
    curKoopaLeft = window.innerWidth;
    kpResult = "";
    queue = [];
    //constructor
    constructor(){};
    //method
    renderRun(){
        //lấy dữ liệu từ json
        const data = getWords();
        data.then((dt)=>{
            const arr = Object.entries(dt);
            var indexWord = Math.floor(Math.random()*5);

            //thêm thẻ div bao quanh
            var newKpEle = document.createElement("div");
            newKpEle.className = "kpEle";
            
            //thêm thẻ text
            var newKpText = document.createElement("div");
            newKpText.className = "kpText";
            newKpText.innerHTML = arr[indexWord][0];
            this.queue.push(arr[indexWord][1]);

            //thêm ảnh koopa
            var newKp = document.createElement("img");
            newKp.src = this.kp1;
            newKp.alt = "#";
            newKp.className = "kp";
             
            //lắp ghép
            newKpEle.appendChild(newKpText);
            newKpEle.appendChild(newKp);
            document.getElementById("mainGame").appendChild(newKpEle);
        });
    }

    //hàm gameover nếu chạm vào mario
    static returnGameOver() {
        var koopaArr = document.querySelectorAll(".kpEle");
        var mario = document.querySelector("#mario");
        for(let i=0;i<koopaArr.length;i++){
        console.log( )

            if((koopaArr[i].offsetLeft <= (mario.offsetLeft + mario.clientWidth)) && koopaArr[i].querySelector("img").src.includes("/asset/koopa.png")){
                
                return true;
            }
            console.log((mario.clientWidth));
        }
        return false;
    }

    // stop(){
    //     var arr = document.querySelector(".kqEle");
    //     for(let i=0;i<arr.length;i++){
            
    //     }
    //     this.curKoopaLeft = document.getElementById("kp").offsetLeft;
    //     console.log(this.curKoopaLeft)
    //     this.setKoopaStop();
    //     document.getElementById("kp").style.left = `${this.curKoopaLeft}px`;
    // }

    // run(){
    //     document.getElementById("kp").style.left = `${this.curKoopaLeft}px`;
    //     this.setKoopaRun();
    // }
    // setKoopaRun(){
    //     document.getElementById("koopa").innerHTML = `
    //         @keyframes koopaMoveLeft{
    //             0%{
    //                 left: ${this.curKoopaLeft}px;
    //             }
    //             100%{
    //                 left: -10vw;
    //             }
    //         }
    //     `
    // }
    // setKoopaStop(){
    //     document.getElementById("koopa").innerHTML = ``
    // }
}

async function getWords() {
    const response = await fetch("./data.json");
    return await response.json(); // trả về 1 promise nên phải dùng .then để truy cập
}


