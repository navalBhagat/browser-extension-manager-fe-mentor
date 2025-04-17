function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[hsl(217_61%_90%)]">
      <header className="flex w-2/3 items-center justify-between rounded-[1rem] border-1 border-[hsl(0_0_78%)] bg-[hsl(200_60%_99%)] p-3 shadow-md">
        <img src="./assets/images/logo.svg" />
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[10px] bg-[hsl(0_0%_93%)] hover:bg-[hsl(0_0%_78%)]">
          <img className="dark-mode-icon" src="./assets/images/icon-moon.svg" />
        </div>
      </header>
      <main className="h-1/3 w-1/3"></main>
    </div>
  );
}

export default App;
