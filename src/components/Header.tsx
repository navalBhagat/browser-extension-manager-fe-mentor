import { useState, useEffect } from 'react';

export const Header = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className="flex w-2/3 items-center justify-between rounded-[1rem] border-1 border-[hsl(0_0%_93%)] bg-[hsl(200_60%_99%)] p-3 shadow-md dark:border-none dark:bg-[hsl(226_25%_17%)]">
      <img
        src={
          theme === 'dark'
            ? './assets/images/logo-white.svg'
            : './assets/images/logo.svg'
        }
        alt="Logo"
        className="filter dark:text-white"
      />
      <div
        onClick={toggleTheme}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[10px] bg-[hsl(0_0%_93%)] hover:bg-[hsl(0_0%_78%)] focus:ring-2 focus:ring-[hsl(3_86%_64%)] focus:ring-offset-1 dark:focus:ring-offset-transparent dark:bg-[hsl(225_23%_24%)] dark:hover:bg-[hsl(226_11%_37%)]"
      >
        <img
          alt="Toggle dark mode"
          src={
            theme === 'dark'
              ? './assets/images/icon-sun.svg'
              : './assets/images/icon-moon.svg'
          }
        />
      </div>
    </header>
  );
};

export default Header;
