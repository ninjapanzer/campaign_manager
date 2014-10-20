/** @jsx React.DOM */
define(["domready", "underscore", "react", "zepto"], function(DOMReady, _, React, $) {

  var Campaigns = React.createClass({
    componentDidMount: function() {
      this.props.url = 'campaigns.json';
      $.ajax({
        url: this.props.url,
        dataType: 'jsonp',
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      }).done(main());
    },
    render: function() {
      return (
        <h1>wow</h1>
      );
    }
  });

  DOMReady(function () {

    var main = function(){
      React.renderComponent(
        <h1>Hello, world! <Campaigns /></h1>,
        document.body
      );
    }
    main();
  });
});