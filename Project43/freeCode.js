class GateKeeper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }
    
    render(){
        let inputStyle = {
            height: 25,
            border: '1px solid black'
            }
        
        {(this.state.input.length > 15) ? (inputStyle.border = '3px solid red') : (inputStyle.border = '1px solid black')}
         
        return(
            <div>
                <h3>Don't type too much: </h3>
                <input type='text' style={inputStyle} value={this.state.input} onChange={this.handleChange} />
            </div>
        )
    }
}

ReactDOM.render(<GateKeeper/>, document.getElementById('app'))