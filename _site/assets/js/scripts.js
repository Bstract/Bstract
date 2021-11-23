jQuery(document).ready(function($){

  const options = {
    method: 'GET'
  };

  // Production
  // fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=10&collection=ice-dance-1', options)
  fetch('/assets/js/dev.json', options)
    .then(response => response.json())
    .then(response => $.each(response.assets, function(i, item) {
        if ( i < 3) {
          $('#originals-list-1').append(
            '<li>' +
              '<a href="' + item.permalink + '" target="_blank">' +
                '<div class="img-wrapper">' +
                  '<img src="' + item.image_url + '" alt="@Bstract artwork on OpenSea" />' +
                '</div>' +
                '<div class="card-info card-info-sticky">' +
                  '<h2>' + item.name + '</h2>' +
                  '<p>Available on OpenSea</p>' +
                '</div>' +
              '</a>' +
            '</li>'
          );
        } else {
          $('#originals-list-2').append(
            '<li>' +
              '<a href="' + item.permalink + '" target="_blank">' +
                '<div class="img-wrapper">' +
                  '<img src="' + item.image_url + '" alt="@Bstract artwork on OpenSea" />' +
                '</div>' +
                '<div class="card-info">' +
                  '<h2>' + item.name + '</h2>' +
                  '<p>Available on OpenSea</p>' +
                '</div>' +
              '</a>' +
            '</li>'
          );
          // Limit number of pieces listed
          return i<9;
        }


    }))
    .catch(err => console.error(err));

  // Open the menu – thanks Jonathon Suh
  var $hamburger = $('.hamburger');
  $('.menu-toggle').on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.nav-container').toggleClass("menu-open");
  });

  // Smoooooth scrolling
  $('.smooth-scroll').on("click", function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
    return false;
  });


});
