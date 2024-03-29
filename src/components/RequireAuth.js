
<<<<<<< HEAD:src/components/DashboardAuth.js
=======
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
>>>>>>> 590148f52e273e0e0e17770bc279763c60e7543b:src/components/RequireAuth.js
