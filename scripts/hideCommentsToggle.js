function hideCommentsToggle() {
  const viewedFile = document.getElementsByClassName(
    "mr-1 js-reviewed-checkbox"
  );
  for (let i = 0; i < viewedFile.length; i++) {
    if (viewedFile[i].checked) {
      viewedFile[i].click();
    }
  }
}
