import Typed from "react-typed";

type TypedType = Typed & {
  cursor: {
    remove: () => void;
  };
};

export default TypedType;
