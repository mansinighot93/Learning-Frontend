import React, { useEffect, useState } from 'react';
import emitter from './emitter';

function Subscriber(){
 
    const [data, setData] = useState('');
   
    useEffect(()=>{
        const handleUpdate = (newData) => {
          setData(newData);
        };
   
        emitter.on('update',handleUpdate);
   
        return ()=>{
          emitter.off('update',handleUpdate);
          }
        }, []);
   
    return(
      <>
        <p>Latest Recived Message : {data} </p>
      </>
    );
};
export default Subscriber;