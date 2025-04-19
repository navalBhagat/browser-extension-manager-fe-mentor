import { useEffect, useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Extension } from './lib/types';
import ExtensionsGrid from './components/ExtensionsGrid';

function App() {
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [filteredExtensions, setFilteredExtensions] = useState<Extension[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const switchActive = (name: string, isActive: boolean) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.name === name
          ? { ...extension, isActive: isActive }
          : extension
      )
    );
  };

  const removeExtension = (name: string) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.name !== name)
    );
  };

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data: Extension[]) => {
        setExtensions(data);
        setFilteredExtensions(data);
      })
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  useEffect(() => {
    const filteredExtensions = extensions.filter((extension) => {
      if (activeFilter === 'All') return true;
      if (activeFilter === 'Active') return extension.isActive;
      if (activeFilter === 'Inactive') return !extension.isActive;
      return false;
    });
    setFilteredExtensions(filteredExtensions);
  }, [extensions, activeFilter]);

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Header />
      <main className="flex w-19/20 flex-col items-center justify-center lg:w-2/3">
        <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <ExtensionsGrid
          extensions={filteredExtensions}
          switchActive={switchActive}
          removeExtension={removeExtension}
        />
      </main>
    </div>
  );
}

export default App;
