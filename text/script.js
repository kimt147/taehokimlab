document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var video = document.getElementById('backgroundVideo');
    var lastTime = 0; // Keep track of the last time to detect looping
    
    playButton.addEventListener('click', function() {
        video.muted = false;
        video.play();
        playButton.style.display = 'none';
    });

    var bubblesShown = resetBubblesShown();

    video.addEventListener('timeupdate', function() {
        var currentTime = video.currentTime;

        // Detect if the video has looped
        if (currentTime < lastTime) {
            bubblesShown = resetBubblesShown(); // Reset the bubblesShown status for all bubbles
            resetBubblesDisplay(); // Reset display and opacity for all bubbles
        }
        lastTime = currentTime; // Update lastTime to the current time

        // Your existing showBubbleAtTime function calls
        showBubbleAtTime(currentTime, 0, 'bubble1', bubblesShown);
        showBubbleAtTime(currentTime, 1, 'bubble2', bubblesShown);
        showBubbleAtTime(currentTime, 4, 'bubble3', bubblesShown);
        showBubbleAtTime(currentTime, 6, 'bubble4', bubblesShown);
        showBubbleAtTime(currentTime, 7, 'bubble5', bubblesShown);
        showBubbleAtTime(currentTime, 8, 'bubble6', bubblesShown);
        showBubbleAtTime(currentTime, 19, 'bubble7', bubblesShown);
        showBubbleAtTime(currentTime, 20, 'bubble8', bubblesShown);
        showBubbleAtTime(currentTime, 22, 'bubble9', bubblesShown);
        showBubbleAtTime(currentTime, 25, 'bubble10', bubblesShown);
        showBubbleAtTime(currentTime, 29, 'bubble11', bubblesShown);
        showBubbleAtTime(currentTime, 32, 'bubble12', bubblesShown);
        showBubbleAtTime(currentTime, 42, 'bubble13', bubblesShown);
    });
});

function resetBubblesShown() {
    return {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false};
}

function resetBubblesDisplay() {
    var bubbles = document.querySelectorAll('.bubble-container--left, .bubble-container--right');
    bubbles.forEach(function(bubble) {
        bubble.style.display = 'none';
        bubble.style.opacity = 0; // Reset opacity to make them fade in again
        setTimeout(function() {
            bubble.style.display = 'flex'; // Required for opacity transition
        }, 10);
    });
}

function showBubbleAtTime(currentTime, targetTime, bubbleId, bubblesShown) {
    if (currentTime >= targetTime && !bubblesShown[bubbleId]) {
        var bubble = document.getElementById(bubbleId);
        if (bubble) {
            bubble.style.display = 'flex';
            setTimeout(function() {
                bubble.style.opacity = 1;
            }, 10);
            bubblesShown[bubbleId] = true;
        }
    }
}