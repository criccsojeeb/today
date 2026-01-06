const video = document.getElementById("video");
const popup = document.getElementById("popup");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const ch = channels[id];

if (!ch) {
  alert("Channel not found");
} else {
  document.getElementById("channelName").innerText = ch.name;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(ch.url);
    hls.attachMedia(video);
  } else {
    video.src = ch.url;
  }
}

function closePopup() {
  popup.style.display = "none";
  video.muted = false;
  video.play();
}
