import { Record } from "immutable";

const TodoRecord = Record({
  id: null,
  isDone: false,
  text: '',
});

export class Todo extends TodoRecord {
  getId() {
    return this.get('id');
  }
  getText() {
    return this.get('text');
  }
  isDone() {
    return this.get('isDone');
  }
  toggleDone() {
    return this.set('isDone', !this.isDone());
  }
}