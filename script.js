$(document).ready(function() {
    $('.ajax-link').click(function(event) {
      event.preventDefault();
  
      var url = $(this).attr('href');
  
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          $('#content').html(data);
        }
      });
    });
  });