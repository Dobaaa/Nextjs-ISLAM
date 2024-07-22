import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Nav from "@/components/Nav/Nav";
import Landing from "./HomePage/Landing/Landing";
export default function Home() {
  return (
    <main className="">
      <Nav />
      <Landing />
    </main>
  );
}
