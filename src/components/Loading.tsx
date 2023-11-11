import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black-700">
      <ReactLoading type="bars" />
    </div>
  );
};

export default Loading;
