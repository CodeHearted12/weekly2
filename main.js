// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



function question1() {
  // Answer:
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    num += data[i].price;
  }
  let avg = (num / data.length).toFixed(2)
  console.log('The average price is $' + avg);

}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  data.forEach(function(i) {
    if (i.price >= 14 && i.price <= 18) {
      console.log(i.title);
    }
  });
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  data.forEach(function(i) {
    if (i.currency_code === "GBP") {
      console.log(i.title, i.price);
    }
  });
}




// 4: Display a list of all items who are made of wood.
function question4(){
// Answer:

let woodwork = []
for (i = 0; i < data.length; i++) {
  if (data[i].materials) {
    let find = data[i].materials
    for (j = 0; j < find.length; j++) {
      if (find[j] === 'wood') {
        woodwork.push(data[i].title)
      }
    }
  }
}
console.log(woodwork)
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  data.forEach(function(tree) {
    if (tree.materials.length > 8) {
      console.log(tree.title, tree.quantity, tree.materials.forEach(function(material) {
        console.log(material)
      }))
    }
  })
}



// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let BySeller = 0
  data.forEach(function(merchant) {
    if (merchant.made === 'i_did') {
      BySeller++
    }
  })
  console.log(BySeller + " was made by merchant")
}
