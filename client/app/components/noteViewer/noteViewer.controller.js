// using classes, we make the controller here
// with a createNote method

class NoteViewerController {
  constructor(noteKeeperService) {
    this.noteKeeper = noteKeeperService
  }

  remove(index) {
    this.noteKeeper.remove(index)
  }
}

NoteViewerController.$inject = ['noteKeeperService'];

export {NoteViewerController};
