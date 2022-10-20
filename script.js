const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play-btn');
const artist = document.getElementById('artist-name');
const title = document.getElementById('song-name');
const previous = document.getElementById('previous-btn');
const forward = document.getElementById('forward-btn');

// creating array of objects 
const songs = [
    {
    name : "song-1" , 
    title : "We Rollin" ,
    artist: "Shubh"
    },
    {
    name : "song-2" , 
    title : "How Many" ,
    artist: "Armaan Malik"
    },
    {
    name : "song-3" , 
    title : "Ma Belle" ,
    artist: "AP Dhillon"
    },  
    {
    name : "song-4" , 
    title : "Dusk Till Dawn" ,
    artist: "Zayn Malik"
    },
    {
    name : "song-5" , 
    title : "Heat Waves" ,
    artist: "Glass Animals"
    },
    {
    name : "song-6" , 
    title : "Hiding In The Blue" ,
    artist: "TheFatRat,RIELL"
    },
    {
    name : "song-7" , 
    title : "High" ,
    artist: "JPB,Aleesia"
    },

];


let isPlaying = false;

// to play the song 
const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("effect");
};

// to pause the song 
const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("effect");
};

play.addEventListener('click', ()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});

// change the music 

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "songs/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};

songIndex = 0;
loadSong(songs[songIndex]);

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

forward.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);
