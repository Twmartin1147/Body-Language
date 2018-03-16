
// import socialMedia from './socialMedia';
// import {logo} from  '../logo/logo';
// import {header} from './header.css';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loginscreen from './Loginscreen';
// Using a button in the header for the login which when clicked should render the login screen.


 export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
        // componentWillMount(){}
    }
    
    render() {
        return (
            <MuiThemeProvider>
        <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
        </MuiThemeProvider>
        );
    }
    handleClick(event) {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
        <Loginscreen/>
      }

    // ReactDOM.render(Header, document.getElementById('root'));
}
const style = {
    margin: 15,
   };