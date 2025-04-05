 // Moving Hand Logic
 const hand = document.getElementById('hand');
 const directionButtons = document.querySelectorAll('.direction-buttons button');
 let handDirection = 0; // Start with no rotation
 let moveInterval;

 // Directions for rotating the hand
 const directions = ['Top', 'Right', 'Bottom', 'Left'];

 function moveHand() {
     // Rotate hand randomly in a direction
     handDirection = (handDirection + 1) % 4;
     const rotation = handDirection * 90;
     hand.style.transform = `rotate(${rotation}deg)`; // Rotate 90, 180, 270, 360 degrees
 }

 moveInterval = setInterval(moveHand, 1000); // Move hand every second

 // Direction button click handling
 directionButtons.forEach((button, index) => {
     button.addEventListener('click', function() {
         const selectedDirection = directions[index];
         const actualDirection = directions[handDirection];
         if (selectedDirection === actualDirection) {
             alert('Correct! But that was too easy!');
         } else {
             alert('Nope, try again!');
         }
     });
 });

 // Frustration Button Logic
 document.getElementById('frustrationBtn').addEventListener('click', function() {
     // Hide the CAPTCHA page
     document.getElementById('captchaPage').style.display = 'none';
     // Show the Brainfuck challenge page
     document.getElementById('brainfuckPage').style.display = 'block';
 });

 // Brainfuck Code Input Logic
 function checkBrainfuckCode() {
     const userCode = document.getElementById('brainfuckInput').value.trim();
     const resultMessage = document.getElementById('resultMessage');
     
     // Always show incorrect message (for fun)
     resultMessage.textContent = "Oops! This isn't the correct Brainfuck code.";
     resultMessage.style.color = "red";
     resultMessage.classList.remove('hidden');
     document.getElementById('stillFrustratedBtn').classList.remove('hidden');
 }

 // Show the Legal Paper Text
 function showLegalPaper() {
     document.getElementById('brainfuckPage').style.display = 'none';
     document.getElementById('legalPaper').style.display = 'block';
 }

 // Complete the Process
 function completeProcess() {
     const signature = document.getElementById('signatureInput').value.trim();
     if (signature) {
         // Hide the legal paper and show the robot image
         document.getElementById('legalPaper').style.display = 'none';
         document.getElementById('robotImage').style.display = 'block';
     } else {
         alert("Please sign your name first!");
     }
 }