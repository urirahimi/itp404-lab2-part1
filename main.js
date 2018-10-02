let RestaurantsTemplateString = document.getElementById("restaurant-template").innerHTML;
let renderRestaurants = Handlebars.compile(RestaurantsTemplateString);

let promise = $.ajax({
  type: "get",
  url: "https://thejsguy.com/teaching/2018/api/restaurants.json"
});

promise.then(restaurants => {
  console.log(restaurants.data);
  let renderedRestaurants = renderRestaurants({
    restaurants: restaurants.data
  });
  $("body").append(renderedRestaurants);
  $("#loading").css("display", "none");
});
