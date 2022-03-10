import React, {useRef, forwardRef, useImperativeHandle,useEffect, useState} from "react";
import {useThree} from "react-three-fiber";



const Controls = forwardRef((props, ref2) => {
    const orbitRef = useRef();
    const { camera, gl } = useThree();





    return (
      <orbitControls
        ref={orbitRef}
        target={[0, 0, 0]}
        args={[camera, gl.domElement]}
        enableZoom
        {...props}
      />
    );
})

export default Controls