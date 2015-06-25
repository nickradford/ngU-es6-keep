// the registration for our component

import angular from 'angular';
import {noteViewerComponent} from './noteViewer.component';
import './noteViewer.styl';

import '../../services/noteKeeper.service';
import '../../directives/autoscroll.directive';

let noteViewer = angular.module('noteViewer', ['noteKeeper', 'app.directives'])
  .directive('noteViewer', noteViewerComponent);

export {noteViewer};
