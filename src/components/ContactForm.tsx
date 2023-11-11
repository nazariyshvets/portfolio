import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import { useTheme, useLang } from "../hooks/hooks";
import type ContactFormValues from "../types/ContactFormValues";
import { ContactFormTr } from "../translations/translations";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const theme = useTheme();
  const lang = useLang();
  const alert = useAlert();

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    if (isLoading) return;

    setIsLoading(true);

    emailjs
      .send(
        "service_s6ftfaq",
        "template_5ptrpwv",
        { ...data },
        "e3ZLcvX9uz6GlKKFM",
      )
      .then(
        (result) => {
          formRef.current?.reset();
          alert.success(ContactFormTr.emailSendingSuccess[lang]);
          console.log(result.text);
        },
        (error) => {
          alert.error(ContactFormTr.emailSendingError[lang]);
          console.log(error.text);
        },
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      ref={formRef}
      autoComplete="off"
      className={`mx-auto flex w-full flex-col items-center gap-y-6 px-4 py-8 caret-red shadow-xl md:w-2/3 md:px-8 ${
        theme === "light" ? "shadow-black-250" : "shadow-white-250"
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name="name"
        register={register}
        errors={errors["name"]}
        placeholder={ContactFormTr.name[lang]}
        disabled={isLoading}
        required
      />
      <Input
        name="email"
        register={register}
        type="email"
        errors={errors["email"]}
        placeholder={ContactFormTr.email[lang]}
        disabled={isLoading}
        required
      />
      <Input
        name="subject"
        register={register}
        errors={errors["subject"]}
        placeholder={ContactFormTr.subject[lang]}
        disabled={isLoading}
        required
      />
      <Textarea
        name="message"
        register={register}
        errors={errors["message"]}
        placeholder={ContactFormTr.message[lang]}
        disabled={isLoading}
        required
      />
      <Button type="submit" size="md" disabled={isLoading}>
        {ContactFormTr.send[lang]}
      </Button>
    </form>
  );
};

export default ContactForm;
