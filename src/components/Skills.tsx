import Tooltip from "./Tooltip";
import Icon, { IconName } from "./Icon";

const ICONS = [
  ["html5", "css3", "js", "ts", "python"],
  ["tailwind", "react", "django"],
  ["mysql", "sqlite"],
  ["redux", "vite", "git", "github", "vscode", "firebase"],
];

const Skills = () => {
  const icons = ICONS.map((row, i) => (
    <div
      key={i}
      className="mt-4 flex flex-wrap items-center justify-center gap-4 md:mt-8"
    >
      {row.map((iconName, i) => (
        <Tooltip key={i} text={iconName}>
          <Icon name={iconName as IconName} size="xl" />
        </Tooltip>
      ))}
    </div>
  ));

  return <div>{icons}</div>;
};

export default Skills;
