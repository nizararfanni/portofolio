"use client"
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type ThemeProviderProps = React.ComponentProps<typeof NextThemeProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div>{children}</div>;
  }

  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
