export const Pill = ({ name, active }: { name: string; active: boolean }) => {
  return (
    <div
      className={`cursor-pointer rounded-4xl px-4 py-4 pt-2 pb-2 shadow-sm ${active ? 'hover:bg-[hsl(3_86%_64%)]' : 'hover:bg-[rgb(246_250_252)] hover:text-[rgb(94_103_123)] hover:shadow-none'} ${active ? 'bg-[hsl(3_71%_56%)]' : 'bg-[rgb(250_251_253)]'} ${active ? 'text-white' : 'text-black'}`}
    >
      {name}
    </div>
  );
};

export default Pill;
