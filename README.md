# malagasy-users-generator

Generate random malagasy users and phone number.

## Installing

With npm
```bash
npm i --save-dev malagasy-users-generator
```

With yarn
```bash
yarn add --dev malagasy-users-generator
```

## Usage

An example of basic usage :

```js
import {phoneNumber,userGenerator} from 'malagasy-users-generator'

// generate an array containing 5 random malagasy users
// generate 10 users if no number parameter is provided
const users = userGenerator(5)

// generate a single random malagasy phone number
const phone = phoneNumber
```