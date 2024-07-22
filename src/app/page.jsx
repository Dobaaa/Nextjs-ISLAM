import Nav from "@/components/Nav/Nav";
import Landing from "./HomePage/Landing/Landing";
import Category from "./HomePage/Category/Category";
import Advace from "./HomePage/Advace/Advace";
import Info from "./HomePage/Info/Info";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Landing />
      <Category />
      <Advace />
      <Info />
    </main>
  );
}
