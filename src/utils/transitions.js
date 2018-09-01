export function reflow(node) {
  // This is for to force a repaint,
  /* eslint-disable no-unused-expressions */
  node.scrollTop;
  /* eslint-enable no-unused-expressions */
}
export function rmStyle(node) {
  if ("removeAttribute" in node) {
    node.removeAttribute("style");
  } else {
    node.style = "";
  }
}
