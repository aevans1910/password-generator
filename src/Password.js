import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPassword } from './actions'
import zxcvbn from 'zxcvbn'

class Password extends Component {
    constructor(props) {
        super(props)
        this.state = { password: 'p@ssw0rd', description: 'description', score: 0 }
    }

    generatePassword() {
        let newPassword = ""
        for (let i = 0; i < 8; i++) {
            let randomNum =  Math.floor(Math.random()*94+33)
            newPassword += String.fromCharCode(randomNum)
        }
        this.handlePasswordChange(newPassword)
    }

    handlePasswordChange(e) {
        const result = zxcvbn(e)
        this.setState({password: e, score: result.score})
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
                        onChange={(e) => this.handlePasswordChange(e.target.value)}
                        value={this.state.password}
                    />
                </div>
                <p>{this.state.score}</p>
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