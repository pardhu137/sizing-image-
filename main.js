let originalSize=200;
let maxWidth=350;
let minWidth=50;
function decrement(){
    if(originalSize<=minWidth){
        document.getElementById("warning message").textContent='reduced to full';
    }
    else{
        originalSize=originalSize-5;
        let dcSize=originalSize+"px";
        document.getElementById("warning message").textContent='';
        document.getElementById("picture").style.width=dcSize;
        document.getElementById("pictureWidth").textContent=dcSize;
    }
}
    function increment(){
        if(originalSize>=maxWidth){
            document.getElementById("warning message").textContent='zoomed to full';
        }
        else{
            originalSize=originalSize+5;
            let incSize=originalSize+"px";
            document.getElementById("warning message").textContent='';
            document.getElementById("picture").style.width=incSize;
            document.getElementById("pictureWidth").textContent=incSize;
        }
}



 