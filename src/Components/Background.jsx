
import { useEffect } from 'react';
import bikini from '../tahiniBikniMov.mp4'




function Background() {
    return (
       <>
      <video onPlay={console.log("loaded")}autoPlay muted loop id="myVideo">
  <source src={bikini} type="video/mp4"></source>
</video>

  
       </>
    )
  }

  export default Background;
