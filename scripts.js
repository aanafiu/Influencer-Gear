document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menuButton').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });
});
