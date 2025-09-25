"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

/**
 * ThemeProvider encapsula o provider do next-themes,
 * permitindo alternar entre temas "light", "dark" e "system".
 *
 * Uso no layout.tsx:
 * 
 * <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *   {children}
 * </ThemeProvider>
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
