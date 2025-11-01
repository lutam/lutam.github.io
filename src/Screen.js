import Header from "./Header";

export default function Screen({ children }) {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="App-content">{children}</div>
      </main>
    </div>
  );
}
