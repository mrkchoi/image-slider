// Set variables for all slides, arrowLeft, arrowRight


let slides = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right'),
    current = 0;

    // Reset the display for all slides (init)
    function reset() {
        for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
    }

    // Init the slider to display the first slide by default
    function startSlide() {
        reset();
        slides[0].style.display = 'flex';
    }

    function slideLeft() {
        reset();
        slides[current - 1].style.display = 'flex';
        current--;
    }

    arrowLeft.addEventListener('click', function() {
        if(current === 0) {
            current = slides.length;
        }
        slideLeft();

        
    });

    function slideRight() {
        reset();
        slides[current + 1].style.display = 'flex';
        current++;
    }

    arrowRight.addEventListener('click', function() {
        if(current === slides.length - 1) {
            current = -1;
        }
        slideRight();
    });

    startSlide();
    

    


// Set display for all slides to none
// function base() {
//     slides.style.display = 'none';
// }

// base();

// Default showing slide[0] 

// Create event listeners for arrowLeft & arrowRight

// On click, run function to change index of slide[i], to display next index
// If last index, then go back to the [0] (arrowRight)
// If first index, then go last (arrowLeft)
