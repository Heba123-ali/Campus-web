const bar = document.getElementById("bar");
const mobileNav = document.getElementById("mobile-nav");

bar.addEventListener("click", () => {    
    mobileNav.classList.toggle("active");
})

//   // Trigger the hidden file input
//   addEventListener('click' ,function triggerUpload() {
//     const upload = document.getElementById('upload');
//     upload.click();
//   })
//   // Handle the file upload
// addEventListener('click', function handleFileUpload(event) {
//     const file = event.target.files[0]; // Get the selected file
//     const messageDiv = document.getElementById('message');
//     if (file) {
//         // Show a success message
//         messageDiv.textContent = `File "${file.name}" uploaded successfully!`;
//         console.log('Uploaded file details:', file);
//     } else {
//         // Reset the message if no file is selected
//         messageDiv.textContent = '';
//         alert('No file selected!');
//     }
// });

const progressCircle = document.getElementById('progress-circle');
const progressRange = document.getElementById('progress-range');

function updateProgress() {
    const value = progressRange.value;
    const degree = (value / 100) * 360;  // تحويل النسبة إلى درجات دائرة
    progressCircle.style.backgroundImage = `conic-gradient(#00008d ${degree}deg, #ddd ${degree}deg)`;
}
progressRange.addEventListener('input', updateProgress);


