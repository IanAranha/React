const inputStyle = {
    width: 235,
    margin: 5
}

class CheckUserAge extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: '',
            userAge: ''
        }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            input: event.target.value,
            userAge: ''
        })
    }
    
    submit(){
        this.setState({
            userAge: this.state.input
        })
    }
    
    render(){
        const buttonOne = <button onClick={this.submit}>Submit</button>
        const buttonTwo = <button>You May Enter</button>
        const buttonThree = <button>You Shall Not Pass</button>
        return(
            <div>
                <h3>Enter your age:</h3>
                <input 
                    style={inputStyle} 
                    type='number' 
                    value={this.state.input}
                    onChange={this.handleChange}/>
                    { (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge == '') ? buttonOne : buttonThree
                    }
            </div>
        )
    }
}

ReactDOM.render(<CheckUserAge/>, document.getElementById('app'))
