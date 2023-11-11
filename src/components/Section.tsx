import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  id: string;
  title: string;
  children?: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id}>
      <SectionTitle value={title} />

      <div className="mt-8">{children}</div>
    </section>
  );
};

export default Section;
