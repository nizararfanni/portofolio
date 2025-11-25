"use client";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-4 px-3 py-1 rounded  text-sm font-bold md:text-lg cursor-pointer"
    >
      {theme === "dark" ? <MdDarkMode /> : <CiLight />}
    </button>
  );
}
