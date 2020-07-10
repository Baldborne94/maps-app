import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };
  //color:string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company name: ${this.companyName}</h1>
      <h3>Catchphrase: ${this.catchPrase}</h3>
    </div>
    `;
  }
}
