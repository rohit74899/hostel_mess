let products = {
  data: [
    {
      productName: "Khanna Mess",
      // address: "Trimurti Chowk, Katraj, Pune.",
      distance: "300 m",
      category: "Veg",
      price: "2400",
      // gender: "Male",
      image: "mess1.jpeg",
    },
    {
      productName: "Shravani Mess",
      // address: "Trimurti Chowk, Katraj, Pune.",
      distance: "600 m",
      category: "Veg+Nonveg",
      price: "3000",
      // gender: "Male",
      image: "mess2.jpeg",
    },
    {
      productName: "Delhi Mess",
      // address: "Trimurti Chowk, Katraj, Pune.",
      distance: "800 m",
      category: "Veg+Nonveg",
      price: "3400",
      // gender: "Male",
      image: "mess3.jpeg",
    },
    {
      productName: "Kadam Mess",
      // address: "Trimurti Chowk, Katraj, Pune.",
      distance: "900 m",
      category: "Veg+Nonveg",
      price: "3000",
      // gender: "Female",
      image: "mess4.jpeg",
    },
    {
      productName: "Shaurya mess",
      // address: "Trimurti Chowk, Katraj, Pune.",
      distance: "1 km",
      category: "Veg",
      price: "2500",
      // gender: "Female",
      image: "mess5.jpeg",
    },
    {
      productName: "Gurukrupa Mess",
      // address: "Trimurti Chowk, Katraj, Pune.",
      distance: "1.2 km",
      category: "Veg",
      price: "2400",
      // gender: "Female",
      image: "mess6.jpeg",
    },
    {
      productName: "Paripurna Mess",
      // address: "Trimurti Chowk, Katraj, Pune.",
      distance: "1.4 km",
      category: "Veg+Nonveg",
      price: "2800",
      // gender: "Male",
      image: "mess7.jpeg",
    },
    {
      productName: "PICT College Mess",
      // address: "Trimurti Chowk, Katraj, Pune.",
      distance: "0 m",
      category: "Veg",
      price: "2800",
      // gender: "Male",
      image: "mess8.jpeg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  // Address
  // let address = document.createElement("h6");
  // address.innerText = i.address;
  // container.appendChild(address);

  // distance 
  let distance = document.createElement("h6");
  distance.innerText = i.distance + " away from PICT";
  container.appendChild(distance);

  //price
  let price = document.createElement("h6");
  price.innerText = "Rs " + i.price;
  container.appendChild(price);


  // let gender = document.createElement("h6");
  // gender.innerText = i.gender;
  // container.appendChild(gender);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// for (let i of products.data) {
//   //Create Card
//   let card = document.createElement("div");
//   //Card should have category and should stay hidden initially
//   card.classList.add("card", i.category3, "hide");
//   //image div
//   let imgContainer = document.createElement("div");
//   imgContainer.classList.add("image-container");
//   //img tag
//   let image = document.createElement("img");
//   image.setAttribute("src", i.image);
//   imgContainer.appendChild(image);
//   card.appendChild(imgContainer);
//   //container
//   let container = document.createElement("div");
//   container.classList.add("container");
//   //product name
//   let name = document.createElement("h5");
//   name.classList.add("product-name");
//   name.innerText = i.productName.toUpperCase();
//   container.appendChild(name);

//   // Address
//   let address = document.createElement("h6");
//   address.innerText = i.address;
//   container.appendChild(address);

//   // distance 
//   let distance = document.createElement("h6");
//   distance.innerText = i.distance + " away from PICT";
//   container.appendChild(distance);

//   //price
//   let price = document.createElement("h6");
//   price.innerText = "Rs " + i.price;
//   container.appendChild(price);


//   let gender = document.createElement("h6");
//   gender.innerText = i.gender;
//   container.appendChild(gender);

//   card.appendChild(container);
//   document.getElementById("products").appendChild(card);
// }

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
