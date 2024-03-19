import Image from "next/image";
import Advice from "./components/advice";

export default function Home() {
  return (
   <div className="flex items-center h-screen bg-darkBlue">
    <Advice/>
   </div>
  );
}
