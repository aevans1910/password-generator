import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPassword } from './actions'

class Password extends Component {
    constructor(props) {
        super(props)
        this.state = { password: 'p@ssw0rd', description: 'description' }
    }

    generatePassword() {
        let newPassword = ""
        for (let i = 0; i < 8; i++) {
            let randomNum =  Math.floor(Math.random()*94+33)
            newPassword += String.fromCharCode(randomNum)
        }
        this.setState({password: newPassword})
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={(e) => {
                        this.generatePassword()
                    }}>Generate</button>
                </div>
                <div>
                    <input 
                        onChange={(e) => {this.setState({ description: e.target.value })}}
                        value={this.state.description}
                    />
                </div>
                <div>
                    <input
                        onChange={(e) => {this.setState({ password: e.target.value })}}
                        value={this.state.password}
                    />
                </div>
                <div>
                    <button onClick={(e) => {
                        this.props.addPassword(this.state.description, this.state.password)
                    }}>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
  
    }
  }
  
  const mapDispatchToProps = () => {
    return {
      addPassword
    }
  }

export default connect(mapStateToProps, mapDispatchToProps())(Password)