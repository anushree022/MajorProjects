import React from 'react';

const Proj_firstpagelist = (props) => {
	
	return (
		<div className="fpstyle ma4 bg-light-red dib pa3 grow shadow-4 tc" >
		<img src={'https://joeschmoe.io/api/v1/pjlistarray[0].name'} alt="Proj_firstpage"/>
	     <h1> {props.name} </h1>
		
		</div>
		);
	
	
}
export default Proj_firstpagelist;
