//You can cancel a scheduled callback if it hasn't run yet.
const timer = setTimeout(() => {
    console.log("Hello!");
}, 5000);

// Cancel the timer
clearTimeout(timer);