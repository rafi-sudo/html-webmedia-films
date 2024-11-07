document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const playPauseButton = document.getElementById('play-pause');
    const seekBar = document.getElementById('seek-bar');
    const muteButton = document.getElementById('mute');
    const volumeBar = document.getElementById('volume-bar');
    const fullScreenButton = document.getElementById('full-screen');
    const movieTitle = document.getElementById('movie-title');
    const movieDescription = document.getElementById('movie-description');
	const ToRemove = document.getElementById("link ToRemove");

    // Set movie title and description
    movieTitle.textContent = 'Catfish Killer 2022'; 
    movieDescription.textContent = 'Hannah is thrilled with how her senior year in high school is going. Her best friends always by her side, her mom is so very supportive, and she just got a coveted scholarship to Stanford University. However, Hannah joins an online chatroom where she meets a guy she falls for quickly, and things quickly go from very good to awful,  Negara & Tanggal Rilis: 1 Juli 2022, Klasifikasi: PG 13+ Bahasa: ENG + Closed Caption Indonesian ,  Warna: Berwarna,  Status: Selesai / Rilis';

    playPauseButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    video.addEventListener('timeupdate', function () {
        const value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });

    seekBar.addEventListener('input', function () {
        const time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    muteButton.addEventListener('click', function () {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    volumeBar.addEventListener('input', function () {
        video.volume = volumeBar.value;
    });

    fullScreenButton.addEventListener('click', function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
});
