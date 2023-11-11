import { Path, UseFormRegister, FieldError } from "react-hook-form";
import InputError from "./InputError";
import { useTheme, useLang } from "../hooks/hooks";
import { EMAIL_PATTERN, MAX_EMAIL_LENGTH } from "../constants/constants";
import type ContactFormValues from "../types/ContactFormValues";
import { ContactFormTr } from "../translations/translations";

interface InputProps {
  name: Path<ContactFormValues>;
  register: UseFormRegister<ContactFormValues>;
  type?: "text" | "email";
  errors?: FieldError;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input = ({
  name,
  register,
  type = "text",
  errors,
  placeholder = "",
  disabled = false,
  required = false,
}: InputProps) => {
  const theme = useTheme();
  const lang = useLang();

  return (
    <div className="w-full">
      <input
        {...register(name, {
          required: required,
          maxLength: MAX_EMAIL_LENGTH,
          pattern: type === "email" ? EMAIL_PATTERN : undefined,
        })}
        maxLength={MAX_EMAIL_LENGTH}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full text-ellipsis border-b-2 bg-transparent px-2 py-1 text-base outline-none placeholder:text-grey focus:border-red md:px-4 md:text-lg xl:text-xl ${
          theme === "light"
            ? "border-black text-black"
            : "border-white text-white"
        } ${errors ? "border-red" : ""}`}
      />
      {errors?.type === "required" && (
        <InputError message={ContactFormTr.required[lang]} />
      )}
      {errors?.type === "pattern" && type === "email" && (
        <InputError message={ContactFormTr.emailMustBeValid[lang]} />
      )}
    </div>
  );
};

export default Input;
