import logo from './logo.svg';
import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import Menu from "./components/MenuComponent";
import {DISHES} from "./shared/dishes";
import {useState} from "react";

function App() {
    const [data, setData] = useState(DISHES)
    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={data} />
        </div>
    );
}

export default App;
