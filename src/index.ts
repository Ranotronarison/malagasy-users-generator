import PhoneNumber from './utils/phoneNumber';
import User from './utils/user';
import usersList from './utils/usersList';

/**
 *
 * @param {number} numberOfUsers : Number of users to generate
 * @returns {Array} Users array
 */
export const userGenerator = (numberOfUsers: number = 20) => {
  const firstnames = usersList.firstnames;
  const lastnames = usersList.lastnames;
  let usersArray: object[] = [];
  for (let i = 0; i < numberOfUsers; i++) {
    const randomFirstname = firstnames[Math.floor(Math.random() * firstnames.length)];
    const randomlastname = lastnames[Math.floor(Math.random() * firstnames.length)];
    const user = new User(randomFirstname, randomlastname);
    usersArray = [...usersArray, user];
  }
  return usersArray;
};

/**
 * Tools for generating single malagasy phone number
 */

export const phoneNumber = new PhoneNumber();
