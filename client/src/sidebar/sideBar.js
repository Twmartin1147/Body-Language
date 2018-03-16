
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class SideBar extends React.Component {

 constructor(props) {
   super(props);
   this.state = {open: false};
 }

 handleToggle = () => this.setState({open: !this.state.open});

 render() {
   return (
     
         <MuiThemeProvider>
             <p>This is sidebar randm text</p>
       <RaisedButton
         label="SideBar"
         onClick={this.handleToggle}
       />
   
       {/* <Drawer width={200} openSecondary={true} open={this.state.open} >
         <AppBar title="AppBar" />
       </Drawer> */}
       <Drawer open={this.state.open} containerStyle={{height: 'calc(100% - 64px)', top: 64}}>
 {/* <MenuItem>Menu Item</MenuItem>
 <MenuItem>Menu Item 2</MenuItem> */}
</Drawer>
       </MuiThemeProvider>
   )
}
  
 
}
