console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songs = [
    {songname: "red-flag",filePath:"1.mp3",coversPath:"covers/2.jpg"},
    {songname: "red-flag",filePath:"songs/2.mp3",coversPath:"covers/3.jpg"},
    {songname: "red-flag",filePath:"songs/3.mp3",coversPath:"covers/4.jpg"},
    {songname: "red-flag",filePath:"songs/4.mp3",coversPath:"covers/5.jpg"},
    {songname: "red-flag",filePath:"songs/5.mp3",coversPath:"covers/6.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classlist.remove('fa-play-circle');
        masterPlay.classlist.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classlist.remove('fa-pause-circle');
        masterPlay.classlist.add('fa-play-circle');   
        gif.style.opacity = 5;
    }
})

// audioElement.play();
myprogressbar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
})