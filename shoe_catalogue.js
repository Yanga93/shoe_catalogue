// ===== global variables to search item ===== //
var shoeColors = document.querySelector(".shoeColors");
var shoeSizes = document.querySelector(".shoeSizes");


var buttonAdd = document.querySelector(".buttonAdd");
var msgTemplate = document.querySelector(".msgTemplate");
var combineTemp = Handlebars.compile(msgTemplate.innerHTML);

var dropdownTemp = document.querySelector(".dropdownTemp");
var compileDropdown = Handlebars.compile(dropdownTemp.innerHTML);


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

(function() {
  var arrayColor = [];
  var arraySize = [];
  for (var i = 0; i < shoes.length; i++) {
    var colorContainer = shoes[i].color;
    var sizeContainer = shoes[i].size;
    arrayColor.push(colorContainer);
    arraySize.push(sizeContainer);
  }

  document.querySelector(".displayDropdown").innerHTML = compileDropdown({
    color: arrayColor,
    size: arraySize
  });
})();


// create my funtion for dropdownTemp

/**
 *
 */
document.querySelector(".filterBtn").addEventListener("click", function() {



});
// create my function here for stock
document.querySelector(".stockBtn").addEventListener("click", function() {
  document.querySelector(".tableOutcome").innerHTML = combineTemp({
    shoes
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
