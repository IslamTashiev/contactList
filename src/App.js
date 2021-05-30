import Contact from "./Contact";
import ContactContextProvider from "./Context";

function App() {
  return (
    <div className="App">
      <ContactContextProvider>
        <Contact />
      </ContactContextProvider>
    </div>
  );
}

export default App;
