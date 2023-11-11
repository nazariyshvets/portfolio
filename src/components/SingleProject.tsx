import { ReactNode } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import Loading from "./Loading";
import { useTheme } from "../hooks/hooks";

interface SingleProjectProps {
  video: string;
  link: string;
  desc: ReactNode;
  isVideoOnLeft?: boolean;
}

const SingleProject = ({
  video,
  link,
  desc,
  isVideoOnLeft = true,
}: SingleProjectProps) => {
  const theme = useTheme();

  return (
    <article
      className={`flex flex-col gap-4 ${
        isVideoOnLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <a href={link} target="_blank" className="flex-1 cursor-pointer">
        <HoverVideoPlayer
          videoSrc={video}
          loadingOverlay={<Loading />}
          className={`hover:shadow-red-250 w-full shadow-xl transition-shadow ${
            theme === "light" ? "shadow-black-250" : "shadow-white-250"
          }`}
        />
      </a>
      <div className="relative flex-1 overflow-auto">
        <div
          className={`max-h-40 text-base md:absolute md:text-lg xl:text-xl ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          {desc}
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
