import Pill from './Pill';
import { filterOptions } from '../lib/constants';

export const NavBar = ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}) => {
  return (
    <div className="mt-15 flex h-full w-full items-center justify-between ">
      <span className="text-4xl font-bold text-[hsl(227_75%_14%)] dark:text-white font-sans">
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
