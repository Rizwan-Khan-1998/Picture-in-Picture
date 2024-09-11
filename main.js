const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

button.addEventListener('click', () => {
    button.disabled = true;
    videoElement.requestPictureInPicture();
    button.disabled = false;
});

selectMediaStream();


