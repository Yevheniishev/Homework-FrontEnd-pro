
class NotesView {
    constructor() {
      this._main_s = {
        list: document.querySelector('.main__list'),
        removeBtnClass: 'main__btn--remove',
        favoriteBtnClass: 'main__btn--favorite'
      }
  
      this._favorite_s = {
        list: document.querySelector('.favorite__list')
      }
  
      this._template = {
        mainItem: `
              <li class="main__element">
                  {{note}}    
                  <button data-id={{id}} class="main__btn--remove">Remove</button>
                  <button data-id={{id}} class="main__btn--favorite" style="background-color: {{btn-color}}">Add</button>
              </li>
              `,
        favoriteItem: `
              <li class="favorite__element">
                  {{note}}    
              </li>
              `
      }
    }
  
    renderNotes(notes) {
      let list_element = '';
      let favoriteColor = '';
      notes.forEach(note => {
        favoriteColor = note.favorite ? 'gold' : 'none';
        list_element += this._template.mainItem
          .replace('{{note}}', note.text)
          .replace(/{{id}}/g, note.id)
          .replace('{{btn-color}}', favoriteColor);
      });
      this._main_s.list.innerHTML = list_element;
  
      list_element = '';
      notes.forEach(note => {
        if (note.favorite) {
          list_element += this._template.favoriteItem.replace('{{note}}', note.text);
        }
      });
  
      this._favorite_s.list.innerHTML = list_element;
    }
  
    listenRemovingNote(cb) {
      this._main_s.list.addEventListener('click', (e) => {
        let target = e.target;
        if (target.className === this._main_s.removeBtnClass) {
          for (const attr of target.attributes) {
            if (attr.name === 'data-id') 
            cb(attr.value);
          }
        }
      });
    }
  
    listenAddingFavoriteNote(cb) {
      this._main_s.list.addEventListener('click', (e) => {
        let target = e.target;
        if (target.className === this._main_s.favoriteBtnClass) {
          for (const attr of target.attributes) {
            if (attr.name === 'data-id') 
            cb(attr.value);
          }
        }
      });
    }
  }