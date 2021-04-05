import React,{Component} from 'react'
import Header from "../../Components/header/Header";
import Menu from "../../Components/menu/Menu";

import Listejou from "../../Components/liste/Listejou";

export default class Joueurs extends Component {
    render() {

        return (
            <div className="wrapper">
                <Header/>
                <Menu/>
                <Listejou/>


            </div>
        );
    }

}
