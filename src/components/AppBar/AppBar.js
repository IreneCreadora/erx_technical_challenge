import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
  return (
    <header className="relative flex flex-wrap items-center justify-between px-2 py-2 dark:bg-slate-800 mb-3 shadow-md">
      <nav className={`lg:flex flex-grow items-center`}>
        <Navigation />
      </nav>
    </header>
  );
};
