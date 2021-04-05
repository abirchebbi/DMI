
import React,{Component} from 'react'
import Header from "../../Components/header/Header";
import Menu from "../../Components/menu/Menu";

import Dashboard from "../../Components/Dash/Dashboard";
export default class Home extends Component {
    render() {

        return (
            <div className="wrapper">
                <Header/>
                <Menu/>
                <Dashboard/>


            </div>
        );
    }

}
