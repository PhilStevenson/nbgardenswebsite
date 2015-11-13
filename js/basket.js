$(document).ready(function() {
	// refresh the basket when the page is loaded, to display old local storage variables
	displayOrderlines();
});

// the add to basket function takes the id of the product element in HTML and also the name of the product and the price
function addToBasket(id,name,price) {

	// get the string for the quantity input element
	var quantityInput = "#" + id + " .quantityInput";

	// get the value from the input element
	var quantity = $(quantityInput).val();

	// check to see if there are orderlines already stored locally
	if(localStorage.getItem('orderlines') == null){
		// if not then set the number of orderlines to 1 as this will be the first
		localStorage.setItem('orderlines', '1');
	} else {
		// else increase the number of orderlines by one
		var noOrderlines = parseInt(localStorage.getItem('orderlines')) + 1;
		localStorage.setItem('orderlines', String(noOrderlines));
	}

	// get the current number of orderlines
	var i = parseInt(localStorage.getItem('orderlines'));

	// get the string for the localstorage key
	var storeName = 'orderline' + String(i);

	// add the values together ready to store in local storage
	var storeVals = name + ',' + price + ',' + quantity;

	// add the orderline to localstorage
	localStorage.setItem(storeName,storeVals);

	// refresh the basket
	displayOrderlines();
}



function displayOrderlines(){
	// empty the basket div
	$("#basketContent").empty();

	// get the number of orderlines
	var noOrderlines = parseInt(localStorage.getItem('orderlines'));

	// initialise the price 
	var price = 0;

	// create the start of the basket table HTML
	var htmlString = "<table><tr><th>Product Name</th><th>Price</th><th>Quantity</th><th>-</th></tr>";

	// for each orderline stored in local storage
	for (var i = 1; i <= noOrderlines; i++) {
		// stores the local storage key
		var storeName = 'orderline' + String(i);

		//gets an array of the one orderline
		var line = localStorage.getItem(storeName).split(',');

		// HTML for a single orderline
		htmlString = htmlString + '<tr><td>'+line[0]+'</td><td>'+line[1]+'</td><td>'+line[2]+'</td><td><a href="" onClick="deleteOrderline('+ i +');return false;">Delete</a></td></tr>';

		// calculates the total price
		price = price + (line[1] * line[2]);

	};

	// closing HTML
	htmlString = htmlString + '<tr><td>Total</td><td>£'+price+'</td></tr></table>';

	// add the HTML to the DOM
	$("#basketContent").append(htmlString);
};

// deletes an orderline using the ID use within localStorage
function deleteOrderline(id) {
	// get the number of orderlines
	var noOrderlines = parseInt(localStorage.getItem('orderlines'));

	// initalise the array
	var orderlines = new Array();

	// does stuff like taking all the current orderlines from the local storage
	for (var i = 1; i <= noOrderlines; i++) {

		// stores the local storage key
		var storeName = 'orderline' + String(i);

		// adds each orderline to an array
		orderlines.push(localStorage.getItem(storeName));
		// and removes them from localStorage
		localStorage.removeItem(storeName);	
	};

	// remove the one with the relivant id 
	var remove = id-1;
	orderlines.splice(remove,1);

	// update the total number of orderlines
	var newCount = String(orderlines.length);
	localStorage.setItem('orderlines',newCount)

	// for each orderline in the array
	for (var i = 0; i < orderlines.length; i++) {
		// store the lacal storage key
		var storeName = 'orderline' + String(i+1);
		
		// add the items back to local storage
		localStorage.setItem(storeName,orderlines[i]);
	};

	// refresh the basket
	displayOrderlines();
}

