/** @jsx React.DOM */
define(['react'], function(React) {
  var exports = {
    editBox: function (){
      var value = this.state.value;
      return(
        <div styleClass="label">
          <textarea rows="50" cols="100"
            value={value}
            defaultValue={value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}/>
        </div>
      )
    }
  };

  return exports.editBox;
});