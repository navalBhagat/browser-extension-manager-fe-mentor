interface PillProps {
  name: string;
  active: boolean;
  onClick: () => void;
}

export const Pill = ({ name, active, onClick }: PillProps) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-4xl px-4 py-4 pt-2 pb-2 font-sans text-lg shadow-sm focus:ring-2 focus:ring-[hsl(3_86%_64%)] focus:ring-offset-1 dark:focus:ring-offset-black ${
        active
          ? 'bg-[hsl(3_71%_56%)] text-white hover:bg-[hsl(3_86%_64%)] dark:text-[hsl(227_75%_14%)] dark:hover:bg-[hsl(3_77%_44%)]'
          : 'border-1 border-[hsl(0_0%_93%)] bg-[rgb(250_251_253)] text-black hover:bg-[rgb(246_250_252)] hover:text-[rgb(94_103_123)] hover:shadow-none dark:border-[hsl(226_11%_37%)] dark:bg-[hsl(225_23%_24%)] dark:text-white dark:hover:border-[hsl(226_11%_37%)] dark:hover:bg-[hsl(226_11%_37%)] dark:hover:text-white'
      } `}
    >
      {name}
    </div>
  );
};

export default Pill;
