import { positions, transitions } from "react-alert";

const MD_BREAKPOINT = 768;
const XL_BREAKPOINT = 1280;
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const MAX_EMAIL_LENGTH = 320;
const MAX_TEXTAREA_LENGTH = 1000;
const LANGUAGES = [
  "uk-UA",
  "en-GB",
  "de-DE",
  "fr-FR",
  "es-ES",
  "pt-PT",
  "pl-PL",
] as const;
const ALERT_OPTIONS = {
  offset: "10px",
  position: positions.TOP_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};

export {
  MD_BREAKPOINT,
  XL_BREAKPOINT,
  EMAIL_PATTERN,
  MAX_EMAIL_LENGTH,
  MAX_TEXTAREA_LENGTH,
  LANGUAGES,
  ALERT_OPTIONS,
};
