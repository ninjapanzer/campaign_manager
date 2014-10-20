/** @jsx React.DOM */
define(["domready", "underscore", "react", "jquery"], function(DOMReady, _, React, $) {

  var main = function(){
    React.renderComponent(
      <h1>Hello, world! <Campaigns /></h1>,
      document.body
    );
  }

  var Campaigns = React.createClass({
    componentDidMount: function() {
      this.props.main = main;
      this.props.url = window.location.protocol + '//' + window.location.host + '/campaigns';
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err);
        }.bind(this)
      }).done(this.props.main());
    },
    render: function() {
      return (
        <h1>wow</h1>
      );
    }
  });

  DOMReady(function () {
    main();
  });
});