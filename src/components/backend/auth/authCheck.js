import { useSelector } from "react-redux";


export const useIsAuthenticated = () => {
    const isLoggedInRedux = useSelector((state) => state.user.isLoggedIn);
    const authToken = localStorage.getItem("token");
    const isLoggedInLocalStorage = !!authToken;

    return isLoggedInRedux || isLoggedInLocalStorage;
};