import React, { Component } from "react"
import axios from "axios"
import Meme from "./Meme"

class Memes extends Component {
  state = {
    memesArray: null,
    darkMode: false,
  }

  componentDidMount() {
    axios.get("https://api.imgflip.com/get_memes").then(response => {
      const memesArray = response.data.data.memes
      console.log("getting data from fetch")
      this.setState({ memesArray: memesArray })
    })
  }

  handleDarkMode = e => {
    this.setState({ darkMode: !this.state.darkMode })
  }

  render() {
    if (this.state.memesArray === null) {
      return <h1>Loading...</h1>
    }
    return (
      <div className={this.state.darkMode ? "dark" : ""}>
        <button onClick={this.handleDarkMode}>Dark mode</button>
        {this.state.memesArray.map(meme => (
          <Meme key={meme.id} darkMode={this.state.darkMode} meme={meme} />
        ))}
      </div>
    )
  }
}

export default Memes
