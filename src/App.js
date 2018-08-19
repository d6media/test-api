import React, { Component } from 'react';
import './App.css';
import Testbox from './Testbox';
import axios from 'axios';

var API_KEY =  'https://randomuser.me/api/'

class App extends Component {
   constructor(props){
    super(props);
    this.state = {
      value: '', 
      saved: '', 
      clear: false,
      testboxes: [
      ],
      leftPos: '',
      rightPos: '',
      count: 1
    }

    this.add = this.add.bind(this);
    this.save = this.save.bind(this);
    this.nextId = this.nextId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.eachTestBox = this.eachTestBox.bind(this);
  }

  componentDidMount(){

    var self = this;
    axios.get(API_KEY)
     .then(function (response) {
       console.log(response);
       self.setState({picture: response.data.results[0].picture.large})
     })
    .catch(function (error) {
       console.log(error);
    });

  }

  handleChange(event){
    console.log('changed')
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  eachTestBox(testbox, i){
    return  (
     <Testbox key={i} text={this.state.testboxes[i].text} index={i} />
    )
  }

  add(){

    var self = this;
    axios.get(API_KEY)
     .then(function (response) {
       console.log(response);
       self.setState({picture: response.data.results[0].picture.large})
     })
    .catch(function (error) {
       console.log(error);
    });


    this.setState(prevState => ({
      testboxes: [
      ...prevState.testboxes,
        {
          id: this.nextId(),
          text:this.save()
        }
      ]
    }), this.clear.bind(this))
  }

  clear(value){
    this._newText.value = ''
  }

  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  save(){
      return this._newText.value;
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <h1>Describe the guest speaker</h1>

          <div className="user">  
            <img src={this.state.picture ? this.state.picture : "https://upload.wikimedia.org/wikipedia/commons/2/28/InternetSlowdown_Day.gif"} />
          </div>  

          <div className="search">
            <input  ref={input => this._newText = input}  />
            <button className="start" onClick={this.add.bind()} >GO</button>
          </div>  

          <div className="carousel_wrap">
            <div className="test_box_wrap">
                {this.state.testboxes.map(this.eachTestBox)}

            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
