export class Address {

  constructor(data) {
    if (data) {
      this.street = data.street || '';
      this.suite = data.suite || '';
      this.city = data.city || '';
      this.zipcode = data.zipcode || '';
      this.geo = data.geo || {};
    }
  }

  public street?: string;
  public suite?: string;
  public city?: string;
  public zipcode?: string;
  public geo?: {
    lat?: number;
    lng?: number;
  };

}
