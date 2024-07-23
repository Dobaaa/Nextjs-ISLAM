import Nav from "@/components/Nav/Nav";
import Landing from "./HomePage/Landing/Landing";
import Category from "./HomePage/Category/Category";
import Advace from "./HomePage/Advace/Advace";
import Info from "./HomePage/Info/Info";
import Subscribe from "./HomePage/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Landing />
      <Category />
      <Advace />
      <Info />
      <Subscribe />
      <Footer />
    </main>
  );
}
