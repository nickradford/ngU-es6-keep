import angular from "angular";

class noteKeeperService {
  constructor() {
    this.notes = 'these are some notes'.split(' ')
    this.notes = []
  }

  add(note) {
    if (!(note.length && note.trim().length)) {
      return;
    }
    this.notes.push(note);
  }

  remove(index) {
    this.notes.splice(index, 1)
  }
}

let NoteKeeper = angular.module('noteKeeper', []).
  service('noteKeeperService', noteKeeperService)

export {NoteKeeper};
