// ===== global variables to search item ===== //
var shoeColors = document.querySelector(".shoeColors");
var shoeSizes = document.querySelector(".shoeSizes");


var buttonAdd = document.querySelector(".buttonAdd");
var msgTemplate = document.querySelector(".msgTemplate").innerHTML;
var combineTemp = Handlebars.compile(msgTemplate);

var dropdownTemp = document.querySelector(".dropdownTemp").innerHTML;
var compileDropdown = Handlebars.compile(dropdownTemp);


var shoes = [{
    color: 'Black',
    price: '750.00',
    in_stock: '5',
    size: '6',

  },
  {
    color: 'Black',
    price: '850.00',
    in_stock: '5',
    size: '7',
  },
  {
    color: 'Brown',
    price: '900.00',
    in_stock: '3',
    size: '7',
  },
  {
    color: 'Brown',
    price: '850.00',
    in_stock: '5',
    size: '8',
  },
  {

    color: 'White',
    price: '550.00',
    in_stock: '3',
    size: '7',
  },
  {
    color: 'White',
    price: '750.00',
    in_stock: '5',
    size: '8',
  }
];
var shoeColors = document.querySelector(".shoeColors");
var shoeSizes = document.querySelector(".shoeColors");
// create my funtion for dropdownTemp
document.querySelector(".filterBtn").addEventListener("click", function(){

  // document.querySelector(".displayDropdown").innerHTML = compileDropdown({
  //   :
  // });

});
// create my function here for stock
document.querySelector(".searchBtn").addEventListener("click", function() {

  var shoeArray = [];

  var currentShoeColor = shoeColors;
  var currentShoeSize = shoeSizes;

  //filter the data
  if (currentShoeColor === "All" && currentShoeSize === "All") {
    shoeArray = shoes;
  } else {
    for (var i = 0; i < shoes.length; i++) {
      var shoe = shoes[i];
      var colorMatches = (currentShoeColor === "All" || currentShoeColor === shoe.color);
      var sizeMatches = (currentShoeSize === "All" || currentShoeSize === shoe.size);
      if (colorMatches && sizeMatches) {
        shoeArray.push(shoe);
      }
    }
  };

  document.querySelector(".tableOutcome").innerHTML = combineTemp({
    shoes: shoeArray
  });

});

// Add new item function starts here
buttonAdd.addEventListener('click', function() {
      var newStock = shoes.push({
      color: document.querySelector(".textshoeColor").value,
      price: document.querySelector(".textshoePrice").value,
      in_stock: document.querySelector(".textshoeQuantity").value,
      size: document.querySelector(".textshoeSize").value
    });
    document.querySelector(".textshoeColor").value = ""
    document.querySelector(".textshoePrice").value = ""
    document.querySelector(".textshoeQuantity").value = ""
    document.querySelector(".textshoeSize").value = ""
});
