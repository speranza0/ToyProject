import React from "react";
import { NavLink } from "react-router-dom";

export interface RouteLinkProps {
  className: string;
  to: string;
  children: React.ReactNode;
}

function RouteLink({ className, to, children }: RouteLinkProps) {
  return (
    <NavLink
      className={({ isActive }) => {
        if (isActive) {
          return `${className} active`;
        }
        return className;
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default RouteLink;
