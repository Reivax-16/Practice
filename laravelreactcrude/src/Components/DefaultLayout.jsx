import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextprovider";

export default function DefaultLayout() {
    const {user, token} = useStateContext();
    if (!token) {
        return <Navigate to="/login" />
    }
    return (
        <div id='default-layout'>
            <div className="content">
                <header>
                        <div>
                            Header
                        </div> 
                        <div>
                            {user.name}
                        </div> 
                </header>.
            </div>
        
                <Outlet />
        </div>
        
    );
}
