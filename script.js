document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');

    yesBtn.addEventListener('click', function() {
        message.innerHTML = "Let's live our lives together! 😍";
        hideButtons();
    });

    noBtn.addEventListener('click', function() {
        const result = "No matter what you press, you will be mine! 😂";
        message.innerHTML = `Sorry, but ${result}`;
        hideButtons();
    });

    function hideButtons() {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        setTimeout(function() {
            message.innerHTML = "No matter what you press, you will be mine! 😂";
        }, 3000); // Message change after 3 seconds
    }
});
