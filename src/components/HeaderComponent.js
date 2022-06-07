import React, {Component} from "react";
import {Navbar, NavbarBrand} from "reactstrap";

class Header extends Component {
    render() {
        {/* <></> - short form of <React.Fragment>*/}
        return (
            <>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5 jumbotron">
                        <h1 className="display-5 fw-bold">Ristorante Con Fusion</h1>
                        <p className="col-md-8 fs-4">We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;