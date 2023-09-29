import { Body, Footer, Header } from "@features/Home/components";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
