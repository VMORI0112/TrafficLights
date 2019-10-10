import React from "react";
import './lights.css';


function controlTraff() {

	return (
       <>
		<div className="mainlights">
			<div className="lightred"><button>red</button></div>
            <div className="lightyellow"><button>yellow</button></div>
            <div className="lightgreen"><button>green</button></div>
		</div>
        <div className="mainwalk">
			<div className="walk"></div>
            <div className="nowalk"></div>
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
