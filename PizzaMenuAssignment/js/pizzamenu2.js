
					// RECEIPT //
function getReceipt() {
	text1 = ""; 
	text2 = ""; 
	var subTotal = 0;
	var sizePrice = 0; 
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var sizeChoice = sizeArray[i].value;
			text1 = text1+sizeChoice+"<br>";
		}
	}
	if (sizeChoice === "Personal Pizza") {
		sizePrice = 6;
		text2 = text2+sizePrice+"<br>"; 
	} else if (sizeChoice === "Medium Pizza") {
		sizePrice = 10;
		text2 = text2+sizePrice+"<br>";
	} else if (sizeChoice === "Large Pizza") {
		sizePrice = 14;
		text2 = text2+sizePrice+"<br>";
	} else if (sizeChoice === "Extra Large Pizza") {
		sizePrice = 16;
		text2 = text2+sizePrice+"<br>";
	}
	subTotal = sizePrice; 
	getMeat(subTotal,text1,text2); 
};	
					// END RECEIPT //

						// MEAT //

function getMeat(subTotal,text1,text2) { 
	var subTotal = subTotal; 
	var meatPrice = 0; 
	var meatChoice = []; 
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			meatChoice.push(meatArray[j].value);
		}
	}
	var meatAmount = meatChoice.length; 
	if (meatAmount > 1) {
		meatPrice = (meatAmount - 1); 
	} else {
		meatPrice = 0;
	}
	subTotal = (subTotal + meatPrice); 
	for (var j = 0; j < meatChoice.length; j++) {
			text1 = text1+meatChoice[j]+"<br>"; 
			if (meatAmount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatAmount = meatAmount - 1;
			} else if (meatAmount == 2) {
				text2 = text2 + 1 + "<br>";
				meatAmount = meatAmount - 1;
			} else {
				text2 = text2 + 1 + "<br>"; 
				meatAmount = meatAmount - 1; 
			}
	}
	getVeggie(subTotal,text1,text2); 

};
					// END MEAT //

					// VEGGIES //
function getVeggie(subTotal,text1,text2) {
	var veggiePrice = 0;
	var veggieChoice = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			veggieChoice.push(veggieArray[j].value);
		}
	}
	var veggieAmount = veggieChoice.length;
	if (veggieAmount >= 2) {
		veggiePrice = (veggieAmount - 1);
	} else {
		veggiePrice = 0;
	}
	subTotal = (subTotal + veggiePrice); 
	for (var j = 0; j < veggieChoice.length; j++) {
			text1 = text1+veggieChoice[j]+"<br>";
			if (veggieAmount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggieAmount = veggieAmount - 1;
			} else if (veggieAmount == 2) {
				text2 = text2 + 1 + "<br>";
				veggieAmount = veggieAmount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				veggieAmount = veggieAmount - 1;
			}
	}
	getCheese(subTotal,text1,text2); 
};
				// END VEGGIES //

				// CHEESE //

function getCheese(subTotal,text1,text2) {
	var cheesePrice = 0; 
	var cheeseChoice = []; 
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			cheeseChoice = cheeseArray[j].value;
		}
		if (cheeseChoice === "Extra Cheese") {
			cheesePrice = 3;
		}
	}
	text2 = text2+cheesePrice+"<br>";
	text1 = text1+cheeseChoice+"<br>";
	subTotal = (subTotal + cheesePrice);
	getSauce(subTotal,text1,text2);
};
				// END CHEESE //
			
				// SAUCE //
function getSauce(subTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			sauceChoice = sauceArray[j].value;
			text1 = text1 + sauceChoice +"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";
	getCrust(subTotal,text1,text2)
};
				// END SAUCE //

				// CRUST //
function getCrust(subTotal,text1,text2) {
	var crustPrice = 0; 
	var crustChoice; 
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			crustChoice = crustArray[j].value;
			text1 = text1 + crustChoice + "<br>";
		}
		if (crustChoice === "Cheese Stuffed Crust") {
			crustPrice = 3;
		}
	}
	subTotal = (subTotal + crustPrice);
	text2 = text2 + crustPrice + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("Text1").innerHTML=text1;
	document.getElementById("Text2").innerHTML="$"+text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+subTotal+".00"+"</h3>";
};
				// END CRUST //

				// CLEAR ORDER //
function clearAll() {
	document.getElementById("menu-wrap").reset();
	document.getElementById("cart").style.opacity=0;
};
				// END CLEAR ORDER //