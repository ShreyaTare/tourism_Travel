var slideIndex = 0;
		showSlides();
		
		function showSlides() {
		  var i;
		  var slides = document.getElementsByClassName("slideshow-container")[0].getElementsByTagName("img");
		
		  for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		  }
		
		  slideIndex++;
		
		  if (slideIndex > slides.length) {
			slideIndex = 1;
		  }
		
		  slides[slideIndex - 1].style.display = "block";
		
		  setTimeout(showSlides, 2000); 
		}
		
		function plusSlides(n) {
		  slideIndex += n;
		  showSlides();
		}



    //signupform

    var signupForm = document.getElementById("signup-form");
  var emailInput = document.getElementById("email-input");

  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var email = emailInput.value;
    
    
    emailInput.value = "";
  });


//pakg like items 



/*popup
  function handleLikeButtonClick(button) {
    if (button.classList.contains("liked")) {
      button.classList.remove("liked");
      var popup = document.createElement("div");
      popup.className = "popup";
      popup.innerHTML = "Package removed from list!";
      document.body.appendChild(popup);
      setTimeout(function() {
        popup.remove();
      }, 3000);
    } else {
      button.classList.add("liked");
      var popup = document.createElement("div");
      popup.className = "popup";
      popup.innerHTML = "Package saved to list! To see your list, click on the Saved Packages button!";
      document.body.appendChild(popup);
      setTimeout(function() {
        popup.remove();
      }, 3000);
    }
  }
  
  var likeButtons = document.getElementsByClassName("like-button");
  for (var i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function() {
      handleLikeButtonClick(this);
    });
  }*/
  



  

  ///////////////////pakge button nature click//////////////


  function showNaturePackages() {
    document.getElementById("nature-packages").style.display = "block";
    document.getElementById("adventure-packages").style.display = "none";
    document.getElementById("spiritual-packages").style.display = "none";
    document.getElementById("culture-packages").style.display = "none";
    
  }
  
  function showAdventurePackages() {
    document.getElementById("nature-packages").style.display = "none";
    document.getElementById("adventure-packages").style.display = "block";
    document.getElementById("spiritual-packages").style.display = "none";
    document.getElementById("culture-packages").style.display = "none";
  }
  
  function showSpiritualPackages() {
    document.getElementById("nature-packages").style.display = "none";
    document.getElementById("adventure-packages").style.display = "none";
    document.getElementById("spiritual-packages").style.display = "block";
    document.getElementById("culture-packages").style.display = "none";
  }

  function showCulturePackages() {
    document.getElementById("nature-packages").style.display = "none";
    document.getElementById("adventure-packages").style.display = "none";
    document.getElementById("spiritual-packages").style.display = "none";
    document.getElementById("culture-packages").style.display = "block";
  }
/*
  document.addEventListener("DOMContentLoaded", function() {
    var natureAdventureButton = document.getElementById("nature-adventure-button");
    var natureAdventureContainer = document.getElementById("nature-adventure-container");
  
    natureAdventureButton.addEventListener("click", function() {
      natureAdventureContainer.style.display = "block";
    });
  });
*/



  ///////////////

  document.addEventListener("DOMContentLoaded", function() {
    var natureAdventureButton = document.getElementById("nature-adventure-button");
    var natureAdventureContainer = document.getElementById("nature-adventure-container");
    var natureAdventureImage = natureAdventureContainer.querySelector("img");
  
    natureAdventureButton.addEventListener("click", function() {
      /*natureAdventureImage.src = "<img src='resources/images/pack2ndcon.jpg'>";*/
      natureAdventureContainer.style.display = "block";
    });
  });


  /*wishlist page functionality */
  function handleLikeButtonClick(button) {
    if (button.classList.contains("liked")) {
      button.classList.remove("liked");
      var popup = document.createElement("div");
      popup.className = "popup";
      popup.innerHTML = "Package removed from list!";
      document.body.appendChild(popup);
      setTimeout(function() {
        popup.remove();
      }, 3000);
  
      var itemName = button.parentNode.querySelector("h3").textContent;
      removeItemFromWishlist(itemName);
    } else {
      button.classList.add("liked");
      var popup = document.createElement("div");
      popup.className = "popup";
      popup.innerHTML = "Package saved to list! To see your list, click on the Saved Packages button!";
      document.body.appendChild(popup);
      setTimeout(function() {
        popup.remove();
      }, 3000);
  
      var itemName = button.parentNode.querySelector("h3").textContent;
      addItemToWishlist(itemName);
    }
  }
  
  function addItemToWishlist(itemName) {
    var likedItems = getLikedItemsFromStorage();
    likedItems.push(itemName);
    saveLikedItemsToStorage(likedItems);
  }
  
  function removeItemFromWishlist(itemName) {
    var likedItems = getLikedItemsFromStorage();
    var index = likedItems.indexOf(itemName);
    if (index > -1) {
      likedItems.splice(index, 1);
      saveLikedItemsToStorage(likedItems);
    }
  }
  
  function getLikedItemsFromStorage() {
    var likedItems = localStorage.getItem("likedItems");
    return likedItems ? JSON.parse(likedItems) : [];
  }
  
  function saveLikedItemsToStorage(likedItems) {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }
  
  
  
  var likeButtons = document.getElementsByClassName("like-button");
  for (var i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function() {
      handleLikeButtonClick(this);
    });
  }
  

 /* ////////////enqury form package price///////////////
  const packageSelect = document.getElementById('package');
  const priceInput = document.getElementById('price');

  // Define the package prices
  const packagePrices = {
    'Package 1': 7000,
    'Package 2': 8000,
    'Package 3': 5000
  };

  // Function to update the price based on the selected package
  function updatePrice() {
    const selectedPackage = packageSelect.value;
    const price = packagePrices[selectedPackage] || 0;
    priceInput.value = price;
  }

  // Add event listener to the package select element
  packageSelect.addEventListener('change', updatePrice);*/

  /////////////Buy package fun///////////////

const buyButton = document.getElementById('buy-button-id');

function handleBuyButtonClick() {
 
  window.location.href = '\enquiry.html';
}

buyButton.addEventListener('click', handleBuyButtonClick);