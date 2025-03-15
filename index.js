const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
  },
];

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
    { image: "images/kojiro.jpg", name: "Kojiro Ramen", restaurant: "Jet-lii" },
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

  function handleClick(presentations) {
    ramenDetailImg.src = presentations.image;
    ramenDetailImg.alt = presentations.name;
    ramenName.textContent = presentations.name;
    restaurantName.textContent = presentations.restaurant;

    // Update rating and comment dynamically
    ramenRating.innerHTML = `<strong>Rating:</strong> ${presentations.rating ? presentations.rating + "/10" : "N/A"}`;
    ramenComment.innerHTML = `<strong>Comment:</strong> ${presentations.comment ? presentations.comment : "No comment available"}`;
  }



  let form = document.querySelector("form")
}

displayRamens();


