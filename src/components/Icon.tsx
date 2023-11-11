import {
  BiSolidGrid,
  BiUser,
  BiCodeAlt,
  BiBriefcase,
  BiChat,
  BiSun,
  BiMoon,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoDjango,
  BiLogoRedux,
  BiLogoGit,
  BiLogoGithub,
  BiLogoVisualStudio,
  BiLogoFirebase,
  BiLogoTelegram,
  BiLogoInstagram,
  BiLogoFacebook,
} from "react-icons/bi";
import { SiMysql, SiSqlite, SiVite } from "react-icons/si";
import { useTheme } from "../hooks/hooks";

export type IconName =
  | "grid"
  | "user"
  | "code"
  | "briefcase"
  | "chat"
  | "sun"
  | "moon"
  | "html5"
  | "css3"
  | "js"
  | "ts"
  | "python"
  | "tailwind"
  | "react"
  | "django"
  | "mysql"
  | "sqlite"
  | "redux"
  | "vite"
  | "git"
  | "github"
  | "vscode"
  | "firebase"
  | "telegram"
  | "instagram"
  | "facebook";

interface IconProps {
  name: IconName;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

const ICONS = {
  grid: <BiSolidGrid />,
  user: <BiUser />,
  code: <BiCodeAlt />,
  briefcase: <BiBriefcase />,
  chat: <BiChat />,
  sun: <BiSun />,
  moon: <BiMoon />,
  html5: <BiLogoHtml5 />,
  css3: <BiLogoCss3 />,
  js: <BiLogoJavascript />,
  ts: <BiLogoTypescript />,
  python: <BiLogoPython />,
  tailwind: <BiLogoTailwindCss />,
  react: <BiLogoReact />,
  django: <BiLogoDjango />,
  mysql: <SiMysql />,
  sqlite: <SiSqlite />,
  redux: <BiLogoRedux />,
  vite: <SiVite />,
  git: <BiLogoGit />,
  github: <BiLogoGithub />,
  vscode: <BiLogoVisualStudio />,
  firebase: <BiLogoFirebase />,
  telegram: <BiLogoTelegram />,
  instagram: <BiLogoInstagram />,
  facebook: <BiLogoFacebook />,
};

const SIZES = {
  sm: "text-sm xl:text-base",
  md: "text-xl xl:text-2xl",
  lg: "text-2xl xl:text-4xl",
  xl: "text-4xl xl:text-6xl",
};

const Icon = ({
  name,
  size = "sm",
  className = "",
  onClick = () => {},
}: IconProps) => {
  const theme = useTheme();

  return (
    <div
      className={`transition-colors hover:text-red ${SIZES[size]} ${
        theme === "light" ? "text-black" : "text-white"
      } ${className}`}
      onClick={onClick}
    >
      {ICONS[name]}
    </div>
  );
};

export default Icon;
