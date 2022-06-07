
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import {DISHES} from "../shared/dishes";
import {Component} from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Navigate, Route, Routes} from "react-router-dom";
import {Nav} from "reactstrap";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/menu" element={<Menu dishes={this.state.dishes}/>}/>
                    <Route path="/" element={<Navigate replace to="/home" />}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
