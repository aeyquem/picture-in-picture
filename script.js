const videoElement = document.getElementById('video')
const startBtn = document.getElementById('start-button')

async function startCapture() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        console.error("Error: " + err);
    }
}

startBtn.addEventListener('click', async () => {
    await startCapture();
    await videoElement.requestPictureInPicture();
})