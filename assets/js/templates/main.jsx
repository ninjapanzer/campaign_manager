/** @jsx React.DOM */
define(['react'], function(React) {
  var exports = {
    main: function (context){
      return (
      <div id='thing'>
        <h1>Hello, world!</h1>
        <context.campaigns />
      </div>
      )
    }
  }

  return exports;
});
