'use strict';

var strain = {
  // debugger
  keep: function(a, f){
      var array = [];
      for (var i = 0; i < a.length; i++){
       if (f(a[i])) array.push(a[i]);
      }
      return array;
  },
  discard: function(a, f){
      var array = [];
      for (var i = 0; i < a.length; i++){
          if (!f(a[i])) array.push(a[i]);
      }
      return array;
  //
  }
};
