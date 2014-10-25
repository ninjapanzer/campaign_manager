requirejs.config({
  "baseUrl" : "",
  "paths"   : {
    "domready"      : "components/domready/ready.min",
    "underscore"    : "components/underscore/underscore-min",
    "react"         : "components/react/react",
    "jquery"        : "components/jquery/dist/jquery.min"
  },
  "shim": {
    "jquery": {
      "exports": '$'
    },
  }

});

requirejs(['js/main', 'js/components/campaignEdit']);
