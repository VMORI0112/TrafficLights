import React, { useState, useEffect } from 'react';

import './lights.css';

const ControlTraff = () => {

   // const [time, setTime] = useState(0);
    const [flag, setFlag] = useState(0);
    const [time, setTime] = useState(0);

    const onRed = () => {
        document.getElementById("redone").style.opacity = "1";
        document.getElementById("yellowone").style.opacity = ".3";
        document.getElementById("greenone").style.opacity = ".3";
        document.getElementById("walk").style.opacity = "1";
        document.getElementById("stop").style.opacity = ".3";
    }
    const onYellow = () => {
        document.getElementById("redone").style.opacity = ".3";
        document.getElementById("yellowone").style.opacity = "1";
        document.getElementById("greenone").style.opacity = ".3";
        document.getElementById("walk").style.opacity = ".3";
        document.getElementById("stop").style.opacity = "1";
    }
    const onGreen = () => {
        document.getElementById("redone").style.opacity = ".3";
        document.getElementById("yellowone").style.opacity = ".3";
        document.getElementById("greenone").style.opacity = "1";
        document.getElementById("walk").style.opacity = ".3";
        document.getElementById("stop").style.opacity = "1";
    }

    useEffect(() => {

        if (flag === 1) {
            setTimeout(() => setTime(time + 1), 1000);
            if (time === 2)  onRed();
            if (time === 7)  onYellow();
            if (time === 8)  onGreen();
            if (time === 9)  setTime(0);
        }

    }, [time, flag])




	return (
       <>
		<div className="mainlight mx-auto">
			<div className="lightred mx-auto" onClick={onRed} id="redone"></div>
            <div className="lightyellow mx-auto" onClick={onYellow} id="yellowone"></div>
            <div className="lightgreen mx-auto" onClick={onGreen} id="greenone"></div>

		</div>
        <div className="mainwalk mx-auto">
			<div className="walk text-center" id="walk">WALK</div>
            <div className="nowalk text-center" id="stop">STOP</div>
		</div>
        <div className="buttonlights">
			<div className="lightson" ><button>Lights On </button></div>
            <div className="lightsoff"><button>Lights Off </button></div>
            <div className="automatic" onClick={() => setFlag(1)}><button>Automatic </button></div>
		</div>
      </>
	);

};

export default ControlTraff;
