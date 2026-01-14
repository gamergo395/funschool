function checkAccess() {
    const code = document.getElementById('accessCode').value;
    if (code.toUpperCase() === 'F0REVERB0RED') {
        window.location.href = 'games.html';
    } else if (code.toUpperCase() === 'TRUR0') {
        window.location.href = 'mainpagest.html';   
	} else if (code.toUpperCase() === 'AIGAME') {
		window.location.href = 'aigames.html';
	} else if (code.toUpperCase() === 'CHEESE') {
		window.location.href = 'cheese.html';
	} else if (code.toUpperCase() === 'HELLO') {
    // Find the div where you want to show the message
    const messageDiv = document.getElementById('messageDiv');

    if (messageDiv) {
        // Set the text content
        messageDiv.textContent = 'YOU FOUND THE SECRET';
        // Optionally style it
        messageDiv.style.display = 'block';
	}
    } else {
        alert('access denied: invalid code');
    }
    return false; // Prevent form submission

    }
