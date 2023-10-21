document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');

    yesBtn.addEventListener('click', function() {
        message.innerHTML = "Let's live our lives together! 😍";
        hideButtons();
    });

    setTimeout(function() {
        noBtn.style.animation = 'none'; // Stop the animation
        noBtn.innerHTML = "No (Unavailable) 😂";
        message.innerHTML = "Don't try hard, you will be mine! 😂";
    }, 45000); // Show message after 45 seconds

    function hideButtons() {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    }
});
