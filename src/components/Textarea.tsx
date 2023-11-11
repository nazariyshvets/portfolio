import { Path, UseFormRegister, FieldError } from "react-hook-form";
import InputError from "./InputError";
import { useTheme, useLang } from "../hooks/hooks";
import { MAX_TEXTAREA_LENGTH } from "../constants/constants";
import type ContactFormValues from "../types/ContactFormValues";
import { ContactFormTr } from "../translations/translations";

interface TextareaProps {
  name: Path<ContactFormValues>;
  register: UseFormRegister<ContactFormValues>;
  errors?: FieldError;
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

const Textarea = ({
  name,
  register,
  errors,
  rows = 5,
  placeholder = "",
  disabled = false,
  required = false,
}: TextareaProps) => {
  const theme = useTheme();
  const lang = useLang();

  return (
    <div className="w-full">
      <textarea
        {...register(name, {
          required: required,
          maxLength: MAX_TEXTAREA_LENGTH,
        })}
        rows={rows}
        maxLength={MAX_TEXTAREA_LENGTH}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full resize-none text-ellipsis border-b-2 bg-transparent px-2 py-1 text-base outline-none placeholder:text-grey focus:border-red md:px-4 md:text-lg xl:text-xl ${
          theme === "light"
            ? "border-black text-black"
            : "border-white text-white"
        } ${errors ? "border-red" : ""}`}
      />
      {errors?.type === "required" && (
        <InputError message={ContactFormTr.required[lang]} />
      )}
    </div>
  );
};

export default Textarea;
