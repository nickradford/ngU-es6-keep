'use strict';

import 'normalize.css';
import './app.styl';
import angular from 'angular';

import './components/noteMaker/noteMaker';
import './components/noteViewer/noteViewer';

angular.module('app', [
  // module dependencies here
  'noteMaker',
  'noteViewer'
])
.directive('app', () => {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <div>
        <note-maker></note-maker>
        <note-viewer></note-viewer>
      </div>
    `
  };
});
