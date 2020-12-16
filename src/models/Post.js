export default class Post {
  userId;
  id;
  title;
  body;

  comments;
  constructor(data, comments) {
    this.userId = data.userId;
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.comments = comments.map(item => item.body)
  }
}