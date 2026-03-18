import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "PalmettoHacks - Hosted by Kappa Theta Pi",
    description: "PalmettoHacks is a premier hackathon hosted by Kappa Theta Pi in partnership with Microsoft and Capgemini. Build, innovate, and compete."
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
