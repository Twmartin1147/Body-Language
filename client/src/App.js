import React, { Component } from 'react';
import logo from './SmallLogo.jpg';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Loginscreen from './header/Login/Loginscreen';
import './App.css';

injectTapEventPlugin();



// import header from './header/login';
// import footer from './footer/footer';
// import chatBox from './chatBox/chatBox';
// import mainPage from './main/mainPage';
// import sideBar from './sidebar/sideBar';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
const style = {
  margin: 15,
};

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
