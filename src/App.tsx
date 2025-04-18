import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540]">
      <Header />
      <main className="flex items-center justify-center w-2/3">
        <NavBar />
      </main>
    </div>
  );
}

export default App;
