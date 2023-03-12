import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">First</NavLink>
      <NavLink to="/second">Second</NavLink>
      <NavLink to="/third">Third</NavLink>
    </nav>
  );
};
