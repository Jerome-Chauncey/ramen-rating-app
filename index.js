function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  const ramenDetails = document.getElementById("ramen-detail");

  //elements inside #ramen-detail (ramen details)
  const ramenDetailImg = document.createElement("img");
  const ramenInfo = document.createElement("div");
  ramenInfo.id = "ramen-info";

  const ramenName = document.createElement("h2");
  const restaurantName = document.createElement("h3");
  const ramenRating = document.createElement("p");
  const ramenComment = document.createElement("p");

  //append name and restaurant inside ramenInfo
  ramenInfo.appendChild(ramenName);
  ramenInfo.appendChild(restaurantName);

  //container for image and ramen info
  const ramenDetailContainer = document.createElement("div");
  ramenDetailContainer.classList.add("ramen-detail-container");

  //append image and ramenInfo inside ramenDetailContainer
  ramenDetailContainer.appendChild(ramenDetailImg);
  ramenDetailContainer.appendChild(ramenInfo);

  //append ramenDetailContainer inside #ramen-detail
  ramenDetails.appendChild(ramenDetailContainer);

  //container for ramen rating and comment
  const ramenTextContainer = document.createElement("div");
  ramenTextContainer.classList.add("ramen-text-container");

  //append rating and comment inside ramenTextContainer
  ramenTextContainer.appendChild(ramenRating);
  ramenTextContainer.appendChild(ramenComment);

  //append ramenTextContainer to #ramen-detail after ramenDetailContainer
  ramenDetails.appendChild(ramenTextContainer);

  const ramenImages = [
    {
      image: "images/gyukotsu.jpg",
      name: "Gyukotsu Ramen",
      restaurant: "Wang",
      rating: 4,
      comment: "Very flavorful!",
    },
    {
      image: "images/kojiro.jpg",
      name: "Kojiro Ramen",
      restaurant: "Jet-lii",
      rating: 4,
      comment: "Nom nom!",
    },
    {
      image: "images/naruto.jpg",
      name: "Naruto Ramen",
      restaurant: "Naruto",
      rating: 10,
      comment: "My absolute fave!",
    },
    {
      image: "images/nirvana.jpg",
      name: "Nirvana Ramen",
      restaurant: "Bamako",
      rating: 1,
      comment: "Too much salt",
    },
    {
      image: "images/shoyu.jpg",
      name: "Shoyu Ramen",
      restaurant: "Ichiran",
      rating: 5,
      comment: "Delicious!",
    },
  ];

  ramenImages.forEach(function (presentations) {
    //container for each ramen image
    const img1 = document.createElement("img");
    img1.src = presentations.image;
    img1.alt = presentations.name;
    img1.style.cursor = "pointer";

    img1.addEventListener("click", function () {
      handleClick(presentations);
    });
    ramenMenu.appendChild(img1);
  });

  if (ramenImages.length > 0) {
    handleClick(ramenImages[0]); //selects the first ramen as default
  }

  function handleClick(presentations) {
    ramenDetailImg.src = presentations.image;
    ramenDetailImg.alt = presentations.name;
    ramenName.textContent = presentations.name;
    restaurantName.textContent = presentations.restaurant;

    // Update rating and comment dynamically
    ramenRating.innerHTML = `<strong>Rating:</strong> ${
      presentations.rating ? presentations.rating + "/10" : "N/A"
    }`;
    ramenComment.innerHTML = `<strong>Comment:</strong> ${
      presentations.comment ? presentations.comment : "No comment available"
    }`;
  }

  let form = document.querySelector("form");
}

displayRamens();

function addSubmitListener() {
  const form = document.getElementById("my-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //get values from the form

    const name = document.getElementById("name").value;
    const restaurant = document.getElementById("restuarant").value;
    const image = document.getElementById("image").value;
    const rating = parseInt(document.getElementById("rating").value);
    const comment = document.getElementById("comment").value;

    //new image element

    const addToMenuImg = document.createElement("img");
    addToMenuImg.src = image;
    addToMenuImg.alt = name;
    addToMenuImg.style.cursor = "pointer";

    //append new image to #ramen-menu
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.appendChild(addToMenuImg);

    //when clicked show details
    addToMenuImg.addEventListener("click", function () {
      updateRamenDetails({ image, name, restaurant, rating, comment });
    });

    //clear form field after submission
    form.reset();
  });
}

addSubmitListener();

function updateRamenDetails(ramen) {
  let ramenDetailContainer = document.querySelector("#ramen-detail");

  let ramenDetailImg = document.querySelector("#ramen-detail img");
  if (!ramenDetailImg) {
    // If the image doesn't exist, create and append it
    ramenDetailImg = document.createElement("img");
    ramenDetailContainer.prepend(ramenDetailImg);
  }

  let ramenName = document.querySelector("#ramen-info h2");
  let restaurantName = document.querySelector("#ramen-info h3");
  let ramenRating = document.querySelector(
    ".ramen-text-container p:nth-of-type(1)"
  );
  let ramenComment = document.querySelector(
    ".ramen-text-container p:nth-of-type(2)"
  );

  //update content

  ramenDetailImg.src = ramen.image;
  ramenDetailImg.alt = ramen.name;
  ramenName.textContent = ramen.name;
  restaurantName.textContent = ramen.restaurant;
  ramenRating.innerHTML = `<strong>Rating:</strong> ${
    ramen.rating ? ramen.rating + "/10" : "N/A"
  }`;
  ramenComment.innerHTML = `<strong>Comment:</strong> ${
    ramen.comment ? ramen.comment : "No comment available"
  }`;
}
