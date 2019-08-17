import React from 'react';
import './ConnectionForm.css'

class ConnectionForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleButton = this.handleButton.bind(this);
		this.handleChangeAddress = this.handleChangeAddress.bind(this);
		this.handleChangePort = this.handleChangePort.bind(this);
		this.handleChangeUser = this.handleChangeUser.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);

		this.state = {
			mAddress: null,
			mPort: null,
			mUser: null,
			mPassword: null,
			mInputStyleStatus: "ConnectionForm-input-value",
			mAddressError: false,
			mPortError: false,
			mUserError: false,
			mPasswordError: false,
			template: [
				{
					name: "server_address",
					inputInfo: "Server Address :",
					inputType: "text",
					placeHolder: "www.host.com",
					onChange: this.handleChangeAddress,
					hasError: false
				},
				{
					name: "port",
					inputInfo: "Port :",
					inputType: "number",
					placeHolder: "Default : 20",
					onChange: this.handleChangePort,
					hasError: false
				},
				{
					name: "user_name",
					inputInfo: "User Name :",
					inputType: "text",
					placeHolder: "UserA",
					onChange: this.handleChangeUser,
					hasError: false
				},
				{
					name: "password",
					inputInfo: "Password :",
					inputType: "password",
					placeHolder: "********",
					onChange: this.handleChangePassword,
					hasError: false
				}
			]
		};
	}

	updateError(name, content) {
		this.state.template.find(elem => {
			if (elem.name === name) {
				return elem.hasError = (content == null || content.length <= 0);
			}
		});
	}

	handleButton(event) {
		this.updateError('server_address', this.state.mAddress);
		this.updateError('port', this.state.mPort);
		this.updateError('user_name', this.state.mUser);
		this.updateError('password', this.state.mPassword);
		this.forceUpdate();
	}

	handleChangeAddress(event) {
		this.updateError('server_address', event.target.value);
		this.setState({mAddress: event.target.value});
	}

	handleChangePort(event) {
		this.updateError('port', event.target.value);
		this.setState({mPort: event.target.value});
	}

	handleChangeUser(event) {
		this.updateError('user_name', event.target.value);
		this.setState({mUser: event.target.value});
	}

	handleChangePassword(event) {
		this.updateError('password', event.target.value);
		this.setState({mPassword: event.target.value});
	}

	renderButton() {
		return (
			<button
				className="ConnectionForm-input-button"
				type="button"
				value="Connect"
				onClick={this.handleButton}
			>
				Connect
			</button>
		)
	}

	renderInputs() {
		return this.state.template.map((data, idx) => {
			return (
				<div key={idx}>
					<div className="ConnectionForm-info-input">{data.inputInfo}</div>
					<input
						className={data.hasError ? this.state.mInputStyleStatus + ' error' :
								this.state.mInputStyleStatus}
						type={data.inputType}
						placeholder={data.placeHolder}
						name={data.name}
						onChange={data.onChange}
					/>
				</div>
			)
		});
	}

	renderForm() {
		return (
			<form onSubmit={this.handleButton}>
				{this.renderInputs()}
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