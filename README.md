# malagasy-users-generator

Generate random malagasy users

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

An example of basic usage with reactjs :

```js
import React from "react";
import ReactDOM from "react-dom";
import {userGenerator} from "malagasy-users-generator"

function App() {
  const usersList = userGenerator(4)
  return (
    <div className="App">
      <ul>
        {
            usersList.map((user,index) => 
            (<li key={index}>{user.firstname} - {user.lastname} - {user.phone} - {user.age}</li>)
        }
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```