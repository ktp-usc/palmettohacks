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
        <a
            id="mlh-trust-badge"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=yellow"
            target="_blank"
            rel="noreferrer"
            style={{ display: "block", maxWidth: 100, minWidth: 60, position: "fixed", right: 50, top: 0, width: "10%", zIndex: 10000 }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-yellow.svg"
                alt="Major League Hacking 2026 Hackathon Season"
                style={{ width: "100%" }}
            />
        </a>
        { children }
        </body>
        </html>
    );
}
