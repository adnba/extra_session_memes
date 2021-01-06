import React, { Component } from "react"
import "./Meme.css"

class Meme extends Component {
  state = {
    show: false,
    theme: false,
  }

  handleShow = e => {
    this.setState({ show: !this.state.show })
  }

  handleTheme = e => {
    this.setState({ theme: !this.state.theme })
  }

  render() {
    return (
      <div
        className={this.state.theme ? "memeStyle" : ""}
        style={this.props.darkMode ? { color: "green" } : null}
      >
        <h2 onClick={this.handleClick}>{this.props.meme.name}</h2>
        {this.state.show ? (
          <img width="300" src={this.props.meme.url} alt="" />
        ) : null}
        <button onClick={this.handleTheme}>Change</button>
      </div>
    )
  }
}

export default Meme
