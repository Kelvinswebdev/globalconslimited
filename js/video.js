const openVideoBtn = document.getElementById("openVideoBtn");
const closeVideoBtn = document.getElementById("closeVideoBtn");
const videoModal = document.getElementById("videoModal");
const projectVideo = document.getElementById("projectVideo");

if (openVideoBtn) {
  openVideoBtn.addEventListener("click", () => {
    videoModal.classList.add("active");
    projectVideo.play();
  });
}

if (closeVideoBtn) {
  closeVideoBtn.addEventListener("click", () => {
    videoModal.classList.remove("active");
    projectVideo.pause();
    projectVideo.currentTime = 0;
  });
}

if (videoModal) {
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.classList.remove("active");
      projectVideo.pause();
      projectVideo.currentTime = 0;
    }
  });
}