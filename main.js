const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// initial launch
updatePreview();

editor.addEventListener('keyup', updatePreview);

function updatePreview() {
    preview.innerHTML = marked.parse(editor.value);
}