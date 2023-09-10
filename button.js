// Retrieve saved text from localStorage on page load
window.onload = function () {
    const savedText = localStorage.getItem('notepadText');
    if (savedText) {
        document.getElementById('notepad').value = savedText;
    }
};

// Save text to localStorage when the Save button is clicked
document.getElementById('save-btn').addEventListener('click', function () {
    const textToSave = document.getElementById('notepad').value;
    localStorage.setItem('notepadText', textToSave);
    alert('Text saved successfully!');
});

// Clear text from notepad and localStorage when the Clear button is clicked
document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('notepad').value = '';
    localStorage.removeItem('notepadText');
    alert('Text cleared successfully!');
});
