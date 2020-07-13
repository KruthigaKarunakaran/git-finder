import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class Search extends Component {

    state = {
        text : ''
    }

    static propTypes = {
        searchUser : PropTypes.func.isRequired,
        clearUsers : PropTypes.func.isRequired,
        showClear : PropTypes.bool.isRequired
    }

  textOnChange = (e) => this.setState({[e.target.name] : e.target.value})
    
  onSubmit = (e) => {
    e.preventDefault()
    this.props.searchUser(this.state.text)
    this.setState({text : ''})
  }
  render() {
    const {clearUsers, showClear} = this.props
    return (
      <div>
        <form onSubmit = {this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search..." value = {this.state.text} onChange = {this.textOnChange}/>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        { showClear &&
        <button className = "btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        }
      </div>
    );
  }
}
