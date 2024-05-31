let progress = document.getElementById("progress")
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon")
let forwradbtn = document.getElementById("nextsong");
let backwardbtn = document.getElementById("pre-song");
let songimg = document.getElementById("logo");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
forwradbtn.addEventListener("click",()=>{
    song.src = "./Saware(PaglaSongs).mp3"
    songimg.src = "./sawre.jpg"
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
})
backwardbtn.addEventListener("click",()=>{
    song.src = "./_Soulmate(PagalWorld.com.sb).mp3"
    songimg.src = "./soulmate.jpg"
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
})