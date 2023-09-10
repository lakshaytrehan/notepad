
window.onload = function () {
    const savedText = localStorage.getItem('notepadText');
    if (savedText) {
        document.getElementById('notepad').value = savedText;
    }
};

document.getElementById('save-btn').addEventListener('click', function () {
    const textToSave = document.getElementById('notepad').value;
    localStorage.setItem('notepadText', textToSave);
    alert('Text saved successfully!');
});

document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('notepad').value = '';
    localStorage.removeItem('notepadText');
    alert('Text cleared successfully!');
});
