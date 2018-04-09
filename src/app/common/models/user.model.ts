import { Address } from './address.model';
import { Company } from './company.model';


export class User {

  constructor(data) {
    if (data) {
      this.id = data.id;
      this.name = data.name || '';
      this.type = data.type;
      this.username = data.username || '';
      this.email = data.email || '';
      this.domainEmail = this.email.split('.')[this.email.split('.').length - 1];
      this.phone = data.phone || '';
      this.website = data.website || '';
      this.address = data.address || {};
      this.company = data.company || {};
    }
  }
  public id: number;
  public type: string;
  public name?: string;
  public username?: string;
  public email?: string;
  public domainEmail?: string;
  public phone?: string;
  public website?: string;
  public address?: Address;
  public company?: Company;

}
