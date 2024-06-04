const editor = document.getElementById("editor");

const savedValue = localStorage.getItem("editorValue");
if (savedValue) {
  editor.value = savedValue;
}

editor.addEventListener("input", function () {
  const value = editor.value;
  localStorage.setItem("editorValue", value);
});