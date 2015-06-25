// create our directive here
// import the template, controller, and styles

import {NoteMakerController as controller} from './noteMaker.controller';
import template from './noteMaker.html';

let noteMakerComponent = () => {
  return {
    controller,
    controllerAs: 'vm',
    template
  };
};

export {noteMakerComponent};
