import React from 'react';
import './BodySection.css';
import ConnectionForm from "./ConnectionForm";

class BodySection extends React.Component {
	render() {
		return (
			<div className="BodySection-main-block">
				<ConnectionForm/>
			</div>
		)
	}
}

export default BodySection;