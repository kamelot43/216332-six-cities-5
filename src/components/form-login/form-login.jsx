import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class FormLogin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form className="login__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={this.handleFieldChange}/>
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={this.handleFieldChange}/>
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    )
  }
}

export default FormLogin;
