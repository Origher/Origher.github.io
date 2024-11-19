document.addEventListener('DOMContentLoaded', function () {
    const musicButton = document.getElementById('musicButton');
    const music = document.getElementById('myMusic'); // 获取音乐元素
    let isPlaying = false; // 用于跟踪音乐是否正在播放
    musicButton.addEventListener('click', function () {
        if (isPlaying) {
            music.pause(); // 如果音乐正在播放，则暂停
            isPlaying = false;
        } else {
            music.play(); // 如果音乐未播放，则播放
            isPlaying = true;
        }
    });
});