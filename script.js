document.addEventListener('DOMContentLoaded', function () {
    const modeToggleBtn = document.getElementById('mode-toggle');
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Retrieve mode from global local storage
    const savedMode = localStorage.getItem('globalMode');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    // Set initial icon dimensions based on the saved mode
    if (savedMode === 'night-mode') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    modeToggleBtn.addEventListener('click', function () {
        // Toggle mode
        const currentMode = body.classList.contains('night-mode') ? 'day-mode' : 'night-mode';
        body.classList.toggle('night-mode', currentMode === 'night-mode');

        // Save mode to global local storage
        localStorage.setItem('globalMode', currentMode);

        // Update icon dimensions and visibility
        if (currentMode === 'night-mode') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    });
});
