function injectToggle() {
  const buttonDiv = document.getElementsByClassName(
    "d-flex flex-items-center flex-wrap"
  )[2];
  if (buttonDiv && !document.querySelector(".github-comments-toggle")) {
    const label = document.createElement("label");
    label.className = "github-comments-toggle";
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.cursor = "pointer";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "6px";
    checkbox.addEventListener("change", () => {
      hideCommentsToggle();
    });

    const span = document.createElement("span");
    span.textContent = "Hide comments";

    label.appendChild(checkbox);
    label.appendChild(span);
    buttonDiv.appendChild(label);
  }
}

injectToggle();

const observer = new MutationObserver(() => {
  injectToggle();
});
observer.observe(document.body, { childList: true, subtree: true });
