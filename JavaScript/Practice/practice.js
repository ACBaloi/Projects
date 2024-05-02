const colors = ['white', 'black', 'custom'];
//Create variables for the welcome message
const greeting = 'Howdy';
const shopperName = 'Molly';
const message = ', please check your order:';

//Concatenate the three variables above to create the welcome message
const welcome = greeting + shopperName + message;

//Create variables to hold details about the sign
const sign = 'Montague House';
const tiles = sign.length;
const subTotal = tiles * 5;
const shipping = 7;
const grandTotal = subTotal + shipping;


//Get the element that has an id of greeting
const el = document.getElementById('greeting').innerHTML = welcome;

//Get the element that has an id of userSign then update its contents
const elSign = document.getElementById('userSign').innerHTML = sign;

//Get the element that has an id of tiles then update its contents
const elTiles = document.getElementById('tiles').innerHTML = tiles;

//Get the element that has an id of subTotal then update its contents
const elSubTotal = document.getElementById('subTotal').innerHTML = '$' + subTotal;

//Get the element that has an id of shipping then update its contents
const elShipping = document.getElementById('shipping').innerHTML = '$' + shipping;

//Get the element that has an id of grandTotal then update its contents
const elGrandTotal = document.getElementById('grandTotal').innerHTML = '$' + grandTotal;







