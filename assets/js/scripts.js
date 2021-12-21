jQuery(document).ready(function($){

  const options = {
    method: 'GET'
  };

  // Production
  // fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=2&limit=10&collection=ice-dance-1', options)
  fetch('/assets/js/dev.json', options)
    .then(response => response.json())
    .then(response => $.each(response.assets, function(i, item) {
        if ( i < 3) {
          $('#originals-gallery-1').append(
            '<div class="labelled-frame left-labelled">' +
              '<a class="frame-label" href="' + item.permalink + '">' +
                '<h2>' + item.name + '</h2>' +
                '<p>Available on OpenSea</p>' +
              '</a>' +
              '<div class="picture-frame">' +
                '<div class="frame-border">' +
                  '<div class="mat-board">' +
                    '<img class="framed-image" src="' + item.image_url + '" alt="@Bstract artwork on OpenSea" />' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>'
          );
        } else {
          $('#originals-gallery-2').append(
            '<div class="labelled-frame bottom-labelled">' +
              '<a class="frame-label" href="' + item.permalink + '">' +
                '<h2>' + item.name + '</h2>' +
                '<p>Available on OpenSea</p>' +
              '</a>' +
              '<div class="picture-frame">' +
                '<div class="frame-border">' +
                  '<div class="mat-board">' +
                    '<img class="framed-image" src="' + item.image_url + '" alt="@Bstract artwork on OpenSea" />' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>'
          );
          // Limit number of pieces listed
          return i<11;
        }


    }))
    .catch(err => console.error(err));

  // Open the menu – thanks Jonathon Suh
  var $hamburger = $('.hamburger');
  $('.menu-toggle').on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.nav-container').toggleClass("menu-open");
  });

});
