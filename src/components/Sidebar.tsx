import { useState, useRef } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Tooltip from "./Tooltip";
import Icon, { IconName } from "./Icon";
import LanguageSelect from "./LanguageSelect";
import { toggleTheme } from "../redux/themeSlice";
import {
  useAppDispatch,
  useTheme,
  useLang,
  useClickOutside,
} from "../hooks/hooks";
import scrollToElement from "../utils/scrollToElement";
import { MD_BREAKPOINT } from "../constants/constants";
import { SidebarTr } from "../translations/translations";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const windowWidth = useWindowWidth();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const lang = useLang();
  const sidebarRef = useRef<HTMLElement>(null);

  useClickOutside(sidebarRef, () => setIsSidebarVisible(false));

  const SECTIONS = [
    { id: "about", title: SidebarTr.about[lang], iconName: "user" },
    { id: "skills", title: SidebarTr.skills[lang], iconName: "code" },
    { id: "projects", title: SidebarTr.projects[lang], iconName: "briefcase" },
    { id: "contact", title: SidebarTr.contact[lang], iconName: "chat" },
  ];

  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  const toggleMode = () => {
    dispatch(toggleTheme());
  };

  const isMobile = windowWidth < MD_BREAKPOINT;
  const sectionIcons = SECTIONS.map(({ id, title, iconName }) => (
    <Tooltip key={id} text={title}>
      <Icon
        name={iconName as IconName}
        size="lg"
        className="cursor-pointer"
        onClick={() => scrollToElement(id)}
      />
    </Tooltip>
  ));

  const styles =
    isSidebarVisible && isMobile
      ? `outline outline-2 outline-black ${
          theme === "light"
            ? "bg-white outline-black"
            : "bg-black outline-white"
        }`
      : "";

  return (
    <aside
      ref={sidebarRef}
      className={`fixed bottom-0 left-0 top-0 z-10 flex w-20 flex-col items-center justify-between py-12 xl:w-32 ${styles}`}
    >
      {isMobile ? (
        <Tooltip text={SidebarTr.menu[lang]}>
          <Icon
            name="grid"
            size="md"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </Tooltip>
      ) : (
        <span></span>
      )}

      {(isSidebarVisible || !isMobile) && (
        <>
          <div className="flex flex-col gap-6">{sectionIcons}</div>

          <div className="flex flex-col items-center gap-6">
            <LanguageSelect />

            <div onClick={toggleMode}>
              {theme === "dark" ? (
                <Icon name="sun" size="md" className="cursor-pointer" />
              ) : (
                <Icon name="moon" size="md" className="cursor-pointer" />
              )}
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
