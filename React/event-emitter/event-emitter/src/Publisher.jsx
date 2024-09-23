import React, { useState } from 'react';
import emitter from './emitter';

function Publisher(){
    const [text,setText]=useState('');
    const handleChange=(event)=>{
      setText(event.target.value);
    }
    const handleClick=(event)=>{
      emitter.emit('update', text);
    };
   
    return(
      <>
        <input type="text" value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Send Message</button>
      </>
    );
};
export default Publisher;