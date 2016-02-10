var setColor = function () {
    var selectedColor = document.getElementById('colors').value;
    if (selectedColor != 'Select Color') {
        window. = function () {
            if (document.cookie.length != 0) {
                var nameValueArray = document.cookie.split('=');
                document.bgColor = nameValueArray[1];
                document.getElementById('colors').value = nameValueArray[1];
            }
        };
        document.bgColor = selectedColor
        document.cookie = 'color=' + selectedColor + ';expires=Friday, 5 Aug 2016 01:00:00 UTC;';
    }
};