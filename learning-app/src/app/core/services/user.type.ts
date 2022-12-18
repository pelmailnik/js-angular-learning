import { DEFAULT_COLOR } from 'src/app/modules/cards/cards.data';


interface IUser {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
  favoriteColor: string;
}

class User implements IUser{
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
  favoriteColor: string;
  constructor(
    firstName = '',
    lastName = '',
    gender = '',
    email = '',
    phone = '',
    favoriteColor = DEFAULT_COLOR,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.phone = phone;
    this.favoriteColor = favoriteColor;
  }
}

export { IUser, User };
