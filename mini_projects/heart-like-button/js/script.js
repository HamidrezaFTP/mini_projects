document.getElementById('heart').addEventListener('click', function() {
    var path = this.querySelector('path');
    path.classList.toggle('filled');
});