import { RefObject, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTheme = () => useAppSelector((state) => state.theme);
export const useLang = () => useAppSelector((state) => state.lang);

type ClickOutsideCallback = (event: MouseEvent) => void;

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: ClickOutsideCallback,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export const useChangePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
