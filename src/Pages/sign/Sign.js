import React, {Component} from 'react'
import './sign.css'
export default class Sign extends Component {
    render() {
        return (
            <div className="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src="../../dist/img/logo.png" alt="Admin" className="rounded-circle" width={150}/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required" />
                    </div>
                    <input type="submit" className="btn btn-primary btn-block btn-lg" Value="Login" />
                </form>
            </div>
        )
    }
}
