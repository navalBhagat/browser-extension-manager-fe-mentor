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
    <div className="mt-10 grid auto-rows-auto grid-cols-3 gap-4 gap-x-5">
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
