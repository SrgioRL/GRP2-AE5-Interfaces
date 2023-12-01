document.getElementById('loginbtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'flex'; // Cambiar a flex para centrar
    document.getElementById('loginContent').innerHTML = '';
    var loginContent = document.createElement('div');
    loginContent.innerHTML = '<object type="text/html" data="login.html"></object>';
    document.getElementById('loginContent').appendChild(loginContent);

    // Agregar evento para cerrar modal cuando se hace clic en la imagen 'x'
    document.querySelector('.x').addEventListener('click', closeLoginModal);
});

document.getElementById('loginModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLoginModal();
    }
});

document.querySelector('.close').addEventListener('click', function() {
    closeLoginModal();
});

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}
