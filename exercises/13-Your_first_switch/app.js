function getColor(selection)
{
	switch(selection.toLowerCase()) { // Convert to lowercase to make the function case-insensitive
        case 'red':
        case 'green':
        case 'blue':
            return true;
        default:
            return false; // Returns false because the user picked an unavailable color
    }
}

let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
