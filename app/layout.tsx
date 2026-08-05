import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "PalmettoHacks 2026 - Hosted by Kappa Theta Pi",
    description: "PalmettoHacks 2026 is a 24-hour hackathon hosted by Kappa Theta Pi at the University of South Carolina on October 10, 2026. Build, innovate, and compete."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>
        { children }
        </body>
        </html>
    );
}
