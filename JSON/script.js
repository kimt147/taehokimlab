
document.addEventListener("DOMContentLoaded", function() {
    const imgageData = 
      [
        {
            "title": "Image1",
            "what": "Troll",
            "cuteness": 0.1
        },
        {
            "title": "Image2",
            "what": "Teddy",
            "cuteness": 1
        },
        {
            "title": "Image3",
            "what": "Goofy",
            "cuteness": 0.8
        },
        {
            "title": "Image4",
            "what": "Dog",
            "cuteness": 1
        },
        {
            "title": "Image5",
            "what": "Elephant",
            "cuteness": 0.4
        },
        {
            "title": "Image6",
            "what": "Moo",
            "cuteness": 0.5
        },
        {
            "title": "Image7",
            "what": "Monkey",
            "cuteness": 0.6
        },
        {
            "title": "Image8",
            "what": "Giraffe",
            "cuteness": 0.8
        },
        {
            "title": "Image9",
            "what": "Bear",
            "cuteness": 1
        },
        {
            "title": "Image10",
            "what": "Mouse",
            "cuteness": 0.2
        },
        {
            "title": "Image11",
            "what": "Sheep",
            "cuteness": 0.1
        },
        {
            "title": "Image12",
            "what": "Bunny",
            "cuteness": 1
        }
    ]
    

            const gridItems = document.querySelectorAll('.grid-item');

            imgageData.forEach((data, index) => {
                const item = gridItems[index];
                const caption = document.createElement('div');
                caption.classList.add('caption');
                caption.innerHTML = `
                    <p><strong>What:</strong> ${data.what}</p>
                    <p><strong>Cuteness:</strong> ${data.cuteness}</p>
                `;
                item.appendChild(caption);
            });
            
        });

        document.addEventListener('DOMContentLoaded', () => {
            const likeButton = document.getElementById('like-button');
            const dislikeButton = document.getElementById('dislike-button');
            const okayButton = document.getElementById('okay-button');
            const gridContainer = document.getElementById('grid-container');
        
            likeButton.addEventListener('click', () => {
                filterImages('like');
            });
        
            dislikeButton.addEventListener('click', () => {
                filterImages('dislike');
            });
        
            okayButton.addEventListener('click', () => {
                filterImages('okay');
            });
        
            function filterImages(type) {
                const gridItems = gridContainer.getElementsByClassName('grid-item');
                for (let item of gridItems) {
                    if (item.getAttribute('data-type') === type) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            }
        });
        