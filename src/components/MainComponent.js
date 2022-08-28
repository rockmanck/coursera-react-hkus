import Menu from "./MenuComponent";
import {Component} from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import {connect} from "react-redux";
import {addComment, fetchDishes} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())}
});

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        const featuredOne = this.props.dishes.dishes.filter((dish) => dish.featured)[0];
        const featuredPromotion = this.props.promotions.filter((promo) => promo.featured)[0];
        const featuredLeader = this.props.leaders.filter((lead) => lead.featured)[0];

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={
                        <Home dish={featuredOne}
                              dishesLoading={this.props.dishes.isLoading}
                              dishesErrMess={this.props.dishes.errMess}
                              promotion={featuredPromotion}
                              leader={featuredLeader}/>
                    }/>
                    <Route path="/menu" element={<Menu dishes={this.props.dishes}/>}/>
                    <Route
                        path="/menu/:dishId"
                        element={<DishDetail
                            dishes={this.props.dishes}
                            isLoading={this.props.dishes.isLoading}
                            errMess={this.props.dishes.errMess}
                            comments={this.props.comments}
                            addComment={this.props.addComment}
                        />}
                    />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/aboutus" element={<About leaders={this.props.leaders}/>} />
                    <Route path="/" element={<Navigate replace to="/home" />}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();
        return <Component history={history} {...props} />;
    };
    return Wrapper;
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
