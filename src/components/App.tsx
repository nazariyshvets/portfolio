import Main from "./Main";
import Sidebar from "./Sidebar";
import Section from "./Section";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { useTheme, useLang } from "../hooks/hooks";
import { SidebarTr } from "../translations/translations";

const App = () => {
  const theme = useTheme();
  const lang = useLang();

  return (
    <div
      className={`selection:bg-grey-400 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <Sidebar />
      <Main>
        <About />
        <Section id="skills" title={SidebarTr.skills[lang]}>
          <Skills />
        </Section>
        <Section id="projects" title={SidebarTr.projects[lang]}>
          <Projects />
        </Section>
        <Section id="contact" title={SidebarTr.contact[lang]}>
          <ContactForm />
        </Section>
        <Footer />
      </Main>
    </div>
  );
};

export default App;
