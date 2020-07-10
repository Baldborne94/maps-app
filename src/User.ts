import faker from 'faker';
import { Mappable } from './CustomMap';

// implements tells typescript we want to make sure that a instance of class user satisfies
// all the properties required by the Mappable Interface
export class User implements Mappable {
  // we are going to create 2 properties
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  //color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `Username: ${this.name}`;
  }
}
