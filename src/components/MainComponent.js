
import Menu from "./MenuComponent";
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from "../shared/promotions";
import {Component} from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Navigate, Route, Routes} from "react-router-dom";
import Contact from "./ContactComponent";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }

    render() {
        const featuredOne = this.state.dishes.filter((dish) => dish.featured)[0];
        const featuredPromotion = this.state.promotions.filter((promo) => promo.featured)[0];
        const featuredLeader = this.state.leaders.filter((lead) => lead.featured)[0];

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={
                        <Home dish={featuredOne}
                              promotion={featuredPromotion}
                              leader={featuredLeader}/>
                    }/>
                    <Route path="/menu" element={<Menu dishes={this.state.dishes}/>}/>
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/" element={<Navigate replace to="/home" />}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
