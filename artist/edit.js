document.addEventListener('DOMContentLoaded', function () {
    const saveChangesBtn = document.getElementById('save-changes-btn');
    const editImageInput = document.getElementById('edit-image');
    const editImagePreview = document.getElementById('edit-image-preview');
    const editedArtistNameInput = document.getElementById('edit-artist-name');
    const editedPseudonymsInput = document.getElementById('edit-pseudonyms');
    const editedBirthDateInput = document.getElementById('edit-birth-date');
    const editedArtistDescriptionInput = document.getElementById('edit-artist-description');

    // Populate inputs with existing information from localStorage
    editedArtistNameInput.value = localStorage.getItem('editedArtistName') || '';
    editedPseudonymsInput.value = localStorage.getItem('editedPseudonyms') || '';
    editedBirthDateInput.value = localStorage.getItem('editedBirthDate') || '';

    // Set placeholder for description if not available
    editedArtistDescriptionInput.placeholder = localStorage.getItem('editedArtistDescription') ? '' : 'Artist Description';

    // Set image preview if image is available in localStorage
    const editedArtistImage = localStorage.getItem('editedArtistImage');
    if (editedArtistImage) {
        editImagePreview.src = editedArtistImage;
        editImagePreview.style.backgroundColor = 'transparent';
    }

    saveChangesBtn.addEventListener('click', function () {
        // Retrieve edited details
        const editedArtistName = editedArtistNameInput.value;
        const editedPseudonyms = editedPseudonymsInput.value;
        const editedBirthDate = editedBirthDateInput.value;
        const editedArtistDescription = editedArtistDescriptionInput.value;

        // Save edited details to localStorage or make an API call to update the data
        // For simplicity, I'll use localStorage in this example
        localStorage.setItem('editedArtistName', editedArtistName);
        localStorage.setItem('editedPseudonyms', editedPseudonyms);
        localStorage.setItem('editedBirthDate', editedBirthDate);
        localStorage.setItem('editedArtistDescription', editedArtistDescription);

        // Handle image upload and save to localStorage
        const file = editImageInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function () {
                editImagePreview.src = reader.result;
                editImagePreview.style.backgroundColor = 'transparent';
                localStorage.setItem('editedArtistImage', reader.result);
            });

            reader.readAsDataURL(file);
        }

        // Redirect back to the artist page
        window.location.href = 'artist.html';
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
