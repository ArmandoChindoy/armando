import React, { useState } from 'react';
import '../assets/styles/components/NotFound.scss';
import socialMediaImage from '../assets/static/img/socialMedia.png';
import developmentImage from '../assets/static/img/programming.svg';
// import "../assets/styles/components/Home.scss";

function Home() {
	const [Class, setClass] = useState('.noCollapse');
	function collapse(item) {
		if (Class === '.noCollapse') {
			setClass('collapse');
		} else {
			setClass('.noCollapse');
		}
	}
	return (
		<>
			<div className='home_container'>
				<picture className={`home_developmentImage ${Class}`} onClick={collapse}>
					<img src={developmentImage} alt='' />
				</picture>
				<picture className='home_socialImage'>
					<img src={socialMediaImage} alt='' />
				</picture>
			</div>
		</>
	);
}

export default Home;
