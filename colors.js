var setColor = function () {
    var selectedColor = document.getElementById('colors').value;
    if (selectedColor != 'Select Color') {
        document.bgColor = selectedColor;
    }
};