'use strict';

angular.module('angular-highlight-text', [])

.filter('highlightText', ['$sce', function($sce) {

  return function(input, match, className) {

    // Extract value from string
    var output = $sce.valueOf(input);

    // If match string is defined
    if( match ) {
      output = output.replace( new RegExp(match, 'gi'), '<span class="' + (className || 'highlighted') + '">$&</span>' );
    }

    // Return trusted html string
    return $sce.trustAsHtml(output);

  };

}])

.directive('highlightText', ['$filter', function ($filter) {

  return {
    restrict: 'A',
    scope: { highlightText: '=' },
    link: function(scope, element, attrs) {

      /**
       * Watch the highlightText object and update element html content
       */
      scope.$watch('highlightText', function(options) {

        return element.html( $filter('highlightText')(options.text, options.match, attrs.highlightClass) );

      });

    }

  };

}]);
