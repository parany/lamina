import { Group } from './group';
import { PhoneNumber } from './phone-number';

export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  facebook: string;
  jobTitle: string;
  work: string;
  town: string;
  city: string;
  country: string;
  gender: string;
  group: Group;
  phoneNumbers: PhoneNumber[];
}
