import React from "react";
import './lights.css';


function controlTraff() {

    function onRed() {
             document.getElementById("redone").style.opacity = "1";
             document.getElementById("yellowone").style.opacity = ".3";
             document.getElementById("greenone").style.opacity = ".3";
            }
    function onYellow() {
            document.getElementById("redone").style.opacity = ".3";
            document.getElementById("yellowone").style.opacity = "1";
            document.getElementById("greenone").style.opacity = ".3";
            }
    function onGreen() {
            document.getElementById("redone").style.opacity = ".3";
            document.getElementById("yellowone").style.opacity = ".3";
            document.getElementById("greenone").style.opacity = "1";
            }

	return (
       <>
		<div className="mainlight mx-auto">
			<div className="lightred mx-auto" onClick={onRed} id="redone"></div>
            <div className="lightyellow mx-auto" onClick={onYellow} id="yellowone"></div>
            <div className="lightgreen mx-auto" onClick={onGreen} id="greenone"></div>

		</div>
        <div className="mainwalk mx-auto">
			<div className="walk text-center" >WALK</div>
            <div className="nowalk text-center">NOT WALK</div>
		</div>
        <div className="buttonlights">
			<div className="lightson"><button>Lights On </button></div>
            <div className="lightsoff"><button>Lights Off </button></div>
            <div className="automatic"><button>Automatic </button></div>
		</div>
      </>
	);
};


export default controlTraff;
