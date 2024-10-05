"use client";

import { ThemeProvider } from "next-themes";
import { CourseProvider } from "@/context/CourseContext"; // Make sure the CourseContext is imported

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <CourseProvider>
        {children}
      </CourseProvider>
    </ThemeProvider>
  );
}
 