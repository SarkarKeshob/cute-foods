import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Common-components/Header/Header";

const Index = () => {
    const navigation=useNavigation();
    return (
        <div>
            <Header></Header>
            {
                navigation.state!=='idle'?<div className="text-center mt-32"> <span className="loading loading-spinner loading-lg"></span> </div>: <Outlet></Outlet>
            }
            
        </div>
    );
};

export default Index;