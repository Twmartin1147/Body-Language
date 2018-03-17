import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from '../logo/logo'
import {Contact} from './contact'
import {YourEmotions} from './urEmotions'


export default class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (

            <MuiThemeProvider>
                <RaisedButton
                    label="SideBar"
                    onClick={this.handleToggle}
                />

                {/* <Drawer width={200} openSecondary={true} open={this.state.open} >
        <AppBar title="AppBar" />
      </Drawer> */}
                <Drawer open={this.state.open} containerStyle={{ height: 'calc(100% - 64px)', top: 64 }} openSecondary={true}>
                 <div grid-container3 >
                    <div grid-item3>
                        <Logo />
                    </div>
                    <div grid-item3>
                        <Contact />   
                    </div>
                    <div grid-item3>
                        <YourEmotions />
                    </div>
                 </div>
                </Drawer>
            </MuiThemeProvider>
        )
    }


}