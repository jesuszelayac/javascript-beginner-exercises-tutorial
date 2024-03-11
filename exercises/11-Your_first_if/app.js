let total = prompt('How many km are left to go?');

// Your code below:
if (parseInt(total) > 100) {
    System.out.println("We still have a bit of driving left to go.");
} else if (parseInt(total) > 50) {
    System.out.println("We'll be there in 5 minutes.");
} else {
    System.out.println("I'm parking. I'll see you right now.");
}