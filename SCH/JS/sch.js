// Simple example of form submission handling for assignments
document.getElementById('assignmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById('assignmentTitle').value;
    const file = document.getElementById('fileUpload').files[0];

    if (title && file) {
        alert(`Assignment "${title}" uploaded successfully!`);
        // Here, you would handle file upload logic (e.g., sending to the server)
    } else {
        alert('Please fill out the assignment details and upload a file.');
    }
});

// Example of dynamically displaying a list of submissions (this could be expanded)
const submissions = [
    { title: 'Math Homework 1', student: 'John Doe' },
    { title: 'Science Project', student: 'Jane Smith' }
];

const submissionList = document.getElementById('submissionList');
submissions.forEach(submission => {
    const li = document.createElement('li');
    li.textContent = `${submission.title} submitted by ${submission.student}`;
    submissionList.appendChild(li);
});





// Fetch the JSON content and dynamically populate the HTML
document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            // Populate the "About" section
            document.getElementById('about-content').textContent = data.home.about.content;

            // Populate the "Details About the School" section
            document.getElementById('details-content').textContent = data.home.details.content;

            // Populate the "Parents Contribution" section
            document.getElementById('contribution-content').textContent = data.home.contribution.content;

            // Populate the login labels
            document.getElementById('username-label').textContent = data.login.form.username;
            document.getElementById('password-label').textContent = data.login.form.password;
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
        });
});
