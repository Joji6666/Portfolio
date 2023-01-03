import Footer from "./footer";
import Header from "./header";

export default function LayOut({ children }) {
  return (
    <div className="bg-darkmode">
      <Header />

      <div>{children}</div>
      <Footer />
    </div>
  );
}
