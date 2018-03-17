
// import socialMedia from './socialMedia';
// import {logo} from  '../logo/logo';
// import {header} from './header.css';
import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loginscreen from './Loginscreen';
// Using a button in the header for the login which when clicked should render the login screen.


 export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
      }

        handleLoginClick() {
        this.setState = ({isLoggedIn: true});   
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
        // This binding is necessary to make `this` work in the callback
    
       
    
      render() {

        const isLoggedIn = this.state.isLoggedIn;
    
        let button = null;
        if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
          button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return ( 
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
            </div>
        );
    }
}
function LoginScreen(props) {
    return 
    <div>
    {LoginScreen}
    </div>
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
        function LoginButton(props) {
            return (
                <button onClick={props.onClick}>
                Login
              </button>
            );
          }
          function Greeting(props) {
            const isLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
              return <LoginScreen />;
            }
            return <GuestGreeting />;
          }
          function LogoutButton(props) {
            return (
              <button onClick={props.onClick}>
                Logout
              </button>
            );
          }
    ReactDOM.render(
      <Header />,
      document.getElementById('root')
    );
//     
//     render() {
//         return (
//             <MuiThemeProvider>
//         <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
//         </MuiThemeProvider>
//         );
//     }
//     // handleClick(event) {
//     //     this.setState(prevState => ({
//     //       isToggleOn: !prevState.isToggleOn
//     //     }));
//     //     <Loginscreen/>
//     //   }
// const style = {
//     margin: 15,
//    };