import { useState } from 'react';
import Pill from './Pill';
import { filterOptions } from '../constants';

export const NavBar = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  return (
    <div className="mt-15 flex h-full w-full items-center justify-between font-sans">
      <span className="text-3xl font-bold text-[hsl(227_75%_14%)] dark:text-white">
        Extensions List
      </span>
      <div className="flex h-full items-center justify-between gap-1">
        {filterOptions.map((filter) => (
          <Pill
            key={filter}
            name={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
