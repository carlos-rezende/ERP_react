import Sidebar from "./sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function RootLayout({ children }) {
  return (
    <div className="flex">
      <Header />
      <Sidebar />
      <Footer />
      <main className="max-w-5xl flex-1 mx-auto py-16">{children}</main>
    </div>
  );
}

export default RootLayout;
