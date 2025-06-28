function hideCommentsToggle() {
  const viewedFiles = document.getElementsByClassName(
    "js-inline-comments-container"
  );
  for (let i = 0; i < viewedFiles.length; i++) {
    const el = viewedFiles[i];
    if (el.style.display === "none") {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  }
}
