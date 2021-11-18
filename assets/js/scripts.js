jQuery(document).ready(function($){

  const options = {
    method: 'GET'
  };

  // Production
  // fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=10&collection=ice-dance-1', options)
  fetch('/assets/js/dev.json', options)
    .then(response => response.json())
    .then(response => $.each(response.assets, function(i, item) {
        $('#ice-dance-collection').append(
          '<li>' +
            '<img src="' + item.image_url + '" alt="@Bstract artwork on OpenSea" />' +
            '<div class="card-info">' +
              '<h2>' + item.name + '</h2>' +
              '<p><a class="button icon-button" href="' + item.permalink + '" target="blank">Buy on OpenSea<span class="icon-wrapper"><i id="lightswitch" class="fas fa-arrow-right"></i></span></a></p>' +
            '</div>' +
          '</li>'
        );
        // Limit number of pieces listed
        return i<7;
    }))
    .catch(err => console.error(err));

  $('#lightswitch').on('click', function(){
    console.log("Lightswitch clicked!");
    var mode = $('#light-mode-label');
    if (mode.text() == "Light") {
      mode.text("Dark");
    } else {
      mode.text("Light");
    }
    $('.dark-mode-logo').toggle();
    $('body').toggleClass('light-mode');
  });

  // Open the menu – thanks Jonathon Suh
  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.nav-container').toggleClass("menu-open");
  });


});
