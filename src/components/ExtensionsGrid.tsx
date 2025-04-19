import { Extension } from '../lib/types';
import ExtensionCard from './ExtensionCard';

export const ExtensionsGrid = ({
  extensions,
  switchActive,
  removeExtension,
}: {
  extensions: Extension[];
  switchActive: (name: string, isActive: boolean) => void;
  removeExtension: (name: string) => void;
}) => {
  return (
    <div className="mt-10 grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
      {extensions.map((extension) => (
        <ExtensionCard
          key={extension.name}
          extension={extension}
          switchActive={switchActive}
          removeExtension={removeExtension}
        />
      ))}
    </div>
  );
};

export default ExtensionsGrid;
