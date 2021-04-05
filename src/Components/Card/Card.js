import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './card.css'

export default class Card extends Component{
    render() {
        return (

            // <div className="card" style={{width: '18rem'}}>
            //         <img className="card-img-top" src={this.props.image} alt={this.props.name}/>
            //         <div className="card-body">
            //             <h5 className="fine">{this.props.name}</h5>
            //             <p className="card-text"></p>
            //             <a href="#" className="btn btn-primary">See Profile</a>
            //         </div>
            // </div>

            <div className="card" className="shadow p-0 mb-3 bg-white rounded" style={{width: '10rem', height:'13rem'}}>
                        <div className="our-team">
                            <div className="picture">
                                <img className="img-fluid" src={this.props.image} alt={this.props.name} />
                            </div>
                            <div className="team-content">
                                <h6 className="name">{this.props.firstname} {this.props.lastname}</h6>
                            </div>
                            <div className="social">
                                <a href="#" className="btn"  aria-hidden="true">See Profile </a>

                            </div>
                        </div>
            </div>
        )



    }
}
