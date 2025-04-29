import { useLocation, Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

function ProtectedRoute({ children }) {
    const location = useLocation();
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" replace state={{ from: location }} />;
    }
    else 
    {
      const decoded = jwtDecode(accessToken);
      const userRole = decoded.role
      if(userRole === 'admin' || userRole === 'sale')
        return children
      else 
        <Navigate to='/unauthorized' replace/>
    }
    // If authenticated, render children
    return children;
}

export default ProtectedRoute;
