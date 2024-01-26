document.addEventListener('DOMContentLoaded', function () {
    const modeToggleBtn = document.getElementById('mode-toggle');
    const body = document.body;

    // Retrieve mode from local storage
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    modeToggleBtn.addEventListener('click', function () {
        // Toggle mode
        body.classList.toggle('night-mode');

        // Save mode to local storage
        const currentMode = body.classList.contains('night-mode') ? 'night-mode' : 'day-mode';
        localStorage.setItem('mode', currentMode);
    });
});
