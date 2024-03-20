import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-3xl font-semibold text-center">THIS IS HOME SECTION</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;