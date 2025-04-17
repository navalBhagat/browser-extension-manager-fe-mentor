import Pill from './Pill';

export const NavBar = () => {
  return (
    <div className="flex h-full w-full items-center justify-between mt-15 font-sans">
      <span className="text-[hsl(227_75%_14%)] text-3xl font-bold">Extensions List</span>
      <div className="flex h-full items-center justify-between gap-1">
        <Pill name={'All'} active={true} />
        <Pill name={'Active'} active={false} />
        <Pill name={'Inactive'} active={false} />
      </div>
    </div>
  );
};

export default NavBar;
