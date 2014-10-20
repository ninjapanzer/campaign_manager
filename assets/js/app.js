requirejs.config({
  "baseUrl" : "",
  "paths"   : {
    "domready"      : "components/domready/ready.min",
    "underscore"    : "components/underscore/underscore-min",
    "react"         : "components/react/react",
    "zepto"         : "components/zepto/zepto.min"
  },
  "shim": {
    "zepto": {
      "exports": '$'
    },
  }

});

requirejs(['js/main']);
