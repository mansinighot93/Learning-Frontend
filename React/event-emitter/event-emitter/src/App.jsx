import Publisher from './Publisher';
import Subscriber from './Subscriber';
import EventEmitter from 'eventemitter3';
import React from 'react';
 
const emitter= new EventEmitter();

function App() {
  return (
    <>
      <div>
        <h2>Component Communication</h2>
        <table>
          <h3>Chat Sender:</h3>
          <tr>
            <td> <Publisher/></td>
            <td></td>
          </tr>
          <h3>Chat Reciver:</h3>
          <tr>
            <td> <Subscriber/></td>
          </tr>
        </table>
       </div>
    </>
  )
}
export default App;