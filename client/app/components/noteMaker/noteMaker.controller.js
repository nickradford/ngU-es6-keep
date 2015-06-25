// using classes, we make the controller here
// with a createNote method

class NoteMakerController {
  constructor(noteKeeperService) {
    console.log('notekeeper', noteKeeperService)
    this.noteService = noteKeeperService;
    this.fuck = 'fuck'
  }

  createNote() {
    console.log('create Note')
    this.noteService.add(this.newNote);
    this.newNote = '';
  }
}

NoteMakerController.$inject = ['noteKeeperService'];

export {NoteMakerController};
