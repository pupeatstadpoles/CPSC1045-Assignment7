# CPSC1045-Assignment7
Smiley Mover - Completed March 2023

Web application built in JavaScript that calls a function to draw a smiley face on an HTML canvas. Using event handlers, the user can press buttons on the page or press the arrow keys and different functions will be called to make the smiley appear to move around the canvas. Has checks to ensure the smiley does not get moved off canvas.

One challenge I faced was that pressing the arrow keys could lead to the page scrolling up/down/left/right. I fixed the issue by using `event.preventDefault()`.

I also realised that drawing the smiley again every time I had to move it did not get rid of any previously drawn smiley faces, so I created a function `clearCanvas()` which calls the `clearRect()` function, and called `clearCanvas()` right at the start of every function for moving the smiley around.
