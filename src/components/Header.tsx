import Navigation from "./Navigation";
import TypingText from "./TypingText";
import DanielImage from "@/lib/assets/dan.jpeg";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <>
      <header>
        <div>
          <h1>Who Am I?</h1>
          <img
            className="header-photo"
            src={DanielImage}
            alt="Headshot of Daniel Smiling In a white shirt"
            width={175}
            height={175}
          />
          <TypingText text={title} />
        </div>
        <Navigation />
      </header>
    </>
  );
}

export default Header;
