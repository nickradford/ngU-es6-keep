import angular from 'angular';

var Autoscroll = angular.module('app.directives', [])
  .directive('autoscroll', function() {
    return {
      link: (scope, el) => {
        el[0].scrollIntoView({behavior: 'smooth'});
      }
    }
  })
