function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function deleteLast() {
    let current = document.getElementById('screen').value;
    document.getElementById('screen').value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = result;
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}
