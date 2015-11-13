
// LIVE SEARCH CODE ///////////////////////////////////

$(document).ready(function(){
	// on key release
	$("#searchInput").keyup(function(){
		// get the current text in the search bar
		var searchInput = $(this).val();
		
		// initalise count
		var count = 0;
		
		// for each product in the DOM
		$("#productList .product").each(function(){
			// if the product does not match the search 
			if($(this).text().search(new RegExp(searchInput, "i")) < 0) {
				// fade it out
				$(this).fadeOut();
			} else {
				// else show the product
				$(this).show();
				// add to the count, not currently implemented
				count++;
			}
		});
		
		// number of search result, not implemented
		var numberItems = count;
		$("#resultCount").text("Number of Results = " + count)
	});

 // LIVE PRICE FILTER ///////////////////////////////////
 		
	// price sliders on change call priceChange();
	$("#minPrice").on("change", priceChange);
	$("#maxPrice").on("change", priceChange);
	
	// run on page load
	priceChange();
	
	function priceChange() {
		// get the min and max prices from the sliders
		var minPrice = $("#minPrice").val();
		var maxPrice = $("#maxPrice").val();
		
		// show the set price on the dom
		$("#maxPriceLabel").html("Maximum Price: £" + maxPrice);
		$("#minPriceLabel").html("Minimum Price: £" + minPrice);
		
		// for each product 
		$("#productList .product").each(function(){
			// get the price of the product
			var price = parseInt(jQuery(this).children(".price").text().substring(1));
			
			// if the price is out with the range then fade the product out
			// else fade the product 
			if(price > maxPrice) {
				$(this).fadeOut();
			} else if(price < minPrice) {
				$(this).fadeOut();
			} else {
				$(this).fadeIn();
			}
		});
		
	};
	
});