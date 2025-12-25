import Header from "./components/layout/Header";
import Wrapper from "./components/layout/Wrapper";

function App() {
  return (
    <Wrapper>
      <Header className="mt-4 xs:mt-8 mb-8 xs:mb-10 md:mb-16" />
      <main className="grid gap-x-4">
        <h1 className="text-3xl">Typing Speed Test</h1>
      </main>
    </Wrapper>
  );
}

export default App;
