interface InputErrorProps {
  message: string;
}

const InputError = ({ message }: InputErrorProps) => (
  <p className="text-xs text-grey first-letter:capitalize md:text-sm xl:text-base">
    {message}
  </p>
);

export default InputError;
