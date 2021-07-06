import React from 'react';
import '../assets/styles/components/NotFound.scss';
import socialMediaImage from '../assets/static/img/socialMedia.png';
import developmentImage from '../assets/static/img/programming.svg';
import '../assets/styles/components/NotFound.scss';

function NotFound() {
	return (
		<>
			<div className='container-fluid home_container'>
				<picture className='col-6 home_developmentImage'>
					<img src={developmentImage} alt='' />
				</picture>
				<picture className='col-6 home_socialImage'>
					<img src={socialMediaImage} alt='' />
				</picture>
			</div>
		</>
	);
}

export default NotFound;
