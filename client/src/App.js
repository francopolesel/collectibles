import logo from "./logo.svg";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="flex flex-col items-center">
        <img src={logo} className="w-32 h-32 mb-4" alt="logo" />
        <p className="text-lg mb-4">
          Edit{" "}
          <code className="font-mono bg-gray-200 p-1 rounded">src/App.js</code>{" "}
          and save to reload.
        </p>
        <a
          className="text-blue-500 hover:text-blue-700"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
