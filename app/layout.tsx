import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/app/sidebar/Sidebar";
import Searchbar from "@/components/app/searchbar/Searchbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
	title: "Celestial",
	description: "Celestial Compendium - Keep collecting",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${poppins.variable} `}>
				<div className="flex flex-row h-full" >
					<div className="h-dvh">
						<Sidebar />
					</div>
					<div className="flex min-h-screen w-full flex-col gap-y-6 p-4">
						<div>
              <Searchbar />             

							{children}</div>
					</div>
				</div>
			</body>
		</html>
	);
}
