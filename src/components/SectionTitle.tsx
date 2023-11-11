import { useTheme } from "../hooks/hooks";

interface SectionTitleProps {
  value: string;
}

const SectionTitle = ({ value }: SectionTitleProps) => {
  const theme = useTheme();

  return (
    <div className="flex items-center">
      <div
        className={`h-0.5 flex-1 ${
          theme === "light" ? "bg-black" : "bg-white"
        }`}
      />
      <h1
        className={`truncate border-2 px-4 py-1 text-2xl first-letter:capitalize md:px-6 md:py-2 md:text-3xl xl:text-4xl ${
          theme === "light"
            ? "border-black text-black"
            : "border-white text-white"
        }`}
      >
        {value}
      </h1>
      <div
        className={`h-0.5 flex-1 ${
          theme === "light" ? "bg-black" : "bg-white"
        }`}
      />
    </div>
  );
};

export default SectionTitle;
