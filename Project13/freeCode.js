const TypesOfFruit = () => {
    return (
    <div>
        <h4>From TypesOfFood Component</h4>
        <h2>Fruits</h2>
        <ul>
            <li>Apples</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Bananas</li>
        </ul>
        
    </div>
    )
}

const Fruits = () =>{
    return (
        <div>
            <TypesOfFruit />
        </div>
    )
}

class TypesOfFood extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
        <div>
            <h1>Types of Food Component<p>
            <Fruits/>    
        </div>
        )
    }
}

ReactDOM.render(<TypesOfFruit />, document.getElementById('app'))