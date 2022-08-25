import {
  Footer,
  Loader,
  Navbar,
  Services,
  Transactions,
  Welcome,
  Welcome1,
  Welcome2,
  Welcome3,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Welcome1 />
        <Welcome2 />
        <Welcome3 />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
