define([
  "domready",
  "underscore",
  "react",
  "jquery",
  "js/lib/componentLoader",
  "js/templates/main",
  "js/templates/campaigns"
  ], function(DOMReady, _, React, $, Loader, MainTemplate, CampaignsTemplate) {

  var scope = this;

  var main = function(){
    React.renderComponent(
      MainTemplate.main({campaigns: Campaigns}),
      $('#main')[0]
    );
  };

  var campaignsComponent = function(data){
    return (
      React.createClass({
        getInitialState: function() {
          return {data: []};
        },
        componentDidMount: function() {
          this.setState({data: data});
        },
        render: function() {
          return CampaignsTemplate.campaigns({data: this.state.data});
        }
      })
    );
  };

  DOMReady(function () {
    Loader.jsonpComponent(window.location.protocol + '//' + window.location.host + '/campaigns',
      function(data) {
        Campaigns = campaignsComponent(data);
        main();
      }.bind(scope));
  });
});