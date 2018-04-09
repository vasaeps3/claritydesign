export class Company {

  constructor(data) {
    if (data) {
      this.name = data.name || '';
      this.catchPhrase = data.catchPhrase || '';
      this.catchPhrase = data.catchPhrase || '';
    }
  }

  public name?: string;
  public catchPhrase?: string;
  public bs?: string;

}
