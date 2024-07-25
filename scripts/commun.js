document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        let menu = document.getElementById('menu');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }
});

document.getElementById('resume').addEventListener('click', function() {
    document.getElementById('menu').classList.add('hidden');
});

document.getElementById('quit').addEventListener('click', function() {
    window.location.href = './index.html'; // Redirect to main page
    document.getElementById('menu').classList.add('hidden');
});
