import { NavLink } from 'react-router-dom';

function RouteLink({ className, to, children }) {
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
