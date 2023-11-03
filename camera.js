
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Access the user's camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // The stream object can be used to display video or capture images
            var videoElement = document.getElementById('video');
            videoElement.srcObject = stream;
        })
        .catch(function(err) {
            console.error('Error accessing the camera:', err);
        });
} else {
    console.error('MediaDevices API is not supported in this browser');
}
