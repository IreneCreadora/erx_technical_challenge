import { NavLink } from 'react-router-dom';

const setLinkClassName = ({ isActive }) => {
  const baseLinkClass = 'p-2 text-base';
  return isActive
    ? `${baseLinkClass} text-amber-300`
    : `${baseLinkClass} text-white hover:opacity-75`;
};

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={setLinkClassName}>
        First
      </NavLink>
      <NavLink to="/second" className={setLinkClassName}>
        Second
      </NavLink>
      <NavLink to="/third" className={setLinkClassName}>
        Third
      </NavLink>
    </nav>
  );
};
