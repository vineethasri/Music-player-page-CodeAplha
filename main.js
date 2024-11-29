let progress = document.getElementById("progress"); 
let song = document.getElementById("song");
let  ctrlIcon = document.getElementById(" ctrlIcon");
// let play = document.getElementsByClassName(".playPause");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


onClick.ctrlIcon = () =>{
    if(ctrlIcon.classList.contains("fa-pause")){
        song.onpause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
         song.play();
         ctrlIcon.classList.add("fa-pause");
         ctrlIcon.classList.remove("fa-play")
    }
}