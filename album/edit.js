document.addEventListener('DOMContentLoaded', function () {
    const saveChangesBtn = document.getElementById('save-changes-btn');
    const editImageInput = document.getElementById('edit-image');
    const editImagePreview = document.getElementById('edit-image-preview');

    saveChangesBtn.addEventListener('click', function () {
        // Retrieve edited details
        const editedName = document.getElementById('edit-name').value;
        const editedArtist = document.getElementById('edit-artist').value;
        const editedDate = document.getElementById('edit-date').value;
        const editedGenres = document.getElementById('edit-genres').value;

        // Save edited details to localStorage or make an API call to update the data
        // For simplicity, I'll use localStorage in this example
        localStorage.setItem('editedName', editedName);
        localStorage.setItem('editedArtist', editedArtist);
        localStorage.setItem('editedDate', editedDate);
        localStorage.setItem('editedGenres', editedGenres);

        // Handle image upload and save to localStorage
        const file = editImageInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function () {
                localStorage.setItem('editedImage', reader.result);
            });

            reader.readAsDataURL(file);
        }

        // Redirect back to the album page
        window.location.href = 'album.html';
    });

    // Handle image upload and preview
    editImageInput.addEventListener('change', function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function () {
                editImagePreview.src = reader.result;
                editImagePreview.style.backgroundColor = 'transparent';
            });

            reader.readAsDataURL(file);
        }
    });
});
