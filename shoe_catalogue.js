var msgTemplate = document.querySelector(".msgTemplate");
var buttonAdd = document.querySelector(".buttonAdd");
var combineTemp = Handlebars.compile(msgTemplate.innerHTML);

// var dropdownTemp = document.querySelector(".dropdownTemp");
var dropdownTemp = document.getElementById('color');
var sizeDropdown = document.getElementById('size')

var compileSize = Handlebars.compile(sizeDropdown.innerHTML);
var compileDropdown = Handlebars.compile(dropdownTemp.innerHTML);

var displayDropdown = document.getElementById("displayDropdown");
var displayDropdown2 = document.getElementById("displayDropdown2");



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

// create my funtion for dropdownTemp
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

updateDropdowns(shoes);
});

function updateDropdowns(shoes){

  (function() {
    // var arrayColor = [];
    var sizeMap = {};
    var arraySize = [];

    for (var i = 0; i < shoes.length; i++) {
      var sizeContainer = shoes[i].size;
      if (sizeMap[sizeContainer] === undefined) {
        sizeMap[sizeContainer] = sizeContainer;
        arraySize.push(sizeContainer);
      }
    }
    var dropOutput2 = document.getElementById("displayDropdown2");
    var tempCompileDropdown = compileSize({size: arraySize})
    dropOutput2.innerHTML = tempCompileDropdown
  })();

  (function() {
    var arrayColor = [];
    var colorMap = {};

    for (var i = 0; i < shoes.length; i++) {
      var colorContainer = shoes[i].color;
      if (colorMap[colorContainer] === undefined) {
        colorMap[colorContainer] = colorContainer;
        arrayColor.push(colorContainer);
      }
    }
    var dropOutput = document.getElementById("displayDropdown");
    var tempCompileDropdown = compileDropdown({
      colour: arrayColor,

    })
    dropOutput.innerHTML = tempCompileDropdown
  })();


  };
updateDropdowns(shoes);
