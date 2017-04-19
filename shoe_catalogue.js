var msgTemplate = document.querySelector(".msgTemplate");
var buttonAdd = document.querySelector(".buttonAdd");
var combineTemp = Handlebars.compile(msgTemplate.innerHTML);

// var dropdownTemp = document.querySelector(".dropdownTemp");
var dropdownTemp = document.getElementById('dropdownTemp');
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
  var dropOutput = document.getElementById("displayDropdown");
   var tempCompileDropdown = compileDropdown({
    colour: arrayColor,
    size: arraySize
  })
  dropOutput.innerHTML= tempCompileDropdown
})();


// create my funtion for dropdownTemp

/**
 *
 */
document.querySelector(".filterBtn").addEventListener("click", function() {
  // ===== local variables to filter throw stock Available ===== //
  var shoeColors = document.querySelector(".shoeColors");
  var shoeSizes = document.querySelector(".shoeSizes");

  var shoeArray = [];

  var currentShoeColor = shoeColors.value;
  var currentShoeSize = shoeSizes.value;

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
  if (currentShoeColor === "All" && currentShoeSize !== "All") {
    for (var i = 0; i < shoes.length; i++) {
      var shoe = shoes[i];
      if (shoe.size === currentShoeSize) {
        shoeArray.push(shoe);
      }
    }
  };
  // output.innerHTML
  document.querySelector(".tableOutcome").innerHTML = combineTemp({
    shoes: shoeArray
  });


});

// Add new item function starts here
buttonAdd.addEventListener('click', function() {
  var textshoeColor = document.querySelector(".textshoeColor").value;
  var textshoeSize = document.querySelector(".textshoeSize").value;
  var textshoePrice = document.querySelector(".textshoePrice").value;
  var textshoeQuantity = document.querySelector(".textshoeQuantity").value;

  var shoeColors = document.querySelector(".shoeColors").value;
  var shoeSizes = document.querySelector(".shoeSizes").value;
  var matchColorsandSizes = shoeColors && shoeSizes;

  if (textshoeColor !== "" &&
    textshoePrice !== "" &&
    textshoeQuantity !== "" &&
    textshoeSize !== "") {

    var newStock = shoes.push({
      color: textshoeColor,
      price: textshoePrice,
      in_stock: textshoeQuantity,
      size: textshoeSize

    });
  }

  document.querySelector(".textshoeColor").value = ""
  document.querySelector(".textshoePrice").value = ""
  document.querySelector(".textshoeQuantity").value = ""
  document.querySelector(".textshoeSize").value = ""

  var displayDropdown = document.getElementById("displayDropdown");
  var compileDropdown = Handlebars.compile(dropdownTemp.innerHTML);

  (function() {
    var arrayColor = [];
    var arraySize = [];
    for (var i = 0; i < shoes.length; i++) {
      var colorContainer = shoes[i].color;
      var sizeContainer = shoes[i].size;
      arrayColor.push(colorContainer);
      arraySize.push(sizeContainer);
    }
    var dropOutput = document.getElementById("displayDropdown");
     var tempCompileDropdown = compileDropdown({
      colour: arrayColor,
      size: arraySize
    })
    dropOutput.innerHTML= tempCompileDropdown
  })();
  
});
