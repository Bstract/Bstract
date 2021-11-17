jQuery(document).ready(function($){

  const options = {
    method: 'GET'
  };

  fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=12&collection=ice-dance-1', options)
    .then(response => response.json())
    .then(response => $.each(response.assets, function(i, item) {
        console.log(item.token_id);
        $('#ice-dance-collection').append(
          '<li><img src="' + item.image_url + '" alt="@Bstract artwork on OpenSea" /></li>'
        );
    }))
    .catch(err => console.error(err));

});
