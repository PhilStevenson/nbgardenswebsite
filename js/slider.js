var currentIndex = 0,
	items = $('#slider img'), 
	itemAmt = items.length;
	
  cycleItems();

function cycleItems() {
  var item = $('#slider img').eq(currentIndex);
  items.hide();
  item.fadeIn("fast");
  //item.css('display','inline-block');
}

function next() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}

var autoSlide = setInterval(next, 3000);