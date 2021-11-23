var audio = document.getElementById("audio");
var all_span = document.getElementsByTagName("span");
 
for(i=0;i<all_span.length;i++){
    all_span[i].onclick=function(){
        audio.src=this.id;
        audio.play();
    }
}