let products = {
  data: [
    {
      productName: "Stanza Living Alexandria House",
      address: "SCHOLARS INN, BOYES HOSTEL, DHANKAWADI, PUNE - 37",
      distance: "0.4 Km",
      category: "Single-sharing",
      category2: "Boys",
      category3: "9000+",
      category4: "Unfurnished",
      price: "11599",
      gender: "Boys",
      image: "alexandria.jpeg",
    },
    {
      productName: "Aditya Hostel",
      address: "Aditya Hostel( Purvansh Sadan ), 11, 32, Narhe Ambegaon Rd, Shriram Nagar, Dhankawadi, Pune, Maharashtra 411046",
      distance: "0.6 KM",
      category: "Double-sharing",
      category2: "Boys",
      category3: "9000+",
      category4: "Furnished",
      price: "10,699/",
      gender: "Boys",
      image: "Hostel2.jpg",
    },
    {
      productName: "Stanza living Kenitra House",
      address: "Shri Krupa hostel Building Number 3, Shriram Nagar, Dhankawadi, Pune, Maharashtra 411046, India",
      distance: " 0.3 km",
      category: "Triple-Sharing",
      category2: "Girls",
      category3: "9000+",
      category4: "Furnished",
      price: "10,699",
      gender: "Girls",
      image: "kenitra.jpeg",
    },
    {
      productName: "Stanza Living  Shiraz House",
      address: "TCure and Care Rajaram Gas, Katraj, Pune, Maharashtra 411046, India.",
      distance: " 0.7 km",
      category: "Single-sharing",
      category2: "Girls",
      category3: "5000-7000",
      category4: "Unfurnished",
      price: "5699",
      gender: "Girls",
      image: "shiraz.jpeg",
    },
    {
      productName: "Ujwala Hostel",
      address: "Panchod, Dhankawadi, Pune.",
      distance: "1 km",
      category: "Four-Sharing",
      category2: "Girls",
      category3: "5000-7000",
      category4: "Furnished",
      price: " 5500",
      gender: "Girls",
      image: "Hostel5.jpg",
    },
    {
      productName: "Stanza Living - Girona House",
      address: "Sweet Homes Girl Hostel, Opp. Narayani Dham Near Rajaram Gas Agency Katraj.",
      distance: "0.7km",
      category: "Double-sharing",
      category2: "Girls",
      category3: "9000+",
      category4: "Furnished",
      price: "10499",
      gender: "Girls",
      image: "Hostel6.jpg",
    },
    {
      productName: "Rashmi Hostel",
      address: "Rashmi hostel, Panchod, Katraj, Pune.",
      distance: "1.4 km",
      category: "Four-Sharing",
      category2: "Girls",
      category3: "3000-5000",
      category4: "Furnished",
      price: "4000",
      gender: "Girls",
      image: "Hostel7.jpg",
    },
    {
      productName: "Shree Hostel For Girls",
      address: "Kala Nagar, Dhankawadi, Pune.",
      distance: "1.8 km",
      category: "Triple-Sharing",
      category2: "Girls",
      category3: "3000-5000",
      category4: "Furnished",
      price: "3500",
      gender: "Girls",
      image: "Hostel8.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, i.category2, i.category3, i.category4, "hide");
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
  let address = document.createElement("h6");
  address.innerText = i.address;
  container.appendChild(address);

  // distance 
  let distance = document.createElement("h6");
  distance.innerText = i.distance + " away from PICT";
  container.appendChild(distance);

  //price
  let price = document.createElement("h6");
  price.innerText = "Rs " + i.price;
  container.appendChild(price);


  let gender = document.createElement("h6");
  gender.innerText = i.gender;
  container.appendChild(gender);

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
