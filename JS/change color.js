function showColorSlider() {
    var colorSlider = document.getElementById('colorSlider');
    colorSlider.style.display = 'block';
}

function changeColor(color) {
    var root = document.documentElement;
    root.style.setProperty('--blue', color);

    var colorSlider = document.getElementById('colorSlider');
    colorSlider.style.display = 'none';
}
