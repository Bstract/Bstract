jQuery(document).ready(function($){

  const options = {
    method: 'GET'
  };

  fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=12&collection=ice-dance-1', options)
    .then(response => response.json())
    .then(response => $.each(response.assets, function(i, item) {
        $('#ice-dance-collection').append(
          '<li>' +
            '<img src="' + item.image_url + '" alt="@Bstract artwork on OpenSea" />' +
            '<h2>' + item.name + '</h2>' +
            '<p><a href="' + item.permalink + '" target="blank">Buy on OpenSea</a></p>' +
          '</li>'
        );
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

});
