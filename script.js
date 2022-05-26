let button=document.getElementById("finish");
button.addEventListener("click",checkTest);
function checkTest(){
    let result=0;

    let a1 =parseInt(document.getElementById("q1").value);
    if(a1==4){
        result++;
    }

    let a2 =parseInt(document.getElementById("q2").value);
    if(a2==6){
        result++;
    }

    let a3 =parseInt(document.getElementById("q3").value);
    if(a3==3){
        result++;
    }

    let a4 =parseInt(document.getElementById("q4").value);
    if(a4==5){
        result++;
    }

    let a5 =parseInt(document.getElementById("q5").value);
    if(a5==4){
        result++;
    }

    let a6 =parseInt(document.getElementById("q6").value);
    if(a6==32){
        result++;
    }

    let a7 =parseInt(document.getElementById("q7").value);
    if(a7==28){
        result++;
    }

    let a8 =parseInt(document.getElementById("q8").value);
    if(a8==33){
        result++;
    }

    let a9 =parseInt(document.getElementById("q9").value);
    if(a9==25){
        result++;
    }
    
    let a10 =parseInt(document.getElementById("q10").value);
    if(a10==7){
        result++;
    }

    alert(`Количество правильных ответов: ${result}`);
}