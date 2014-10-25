define(['react', 'jquery'], function(React, $){

  exports = {
    jsonpComponent: function(url, success){
      $.ajax({
        url:  url,
        dataType: 'json',
        success: success,
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err);
        }
      });
    }
  };

  return exports;
});