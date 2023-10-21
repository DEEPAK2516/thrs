document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');
    let noButtonClicked = false;

    yesBtn.addEventListener('click', function() {
        message.innerHTML = "Let's live our lives together! 😍";
        hideButtons();
    });

    noBtn.addEventListener('mouseover', function() {
        if (!noButtonClicked) {
            moveNoButton();
        }
    });

    function moveNoButton() {
        const maxWidth = window.innerWidth - noBtn.offsetWidth;
        const maxHeight = window.innerHeight - noBtn.offsetHeight;
        const newX = Math.floor(Math.random() * maxWidth);
        const newY = Math.floor(Math.random() * maxHeight);

        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';

        setTimeout(moveNoButton, 1000); // Move the button every second
    }

    function hideButtons() {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        setTimeout(function() {
            message.innerHTML = "No matter what you press, you will be mine! 😂";
        }, 3000); // Message change after 3 seconds
    }
});
