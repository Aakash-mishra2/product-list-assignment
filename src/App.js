import LoginPage from "./login_page/loginpage";
import Dashboard
 from "./login_page/dashboard";
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
export default function App() {
    const isLoggedIn = useSelector((state) => state.userAccount.isLoggedIn);

    let routes;
    if (isLoggedIn) {
        routes = (
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        )
    }
    else {
        routes = (
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        )
    }
    return (
        <div>
            {routes}
        </div>
    )
}