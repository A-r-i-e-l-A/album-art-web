
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('hide-info');
    const albumGrid = document.querySelector('.album-grid');
    const albumCells = document.querySelectorAll('.album-cell');
    const albumImages = document.querySelectorAll('.album-image');
    const content = document.querySelector('.content');
    const dropdown = document.querySelector('select');
    const pageChanger = document.querySelector('.page-changer');

    // Set the number of items per page
    let itemsPerPage = 8;
    let currentPage = 1;

    // Function to update the display based on the current page
    function updateDisplay() {
        const startIndex = (currentPage - 1) * itemsPerPage;

        // Hide all album cells
        albumCells.forEach((cell, index) => {
            cell.style.display = index >= startIndex && index < startIndex + itemsPerPage ? 'flex' : 'none';
        });
    }

    // Add an event listener to the checkbox
    checkbox.addEventListener('change', function () {
        albumGrid.classList.toggle('hide-details', checkbox.checked);
        albumCells.forEach(cell => {
            cell.classList.toggle('hide-details', checkbox.checked);
        });

        if (checkbox.checked) {
            albumGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
            albumImages.forEach(image => {
                image.style.width = '400px';
                image.style.height = '400px';
            });
            albumGrid.style.gap = '20px 0';
            content.style.maxWidth = '1660px';
        } else {
            albumGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            albumImages.forEach(image => {
                image.style.width = '300px';
                image.style.height = '300px';
            });
            albumGrid.style.gap = '20px 50px';
            content.style.maxWidth = '1400px';
        }

        // Reset to the first page when changing the display
        currentPage = 1;
        updateDisplay();
        updatePageChanger();
    });

    // Add an event listener to the dropdown
    dropdown.addEventListener('change', function () {
        itemsPerPage = parseInt(dropdown.value) || 8; // Update itemsPerPage based on the dropdown value
        currentPage = 1; // Reset to the first page when changing the number of items per page
        updateDisplay();
        updatePageChanger();
    });

    // Add an event listener to the page changer
    pageChanger.addEventListener('click', function (event) {
        if (event.target.tagName === 'SPAN') {
            const clickedPage = parseInt(event.target.textContent);
            if (!isNaN(clickedPage)) {
                currentPage = clickedPage;
                updateDisplay();
                updatePageChanger();
            } else if (event.target.textContent === '<' && currentPage > 1) {
                currentPage--;
                updateDisplay();
                updatePageChanger();
            } else if (event.target.textContent === '>' && currentPage < Math.ceil(albumCells.length / itemsPerPage)) {
                currentPage++;
                updateDisplay();
                updatePageChanger();
            }
        }
    });

    // Function to update the page changer buttons based on the current page
    function updatePageChanger() {
        const totalItems = albumCells.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        // Update the current page display
        document.querySelector('.current-page').textContent = currentPage;

        // Enable or disable previous/next buttons
        pageChanger.children[0].style.pointerEvents = currentPage > 1 ? 'auto' : 'none';
        pageChanger.children[pageChanger.children.length - 1].style.pointerEvents =
            currentPage < totalPages ? 'auto' : 'none';
    }

    // Initial setup
    updateDisplay();
    updatePageChanger();
});
