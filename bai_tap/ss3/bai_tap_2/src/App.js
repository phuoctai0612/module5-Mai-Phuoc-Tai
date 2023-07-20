import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    }
    // this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event) => {
    
    this.setState(() => {{
      item: event.target.value
    }});
  }

  handleAddItem = () => {
    if (this.state.item !== "") {
       this.state.list.push(this.state.item)
    
      this.setState(()=>{this.state.list})
    }
  }
  render() {
    return (
      <>
        <input type='text' onChange={this.handleChange} />
        <button onClick={this.handleAddItem}>Add</button>
        <ul >
          {this.state.list.map((listState,index =>
            <li key={index}>{listState}</li>
          ))}
        </ul>
      </>)
  }

}
export default App;
