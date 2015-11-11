$(document).ready(function(){
	$("#searchInput").keyup(function(){
		
		var searchInput = $(this).val();
		var count = 0;
		
		$("#productList .product").each(function(){
			if($(this).text().search(new RegExp(searchInput, "i")) < 0) {
				$(this).fadeOut();
			} else {
				$(this).show();
				count++;
			}
		});
		
		var numberItems = count;
		
		$("#resultCount").text("Number of Results = " + count)
	});
 		
	
	$("#minPrice").on("change", priceChange);
	$("#maxPrice").on("change", priceChange);
	
	priceChange();
	
	function priceChange() {
		
		var minPrice = $("#minPrice").val();
		var maxPrice = $("#maxPrice").val();
		
		$("#maxPriceLabel").html("Maximum Price: " + maxPrice);
		$("#minPriceLabel").html("Minimum Price: " + minPrice);
		
		$("#productList .product").each(function(){
			var price = parseInt(jQuery(this).children(".price").text().substring(1));
			
			console.log(minPrice + " " + maxPrice);
			
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