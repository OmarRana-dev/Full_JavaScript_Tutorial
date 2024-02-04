const btn = document.querySelector("button");

// // Handling JS page load events 

// //  --the load event is fired when the whole webpage(HTML) has loaded fully, including all dependent resources, including JavaScript files, CSS files, and images.
// document.querySelector("img").addEventListener('load', (e) => {
//     console.log('Imgs Are Loaded');
// });


// // The DOMContentLoaded fires when the DOM content is loaded, without waiting for images and stylesheets to finish loading.
// document.querySelector("button").addEventListener("click", (e) => {
//     console.log("Clicked")
// })


// // Before the webpage and its resources are unloaded, the beforeunload event is fired. At this time, the webpage is still visible and you have an opportunity to cancel the event.
// window.addEventListener('beforeunload', (event) => {
//     event.preventDefault();
//     // Google Chrome requires returnValue to be set.
//     event.returnValue = '';
// });


// document.addEventListener("keydown", (e) => {
//     console.log(e.keyCode)
// })


// disable context menu when right-mouse clicked
// btn.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });

// // show the mouse event message
// btn.addEventListener('mouseup', (e) => {
//     console.log(e.button)
// switch (e.button) {
//     case 0:
//         console.log('Left mouse button clicked.');
//         break;
//     case 1:
//         console.log('Middle mouse button clicked.');
//         break;
//     case 2:
//         console.log('Right mouse button clicked.');
//         break;
//     default:
//         console.log(`Unknown mouse button code: ${e.button}`);
// }
// });


// btn.addEventListener("click", (e) => {
//     console.log(e.shiftKey)
// })

// let track = document.querySelector('#track');
// track.addEventListener('mousemove', (e) => {
//     let log = document.querySelector('#log');
//     log.innerText = `
//             Screen X/Y: (${e.screenX}, ${e.screenY})
//             Client X/Y: (${e.clientX}, ${e.clientY})`
// });


// // JavaScript Keyboard Events
// // keydown – fires when you press a key on the keyboard and fires repeatedly while you’re holding down the key.
// // keyup – fires when you release a key on the keyboard.
// // keypress – fires when you press a character keyboard like a,b, or c, not the left arrow key, home, or end keyboard, … The keypress also fires repeatedly while you hold down the key on the keyboard.

document.addEventListener("keypress", (e) => {
    console.log("Key: " + e.key, "Code: " + e.keyCode)
})



// // JavaScript Scroll Events
// // When you scroll a document or an element, the scroll events fire.You can trigger the scroll events in the following ways, for example:
// // Using the scrollbar manually
// // Using the mouse wheel
// // Clicking an ID link
// // Calling functions in JavaScript

// let scrolling = false;
// window.scroll = () => {
//     scrolling = true;
// };
// setInterval(() => {
//     // console.log("Hello boy ")
//     if (scrolling) {
//         scrolling = false;
//         // place the scroll handling logic here
//     }
// }, 300);


// // JavaScript scrollIntoView() Example
// btn.addEventListener("click", (e) => {
//     document.querySelector(".special").scrollIntoView(false);
// })



// // JavaScript Focus Events
// btn.addEventListener("focus", (e) => {
//     e.target.style.backgroundColor = "yellow";
// })
// btn.addEventListener("blur", (e) => {
//     e.target.style.backgroundColor = "";
// })


// // JavaScript Event Delegation
// Having a large number of event handlers will take up memory and degrade the performance of a page.
// The event delegation technique utilizes the event bubbling to handle the event at a higher level in the DOM than the element on which the event originated.
// let menu = document.querySelector('#menu');
// menu.addEventListener('click', (event) => {
//     let target = event.target;
//     switch (target.id) {
//         case 'Clang':
//             console.log('Clang menu item was clicked');
//             break;
//         case 'java':
//             console.log('Java menu item was clicked');
//             break;
//         case 'python':
//             console.log('Python menu item was clicked');
//             break;
//         case 'cpp':
//             console.log('C++ menu item was clicked');
//             break;
//         case 'chsah':
//             console.log('C# menu item was clicked');
//             break;
//     }
// });



// btn.addEventListener('click', function () {
//     alert('Mouse Clicked');
// });

// let clickEvent = new Event('click');
