const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('keyup', updatePreview);

function updatePreview() {
    preview.innerHTML = editor.value;
}