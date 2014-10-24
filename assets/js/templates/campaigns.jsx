/** @jsx React.DOM */
define(['react'], function(React) {
  var exports = {
    campaigns: function (context){
      var data = context.data;
      if(data.length > 0){
        return (
          <h1>{data[0].content}</h1>
        );
      }
      return (<h1>No Data</h1>);
    }
  }

  return exports;
});
