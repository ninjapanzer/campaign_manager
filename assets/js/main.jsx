define([
  "domready",
  "underscore",
  "react",
  "jquery",
  "js/templates/main",
  "js/templates/campaigns"
  ], function(DOMReady, _, React, $, MainTemplate, CampaignsTemplate) {

  var main = function(){
    React.renderComponent(
      MainTemplate.main({campaigns: Campaigns}),
      document.body
    );
  };

  var Campaigns = React.createClass({
    getInitialState: function() {
      return {data: []};
    },
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
      return CampaignsTemplate.campaigns({data: this.state.data});
    }
  });

  DOMReady(function () {
    main();
  });
});