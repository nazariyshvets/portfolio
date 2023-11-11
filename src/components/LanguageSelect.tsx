import Select, { SingleValue } from "react-select";
import CountryFlag from "react-country-flag";
import { setLang } from "../redux/langSlice";
import { useAppDispatch, useLang } from "../hooks/hooks";
import Language from "../types/Language";

interface OptionType {
  value: string;
  label: JSX.Element;
}

const options = [
  {
    value: "uk-UA",
    label: <CountryFlag countryCode="UA" svg />,
  },
  {
    value: "en-GB",
    label: <CountryFlag countryCode="GB" svg />,
  },
  {
    value: "de-DE",
    label: <CountryFlag countryCode="DE" svg />,
  },
  {
    value: "fr-FR",
    label: <CountryFlag countryCode="FR" svg />,
  },
  {
    value: "es-ES",
    label: <CountryFlag countryCode="ES" svg />,
  },
  {
    value: "pt-PT",
    label: <CountryFlag countryCode="PT" svg />,
  },
  {
    value: "pl-PL",
    label: <CountryFlag countryCode="PL" svg />,
  },
];

const LanguageSelect = () => {
  const dispatch = useAppDispatch();
  const lang = useLang();

  function handleChange(selectedOption: SingleValue<OptionType>) {
    const selectedValue = selectedOption?.value;

    if (selectedValue) {
      dispatch(setLang(selectedValue as Language));
    }
  }

  const defaultValue = options.find((option) => option.value === lang);

  return (
    <Select
      defaultValue={defaultValue}
      options={options}
      menuPlacement="top"
      isSearchable={false}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#ccc",
          primary50: "#ccc",
          primary75: "#ccc",
          primary: "#211f20",
        },
      })}
      className="text-sm xl:text-base"
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          background: "transparent",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          textAlign: "center",
        }),
      }}
      onChange={handleChange}
    />
  );
};

export default LanguageSelect;
