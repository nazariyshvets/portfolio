import Typed from "react-typed";
import Blob from "./Blob";
import Button from "./Button";
import { useTheme, useLang, useChangePageTitle } from "../hooks/hooks";
import scrollToElement from "../utils/scrollToElement";
import { AboutTr } from "../translations/translations";
import TypedType from "../types/TypedType";

const About = () => {
  const theme = useTheme();
  const lang = useLang();

  useChangePageTitle(AboutTr.fullName[lang]);

  const cv = lang === "uk-UA" ? "Резюме.pdf" : "CV.pdf";

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <Blob />

      <div className="text-center">
        <div
          className={`animate-move-bg bg-gradient-to-r from-red ${
            theme === "light" ? "via-black" : "via-white"
          } to-red bg-[length:400%_100%] bg-clip-text bg-left-top text-4xl font-bold text-transparent md:text-5xl xl:text-6xl`}
        >
          <Typed
            key={lang}
            strings={[AboutTr.greeting[lang]]}
            typeSpeed={100}
            onComplete={(self: TypedType) => self.cursor.remove()}
          />
        </div>
        <p
          className={`mt-6 text-lg font-medium leading-6 md:text-xl xl:text-2xl ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          {AboutTr.profile[lang]}
        </p>
      </div>

      <div className="mt-10 flex max-w-full flex-col gap-4 md:flex-row">
        <Button size="lg" onClick={() => scrollToElement("contact")}>
          {AboutTr.letsTalk[lang]}
        </Button>
        <a href={cv} download={cv}>
          <Button size="lg">{AboutTr.downloadCV[lang]}</Button>
        </a>
      </div>
    </section>
  );
};

export default About;
