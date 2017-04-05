// ===== global variables to search item ===== //
var shoeColors = document.querySelector(".shoeColors");
var shoeSizes = document.querySelector(".shoeSizes");

// ===== variables to add item
// var textshoeColor = document.querySelector(".textshoeColor").value;
// var textshoeSize = document.querySelector(".textshoeSize").value;
// var textshoePrice = document.querySelector(".textshoePrice").value;
// var textshoeQuantity = document.querySelector(".textshoeQuantity").value;
var buttonAdd = document.querySelector(".buttonAdd");
var msgTemplate = document.querySelector(".msgTemplate").innerHTML;
var combineTemp = Handlebars.compile(msgTemplate);


var shoes = [{
    color: 'Black',
    price: '750.00',
    in_stock: '5',
    size: '6',

  },
  {
    color: 'Brown',
    price: '650.00',
    in_stock: '3',
    size: '6',
  },
  {
    color: 'White',
    price: '550.00',
    in_stock: '3',
    size: '6',
  }
];

// var data = combineTemp({
//   shoe: shoes
// });

// create my function here for stock
document.querySelector(".searchBtn").addEventListener("click", function() {

  var shoeArray = [];

  var currentShoeColor = shoeColors.value;
  var currentShoeSize = shoeSizes.value;

  //filter the data
  if (currentShoeColor === "All" && currentShoeSize === "All") {
    shoeArray = shoes;
  }
  if(currentShoeColor !== "All" && currentShoeSize === "All") {
    for (var i = 0; i < shoes.length; i++) {
      var shoe = shoes[i];
      if (shoe.color === currentShoeColor) {
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

  //display the filtered data
  document.querySelector(".tableOutcome").innerHTML = combineTemp({
    shoes: shoeArray
  });

});

// Add new item function starts here
buttonAdd.addEventListener('click', function(){
  var newStock = shoes.push({color: document.querySelector(".textshoeColor").value,
  price: document.querySelector(".textshoePrice").value,
  in_stock: document.querySelector(".textshoeQuantity").value,
  size: document.querySelector(".textshoeSize").value
});
document.querySelector(".textshoeColor").value=""
document.querySelector(".textshoePrice").value=""
document.querySelector(".textshoeQuantity").value=""
document.querySelector(".textshoeSize").value=""
});





// {
//   color: 'Black',
//   price: '450.00',
//   in_stock: '5',
//   size: '7',
//
//   },
//   // ==== shoe size 7 and price 450 ===//
//   {
//     color: 'Brown',
//     price: '750.00',
//     in_stock: '3',
//     size: '7',
//   },
//   {
//     color: 'White',
//     price: '850.00',
//     in_stock: '3',
//     size: '7',
//   },
//
// // ==== shoe size 8 and price 550 ===//
//   {
//     color: 'Black',
//     price: '550.00',
//     in_stock: '4',
//     size: '8',
//
//   },
//   {
//     color: 'Brown',
//     price: '650.00',
//     in_stock: '5',
//     size: '8',
//   },
//   {
//     color: 'White',
//     price: '600.00',
//     in_stock: '6',
//     size: '8',
//   }
