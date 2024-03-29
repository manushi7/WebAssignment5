import * as React from "react";
import {
    Navigate,
    useLocation
} from "react-router-dom";

import { useAuthentication } from '../context/auth/AuthenticationContext';

export default function RequireAuth({ children }) {
    let authState = useAuthentication();
    let location = useLocation();

    if (!authState.user && !authState.loading) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}
