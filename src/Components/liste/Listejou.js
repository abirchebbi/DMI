import React,{Component} from 'react'
import Card from "../Card/Card";
import './liste.css'
// IMPORT FICHIER JSON
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
export default class Listejou extends Component{
    // state = {
    //     search: ""
    // };
    // onchange = e => {
    //     this.setState({ search: e.target.value });
    // };
    render() {
        // const { search } = this.state;
        // const filteredCountries = countriesList.filter(country => {
        //     return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        // });
        return (
            <div>
                <div className="content-wrapper">
                        <div className="cont">
                            <div className="sea-container">
                                <form>
                                    <input type="text" name="" placeholder="Search.." className="input"/>
                                    {/*{Jsondata.map(val,key)=>{*/}
                                    {/*    return  <div className='col-2'>*/}
                                    {/*    <Card*/}
                                    {/*    image={val.img}*/}
                                    {/*    alt="joueur1"*/}
                                    {/*    firstname={val.firstname}*/}
                                    {/*    lastname={val.lastname}*/}

                                    {/*    />*/}
                                    {/*    </div>*/}
                                    {/*}}*/}
                                </form>
                            </div>
                         </div>
                    <div className="Box" >
                        <div className='row'>

                            <div className='col-2'>
                                <Card
                                    image="../../dist/img/avatar2.png"
                                    alt="joueur1"
                                    firstname="Mohamed"
                                    lastname="chebbi"

                                />
                            </div>

                            <div className='col-2'>
                                <Card
                                    image="../../dist/img/avatar2.png"
                                    alt="joueur1"
                                    firstname="Mohamed"
                                    lastname="chebbi"

                                />
                            </div>

                            <div className='col-2'>
                                <Card
                                    image="../../dist/img/avatar2.png"
                                    alt="joueur1"
                                    firstname="Mohamed"
                                    lastname="chebbi"

                                />
                            </div>
                            <div className='col-2'>
                                <Card
                                    image="../../dist/img/avatar2.png"
                                    alt="joueur1"
                                    firstname="Mohamed"
                                    lastname="chebbi"

                                />
                            </div>
                            <div className='col-2'>
                                <Card
                                    image="../../dist/img/avatar2.png"
                                    alt="joueur1"
                                    firstname="Mohamed"
                                    lastname="chebbi"

                                />
                            </div>
                            <div className='col-2'>
                                <Card
                                    image="../../dist/img/avatar2.png"
                                    alt="joueur1"
                                    firstname="Mohamed"
                                    lastname="chebbi"

                                />
                            </div>
                            <div className='col-2'>
                                <Card
                                    image="../../dist/img/avatar2.png"
                                    alt="joueur1"
                                    firstname="Mohamed"
                                    lastname="chebbi"

                                />
                            </div>
                            <div className='col-2'>
                                <Card
                                    image="../../dist/img/avatar2.png"
                                    alt="joueur1"
                                    firstname="Mohamed"
                                    lastname="chebbi"

                                />
                            </div>

                        </div>

                    {/*<div className="boxContainer">*/}
                    {/*    /!*<table className="elementsContainer">*!/*/}
                    {/*    /!*    <tr>*!/*/}
                    {/*    /!*        <td>*!/*/}
                    {/*    /!*            <input type="text" placeholder="Search" className="search-title"/>*!/*/}
                    {/*    /!*        </td>*!/*/}
                    {/*    /!*        <td>*!/*/}
                    {/*    /!*            <a href="#" className="material-icon"> search</a>*!/*/}
                    {/*    /!*        </td>*!/*/}
                    {/*    /!*    </tr>*!/*/}
                    {/*    /!*</table>*!/*/}

                    {/*</div>*/}
                </div>
            </div>
            </div>

        )
    }
}
