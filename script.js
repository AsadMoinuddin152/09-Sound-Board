/** @format */

const sounds = ['Erwin', 'Gon', 'Madara'];

const btns = document.querySelectorAll('.btns');

sounds.forEach((sound, index) => {
    btns[index].addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
