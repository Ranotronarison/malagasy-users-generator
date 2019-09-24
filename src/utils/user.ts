import PhoneNumber from './phoneNumber';

export default class User {
  public firstname: string;
  public lastname: string;
  public age: number;
  public phone: PhoneNumber;

  constructor(firstname: string, lastname: string, minAge: number = 16, maxAge: number = 40) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = Math.floor(Math.random() * (maxAge - minAge) + minAge);
    this.phone = new PhoneNumber();
  }
}
