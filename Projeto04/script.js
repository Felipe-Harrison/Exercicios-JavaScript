let songs = [
    {image: "image.jpg", song:"NEON BLADE", color: "#f00"},
    {image: "image.png", song:"City Light", color: "#427dd1"},
    {image: "image.jpg", song:"Heads Will Roll", color: "#3edfec"},
]

let idSongNow = 0;

window.onload = function () {
    setSong(getSong());
    var song = document.querySelector("audio");
    var btnMain = document.querySelector("#btn-play");

    btnMain.addEventListener("click", () => {
        song.paused ?
            playSong(song) :
            stopSong(song);
        toggleButton(song.paused);
    })

}

function playSong(song) {  
    let data = document.querySelectorAll("[data-playState]");
    for(let element of data) {
        element.classList.add("play");
    };
    song.play();
}

function stopSong(song) {
    let data = document.querySelectorAll("[data-playState]");
    for(let element of data) {
        element.classList.remove("play");
    };
    song.pause();
}

function toggleButton(songState){

    let icon = document.querySelector("#btnMain");
    songState ?
        icon.className = "fa fa-play-circle" :
        icon.className = "fa fa-pause-circle"
}

function getSong(){
    let pathSong = `./songs/${songs[idSongNow].song}/${songs[idSongNow].song}.mp3`;
    let pathImg = `./songs/${songs[idSongNow].song}/${songs[idSongNow].image}`;
    let songName = songs[idSongNow].song;

    return {pathImg,pathSong,songName};
}

function nextSong(){
    if(idSongNow == songs.length-1) return;

    idSongNow++
    let song = getSong();

    setSong(song);
}

function prevSong(){
    if(idSongNow == 0) return;

    idSongNow--
    let song = getSong();
    setSong(song);
}

function setSong(song){
    let audioField = document.querySelector("audio");
    let imageField = document.querySelector("img");
    let titleField = document.querySelector(".songtitle");

    document.querySelector("title").innerHTML = `Music Player - ${song.songName}.mp3`
    
    titleField.innerHTML = song.songName;
    audioField.src = song.pathSong;
    imageField.src = song.pathImg;

    document.querySelector("body").style.backgroundImage = `url('${song.pathImg}')`;

    let data = document.querySelectorAll("[data-playState]");
    for(let element of data) {
        element.classList.remove("play");
    };
    changeCssVar("--primaryColor",songs[idSongNow].color);
    toggleButton(true);
}

const changeCssVar = (variable, value) => {
    let cssVar = document.querySelector(":root");

    cssVar.style.setProperty(variable,value);
}


