document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var video = document.getElementById('backgroundVideo');
    var lastTime = 0; 
    
    playButton.addEventListener('click', function() {
        video.muted = false;
        video.play();
        playButton.style.display = 'none';
    });

    var bubblesShown = resetBubblesShown();

    video.addEventListener('timeupdate', function() {
        var currentTime = video.currentTime;

      
        if (currentTime < lastTime) {
            bubblesShown = resetBubblesShown(); 
            resetBubblesDisplay(); 
        }
        lastTime = currentTime; 

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
        bubble.style.opacity = 0; 
        setTimeout(function() {
            bubble.style.display = 'flex';
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

function scrollToBottom() {
    window.scrollTo({ 
        left: 0, 
        top: document.body.scrollHeight, 
        behavior: 'smooth' 
    });
}
function showBubbleAtTime(currentTime, targetTime, bubbleId, bubblesShown) {
    if (currentTime >= targetTime && !bubblesShown[bubbleId]) {
        var bubble = document.getElementById(bubbleId);
        if (bubble) {
            bubble.style.display = 'flex';
            setTimeout(function() {
                bubble.style.opacity = 1;
                if (bubbleId === 'bubble13') {
                    scrollToBottom(); 
                }
            }, 10);
            bubblesShown[bubbleId] = true;
        }
    }
}
