import React from 'react'

class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        
        this.setState({
            [event.target.name] : event.target.value
        })

    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                allMemeImgs: memes
            })
        })
    }


    render(){
        return(
            <div className ="content">
              <form>
                  <input type="text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}></input>
                  <input type="text" placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}></input>
              </form>
              <div className="meme">
                  <img src={this.state.randomImg}></img>
                  <h2 className ="top"></h2>
                  <h2 className="bottom"></h2>
              </div>
            </div>
        )
    }
}

export default Body