
class NotesModel {
    constructor() {
      this._notes = [
        {
          id: 1,
          text: 'Some text 1',
          favorite: false
        },
        {
          id: 2,
          text: 'Some text 2',
          favorite: false
        },
        {
          id: 3,
          text: 'Some text 3',
          favorite: false
        },
        {
          id: 4,
          text: 'Some text 4',
          favorite: false
        },
        {
          id: 5,
          text: 'Some text 5',
          favorite: false
        }
      ];
  
    }
  
    getData(cb) {
      cb(this._notes);
      return this._notes;
    }
  
    removeNote(id, cb) {
      this._notes = this._notes.filter((e) => e.id !== +id);
      cb(this._notes);
    }
  
    addFavoriteNote(id, cb) {
      this._notes.forEach(note => {
        if (note.id === +id) note.favorite = note.favorite ? false : true;
      });
  
      cb(this._notes);
    }
  
  }