import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login'
let test="Govind";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data: 
       [
          {
             "id":1,
             "name":"Foo",
             "age":"20"
          },
          {
             "id":2,
             "name":"Bar",
             "age":"30"
          },
          {
             "id":3,
             "name":"Baz",
             "age":"40"
          }
       ],      
       data2: [],
      
       gpa: {name: "Govind SP" }
       
    }
    this.setStateHandler = this.setStateHandler.bind(this);
    this.Ok=this.Ok.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDomelement=this.findDomelement.bind(this)
    this.updateState=this.updateState.bind(this)
 }
 updateState(e)
 {
  this.setState({gpa:{name:e.target.value}})
 }
 findDomelement()
 {
   var bagdiv=document.getElementById("root");
   ReactDOM.findDOMNode(bagdiv).style.color='white';
   ReactDOM.findDOMNode(bagdiv).style.background ='black';
 }
 forceUpdateHandler() {
  this.forceUpdate();
};
 Ok()
 {
console.log("ok test");
  this.setState({gpa:{name:"GSP"}})
 }
 setStateHandler() {
 var  data1=
  [
     {
        "id":1,
        "name":"GPA",
        "age":"20"
     },
     {
        "id":2,
        "name":"GPA",
        "age":"30"
     },
     {
        "id":3,
        "name":"GPA",
        "age":"40"
     }
  ];
   this.setState({data2:data1})
 }
  render() {
    var i = 1;
    var myStyle = {
      fontSize: 20,
      color: '#FF0000',
   
   }
   var date = new Date().toUTCString();
    return (
      <div  className="App">
         <Router>
         <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
            </div>
           </Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React First App {test}</h1>
        </header>
        <button onClick = {this.setStateHandler}>SET STATE</button>
        <button onClick = {this.Ok}> Change Govind SP</button>
        <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
        <button onClick = {this.findDomelement}>FIND node  and change baground</button>
        <br/>
        <input type = "text" className="App-intro" value = {this.state.gpa.name} 
               onChange = {this.updateState} />
            <h4>{this.state.gpa.name}</h4>
        <p className="App-intro">      
          <Header/>
        </p>
        <h4>Date Time: {date}</h4>
        <h4>Random number: {Math.random()}</h4>
        <h2  style = {myStyle}>Govind,State Chenge : {this.state.gpa.name} </h2>
        <div id = "myDiv">NODE</div>
        <h2>Expression :Total 4+5={5+4}, Boolen Statement : {i === 1 ? 'True!' : 'False'}</h2>
         
       
        <table width="100%" style={myStyle} className='table table-responsive' border="1" cellSpacing="0 " >
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data1 = {person} />)}
               </tbody>
            </table>
             <h3>Dynamic table</h3>
              <table width="100%" style={myStyle} className='table table-responsive' border="1" cellSpacing="0  " > 
              <tbody>
                {this.state.data2.map((dt,i)=><TableRow key= {i} data1={dt}/>)}
                </tbody>
              </table>            
            <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      </div>
     
    );
  }
}
class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Header {1+1}</h1>         
                     
        </div>
     );
  }
}
class TableRow extends React.Component {
  render() {
     return (
        <tr>
           <td>{this.props.data1.id}</td>
           <td>{this.props.data1.name}</td>
           <td>{this.props.data1.age}</td>
        </tr>
     );
  }
}
App.defaultProps = {
  headerProp: "Header from props... Default",
  contentProp:"Content from props...Default"
}


export default App;
