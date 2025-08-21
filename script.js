console.log("welcome to spotify");

// Initialize
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "In Ankhon Mein Tum", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Krishna Ringtone", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Another Krishna Ring", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Radha Kaise Na Jale", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Laal Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Saaware", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Naino Ne Bandhi", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Sadi Gali", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Morni Banke", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tum Hi Ho", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Tera Ban Jaunga", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Raabta", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Dil Diyan Gallan", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Kesariya", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Perfect", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Shape of You", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
];

// Set song items images and names
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// Play / Pause button
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.replace('fa-circle-play','fa-circle-pause');
        gif.style.opacity = 1;
        document.querySelector('.songInfo').innerText = songs[songIndex].songName;
    } else {
        audioElement.pause();
        masterPlay.classList.replace('fa-circle-pause','fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

// Seek songs
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Make all plays
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.replace('fa-circle-pause','fa-circle-play');
    });
};

// Click on individual song
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id) - 1;
        e.target.classList.replace('fa-circle-play','fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.replace('fa-circle-play','fa-circle-pause');
        gif.style.opacity = 1;
        document.querySelector('.songInfo').innerText = songs[songIndex].songName;
    });
});

