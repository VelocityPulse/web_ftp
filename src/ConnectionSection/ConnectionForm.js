import React from 'react';
import './ConnectionForm.css'

class ConnectionForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeAddress = this.handleChangeAddress.bind(this);
		this.handleChangePort = this.handleChangePort.bind(this);
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);

		this.state = {
			mAddress: null,
			mPort: null,
			mUser: null,
			mPassword: null,
			template: [
				{
					inputInfo: "Server Address :",
					inputType: "text",
					placeHolder: "www.host.com",
					name: "server_address",
					onChange: this.handleChangeAddress
				},
				{
					inputInfo: "Port :",
					inputType: "number",
					placeHolder: "Default : 20",
					name: "port",
					onChange: this.handleChangePort
				},
				{
					inputInfo: "User Name :",
					inputType: "text",
					placeHolder: "UserA",
					name: "user_name",
					onChange: this.handleChangeUser
				},
				{
					inputInfo: "Password :",
					inputType: "password",
					placeHolder: "********",
					name: "password",
					onChange: this.handleChangePassword
				}
			]
		};

	}

	handleSubmit(event) {
		// this.setState({value: event.target.value});
		console.log(this.state.mAddress);
		console.log(this.state.mPort);
		console.log(this.state.mUser);
		console.log(this.state.mPassword);
	}

	handleChangeAddress(event) {
		this.setState({mAddress: event.target.value})
	}

	handleChangePort(event) {
		this.setState({mPort: event.target.value})
	}

	handleChangeUser(event) {
		this.setState({mUser: event.target.value})
	}

	handleChangePassword(event) {
		this.setState({mPassword: event.target.value})
	}

	renderButton() {
		return (
			<button
				className="ConnectionForm-input-button"
				type="button"
				value="Connect"
				onClick={this.handleSubmit}
			>
				Connect
			</button>
		)
	}

	renderInput(id, inputInfo, inputType, placeHolder, name, onChange) {
		return (
			<div key={id}>
				<div className="ConnectionForm-info-input">{inputInfo}</div>
				<input
					className="ConnectionForm-input-value"
					type={inputType}
					placeholder={placeHolder}
					name={name}
					onChange={onChange}
				/>
			</div>
		);
	}

	renderForm() {
		return (
			<form onSubmit={this.handleSubmit}>
				{
					this.state.template.map((data, idx) => {
						return (this.renderInput(
							idx,
							data.inputInfo,
							data.inputType,
							data.placeHolder,
							data.name,
							data.onChange
						));
					})
				}
				<br/>
				{this.renderButton()}
			</form>
		)
	}

	render() {
		return (
			<div className="ConnectionForm-main">
				<div className="ConnectionForm-title">Connection</div>
				{this.renderForm()}
			</div>
		);
	}
}

export default ConnectionForm;