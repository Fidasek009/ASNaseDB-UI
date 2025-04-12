"use client";

import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "@/themes/MainTheme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./layout.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>ASNase Database</title>
            </Head>
            <body>
                <ThemeProvider theme={theme}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
