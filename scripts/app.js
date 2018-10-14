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

    
    arrowLeft.addEventListener('click', function() {
        if(current === 0) {

        }
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
