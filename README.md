<h1 align='center'> React Password Strength Indicator</h1>

<p align='center'>React component for check  wheather the  password is strong.<p/>

![Demo app](https://user-images.githubusercontent.com/42640947/211182171-2a6c23c4-3156-4acf-8441-2be9b97743ff.png)


### Install

```js
$ npm install react-passcode-strength-bar
```

### Run

```js
$ npm install
$ npm test
$ npm start
```

```js
$ npm start
```

### Usage

```js
import React from 'react';
import { PasswordIndicator } from "react-passcode-strength-bar";
import { useState } from "react";
import './App.css';

function App() {
   const [passcode, setPasscode] = useState("");
   const [email, setEmail] = useState("");
  return (
    <>
     <div className='container'>
     <div>
     <label htmlFor="email">Email</label>
      <input
        type="text"
        name="password"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
     </div>
     <div>
     <label htmlFor="password">Password</label>
      <input
        type="text"
        name="test"
        value={passcode}
        onChange={(e) => {
          setPasscode(e.target.value);
        }}
      />
     </div>
     <div>
      <PasswordIndicator
        password={passcode}
        show={true}
        indicate={(value)=>console.log(value)}
        colorConfig={{ strong: "green", moderate: "black", weak: "yellow" }}
        containerStyle={{
        marginTop: '5px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        padding: '3px',
        width: '300px',
        height: '10px',
      }}
      />
     </div>
     <button>Submit</button>
    </div>
    </>
  );
}

export default App;
```
### Examples

Checkout examples

Live example

> [Codesandbox](https://codesandbox.io/s/react-passcode-strength-example-rpunbl)

> [Demo live vercel](https://react-passcode-strength-bar-example.vercel.app/)

### Password patterns

strong password : Demo@123

moderate password: Demo123

weak password: demo


### Props /Options

<table>
<th>
Prop  Name
</th>
<th>
 Default
</th>
<th>
 Required
</th>
<th>
 Usage
</th>
</tr>
<tr>
<td>password</td>
<td>this prop need to be passed as string password</td>
<td> Yes</td>
<td>This string analyse the strength of the password </td>
</tr>
<tr>
<td>show</td>
<td>true</td>
<td> No (optional)</td>
<td>This prop is used to show and hide the password indicator component </td>
</tr>
<tr>
<td>width</td>
<td>230px</td>
<td> No (optional)</td>
<td>This prop is used to Modify the width of  password indicator component </td>
</tr>
<tr>
<td>height</td>
<td>8px</td>
<td> No (optional)</td>
<td>This prop is used to Modify the height of  password indicator component </td>
</tr>
<tr>
<td> colorConfig:{} </td>
<td>{  strong: 'green',
  moderate: '#fcc603',
  weak: 'red', }</td>
<td> No (optional)</td>
<td>This prop is used to indicate the colors of different stages of password </td>
</tr>
<tr>
<td> indicate:(fn) </td>
<td>No</td>
<td> No (optional)</td>
<td>It gives the callback and value true if the password is strong.
(value)=>console.log(value)
</td>
</tr>
<tr>
<td> containerStyle:{} </td>
<td>Css properties</td>
<td> No (optional)</td>
<td>
It is used to modify the style of the password Indicator component 
Note: if you define this prop all default css properties will be over written
{ 
        marginTop: '5px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        padding: '3px',
        width: '300px',
        height: '10px',
      }
</td>
</tr>
</table>
