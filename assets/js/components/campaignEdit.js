define(['react', 'jquery', 'underscore', 'domready', "js/templates/campaignEditBox"], function(React, $, _, DOMReady, CampaignEditBox){

  var textBox = function(){
    React.renderComponent(
      TextBoxComponent(),
      $('#editing')[0]
    );
  };

  var TextBoxComponent = React.createClass({
    getInitialState: function() {
      this.props.initial = 'Campaign Description'
      return {value: this.props.initial};
    },
    handleFocus: function(event) {
      if(this.state.value === this.props.initial){
        this.setState({value: ''});
      }
    },
    handleBlur: function(event) {
      if(this.state.value === ''){
        this.setState({value: this.props.initial});
      }
    },
    handleChange: function(event) {
      this.setState({value: event.target.value});
    },
    componentDidMount: function() {
      this.setState({data: ''});
    },
    render: function() {
      return CampaignEditBox.call(this);
    }
  });

  DOMReady(function(){
    textBox();
  });
});