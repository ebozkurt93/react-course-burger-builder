import React, { Component } from 'react';

import Aux from '../../hoc/Aux_';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = (state) => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }});
    }

render() {
    return (
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} ></Toolbar>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    );
}

}

export default Layout;
