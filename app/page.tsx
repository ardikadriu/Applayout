import Heart from "./components/Heart";
import Firstcontainer from "./components/Firstcontainer";
import Phonestypes from "./components/Phonestypes";
import Firstimage from "./components/Photos/Firstimage";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <Firstcontainer />
        <Phonestypes />
      </div>
      <div>
        <Firstimage />
      </div>
    </main>
  );
}
