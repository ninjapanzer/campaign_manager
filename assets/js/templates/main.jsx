/** @jsx React.DOM */
define(['react'], function(React) {
  var exports = {
    main: function (context){
      return (
      <div>
        <h1>Hello, world!</h1>
        <context.campaigns />
      </div>
      )
    }
  }

  return exports;
});
