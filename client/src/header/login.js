import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
 render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }

handleClick(event){
  var apiBaseUrl = "http://localhost:4000/api/";
  console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
  //To be done:check for empty values before hitting submit
  var self = this;
  var payload={
  "first_name": this.state.first_name,
  "last_name":this.state.last_name,
  "email":this.state.email,
  "password":this.state.password
  }
  axios.post(apiBaseUrl+'/register', payload)
.then(function (response) {
 console.log(response);
 if(response.data.code == 200){
  //  console.log("registration successfull");
  console.log("Login successfull");
  // var uploadScreen=[];
  // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
  // self.props.appContext.setState({loginPage:[]})
  }
  else if(response.data.code == 204){
  console.log("Username password do not match");
  alert("username password do not match")
  }
  else{
  console.log("Username does not exists");
  alert("Username does not exist");
  }
  })
  .catch(function (error) {
  console.log(error);
  });
  }
}

const style = {
 margin: 15,
};
export default Login;