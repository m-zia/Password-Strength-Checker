let password = document.getElementById("password");

password.addEventListener('keyup', function() {
    let pwd = password.value;

    // Reset if password length is zero
    if (pwd.length === 0) {
    document.getElementById("progresslabel").innerHTML = "";
    document.getElementById("progress-bar").style.width = "0%";
    return;
    }

    let progress = pwd.length * 5;
    progress = Math.min(progress, 100); // limit progress to 100 so it doesn't overflow

    let progressBar = document.getElementById("progress-bar");

    // Calculate progress bar color based on password length
    if (pwd.length < 8) {
    progressBar.style.background = "red";
    } else if (pwd.length >= 8 && pwd.length < 12) {
    progressBar.style.background = "orange"; 
    } else {
    progressBar.style.background = "green"; 
    }

    // Update progress bar value
    progressBar.style.width = progress + "%";

    // Update feedback message
    let feedback = progress;
    if (pwd.length < 8) {
    feedback += " Should be longer";
    } else if (pwd.length >= 8 && pwd.length < 12) {
    feedback += " Pretty good";
    } else {
    feedback += " Grrrreat!";
    }
    document.getElementById("progresslabel").innerHTML = feedback;

});