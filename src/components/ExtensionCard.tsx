import { Extension } from '../lib/types';
import { Switch } from '@/components/ui/switch';

export const ExtensionCard = ({
  extension,
  switchActive,
  removeExtension,
}: {
  extension: Extension;
  switchActive: (name: string, isActive: boolean) => void;
  removeExtension: (name: string) => void;
}) => {
  return (
    <div className="flex h-50 w-full flex-col items-start justify-between rounded-2xl border-1 border-[hsl(0_0%_93%)] bg-[hsl(200_60%_99%)] p-4 font-sans shadow-md dark:border-gray-500 dark:bg-[hsl(226_25%_17%)]">
      <div className="flex flex-row items-start justify-between gap-4">
        <img src={extension.logo} alt={extension.name} className="h-16 w-16" />
        <div className="flex flex-col items-start justify-end gap-1">
          <span className="text-xl font-bold text-[hsl(227_75%_14%)] dark:text-white">
            {extension.name}
          </span>
          <span className="text-md leading-6 text-gray-500 dark:text-gray-400">
            {extension.description}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <button
          className="text-md h-9 w-22 cursor-pointer rounded-3xl border-1 border-gray-500 font-sans font-medium text-[hsl(227_75%_14%)] hover:border-[hsl(3_71%_56%)] hover:bg-[hsl(3_71%_56%)] hover:text-white focus:border-none focus:bg-gray-100 focus:ring-2 focus:ring-[hsl(3_86%_64%)] focus:ring-offset-2 dark:text-white dark:hover:border-[hsl(3_86%_64%)] dark:hover:bg-[hsl(3_86%_64%)] dark:hover:text-[hsl(227_75%_14%)] dark:focus:bg-[hsl(226_11%_37%)] dark:focus:ring-offset-[hsl(226_25%_17%)]"
          onClick={() => removeExtension(extension.name)}
        >
          Remove
        </button>
        <Switch
          checked={extension.isActive}
          onClick={(e) => e.currentTarget.blur()}
          onCheckedChange={(checked) => switchActive(extension.name, checked)}
          className="cursor-pointer focus:ring-2 focus:ring-[hsl(3_86%_64%)] focus:ring-offset-2 data-[state=checked]:bg-[hsl(3_71%_56%)] hover:data-[state=checked]:bg-[hsl(3_86%_64%)] dark:focus:ring-offset-[hsl(226_25%_17%)] dark:hover:data-[state=checked]:bg-[hsl(3_77%_44%)] dark:data-[state=unchecked]:bg-[hsl(226_11%_37%)]"
        />
      </div>
    </div>
  );
};

export default ExtensionCard;
