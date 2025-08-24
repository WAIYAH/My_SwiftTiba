// Toggle Comment Section on "Read More" Click
document.querySelectorAll('.blog-card .btn-outline-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const commentSection = button.closest('.blog-card').querySelector('.comment-section');
        commentSection.style.display = commentSection.style.display === 'block' ? 'none' : 'block';
    });
});

// Handle Comment Form Submission
document.querySelectorAll('.comment-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const textarea = form.querySelector('textarea');
        const commentText = textarea.value.trim();
        if (commentText === '') return;

        const commentsList = form.previousElementSibling;
        const newComment = document.createElement('p');
        newComment.innerHTML = `<strong>You:</strong> ${commentText}`;
        commentsList.appendChild(newComment);

        textarea.value = ''; // Clear the textarea
    });
});