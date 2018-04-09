export class Post {

  constructor(data) {
    if (data) {
      this.userId = data.userId;
      this.id = data.id;
      this.title = data.title || '';
      this.body = data.body || '';
    }
  }

  public userId: number;
  public id: number;
  public title?: string;
  public body?: string;

}
