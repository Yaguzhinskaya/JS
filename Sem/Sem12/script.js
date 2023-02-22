"use strict"; //выдаст ошибку при ее наличии и выдаст ее в ЛОБ))

const video = document.querySelector("video");
const play = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
const volume = document.querySelector(".volume");
const timing = document.querySelector(".timing");
const currentTime = document.querySelector(".currentTime");


play.addEventListener('click', () => {
    video.play();
});

pause.addEventListener('click', () => {
    video.pause();
});

volume.addEventListener('input', () => { // ползунок громкости (когда двгаем измн-ся громкость)
    video.volume = volume.value; // громкость видео будет = ползунок(.)в то место где он находся
    // console.log(volume.value);
});

video.addEventListener('timeupdate', () => {
    timing.value = video.currentTime / video.duration * 100;
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.round(video.currentTime % 60);
    currentTime.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    // console.log(1212);
})

timing.addEventListener('input', () => {
    video.currentTime = timing.value / 100 * video.duration;

});


