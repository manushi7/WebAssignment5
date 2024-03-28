import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

import AuthStatus from './AuthStatus';

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
