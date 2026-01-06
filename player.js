const video = document.getElementById("video");
const popup = document.getElementById("tgPopup");

const params = new URLSearchParams(window.location.search);
const channelId = params.get("id");

const channel = channels[channelId];

if (!channel) {
  alert("Invalid Channel");
} else {
  document.getElementById("channelName").innerText = channel.name;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(channel.url);
    hls.attachMedia(video);
  } else {
    video.src = channel.url;
  }
}

function closePopup() {
  popup.style.display = "none";
  video.muted = false;
  video.play();
}
