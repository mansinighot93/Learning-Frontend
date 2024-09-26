// import { useState } from 'react';
// // import List from './components/List';
// // import Login from './components/Login';
// // import Registration from './components/Registration';
// import Container from './components/Container';

// function App() {
  
//   // const title = "Transflower Student";
//   // const [count, setCount] = useState(0);

//   // const person = {
//   //   firstName: "Rutuja",
//   //   lastName: "Tambade",
//   //   Email: "rututambade@gmail.com",
//   //   contact: "3154284644"
//   // };

//   // const onButtonClick = () => {
//   //   setCount(count + 1);
//   //   console.log("Click me button is pressed....." + count);
//   // }

//   return (
//     <>
//     {/* <div className='card' style={{ margin: 'auto', padding: '20px', border: '1px solid #ccc', width: '300px', textAlign:'center' }}>
//         <p>{title}</p>
//         <p>Information: <b>{person.firstName} {person.lastName}</b></p>
//         <p>Email: {person.Email}</p>
//         <p>Contact: {person.contact}</p>

//         <label>Clicks: {count}</label>
//         <br />
//         <button onClick={onButtonClick}>Click</button>
//       </div> */}
//       {/* <List></List>
//       <Login></Login>
//       <Registration></Registration> */}
//       <Container></Container>
//     </>
//   );
// }

// export default App;

import React from 'react';
import EventEmitter from 'eventemitter3';  // Import the EventEmitter class
import ChatSender from './components/EventEmitter/ChatSender';   // Import ChatSender component
import ChatReceiver from './components/EventEmitter/ChatReciver';// Import ChatReceiver component

function App() {
  // Initialize EventEmitter as a global object in App component
  const emitter = new EventEmitter();

  return (
    <>
      <div>
        <h2>Simple Chat App</h2>
        <table>
          <tr>
            <td><ChatSender emitter={emitter} /></td>  {/* Pass emitter as a prop */}
            <td></td>
          </tr>
          <tr>
            <td><ChatReceiver emitter={emitter} /></td>  {/* Pass emitter as a prop */}
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;