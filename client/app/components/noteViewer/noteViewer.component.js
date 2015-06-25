// create our directive here
// import the template, controller, and styles

import {NoteViewerController as controller} from './noteViewer.controller';
import template from './noteViewer.html';

let noteViewerComponent = () => {
  return {
    controller,
    controllerAs: 'nvvm',
    template
  };
};

export {noteViewerComponent};
