import { useState, ReactNode } from "react";

interface TooltipProps {
  text: string;
  pos?: "top" | "left" | "right" | "bottom";
  className?: string;
  children?: ReactNode;
}

const POSITIONS = {
  top: "bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2",
  left: "right-[calc(100%+10px)] top-1/2 -translate-y-1/2",
  right: "left-[calc(100%+10px)] top-1/2 -translate-y-1/2",
  bottom: "top-[calc(100%+10px)] left-1/2 -translate-x-1/2",
};

const Tooltip = ({
  text,
  pos = "top",
  className = "",
  children,
}: TooltipProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>

      {isTooltipVisible && (
        <div
          className={`absolute z-10 rounded-md bg-grey px-4 py-1 text-center text-sm text-white xl:text-base ${POSITIONS[pos]}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
