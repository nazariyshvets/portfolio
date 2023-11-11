import { ReactNode } from "react";

interface MainProps {
  children?: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="mx-auto flex w-2/3 flex-col gap-y-20 xl:w-1/2">
      {children}
    </main>
  );
};

export default Main;
