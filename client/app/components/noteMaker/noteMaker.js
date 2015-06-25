// the registration for our component

import angular from 'angular';
import {noteMakerComponent} from './noteMaker.component';
import './noteMaker.styl';

import {NoteKeeper} from '../../services/noteKeeper.service';

let noteMaker = angular.module('noteMaker', ['noteKeeper'])
  .directive('noteMaker', noteMakerComponent);

export {noteMaker};
