export default class User {
  id;
  name;
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
}