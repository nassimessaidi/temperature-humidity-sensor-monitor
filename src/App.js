import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="overflow-hidden bg-gray-50 flex h-screen">
        {/**center vertical & horizontal */}
        <div className="m-auto">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
