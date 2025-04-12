import React from "react";
import Header from "./components/Header";
import MainPage from "./components/Mainpage";
import StoreContextProvider from "./context/Store-context";

function App() {
	return (
		<>
			<StoreContextProvider>
				<section className="w-screen h-screen font-sans divide-y-2 divide-[#403f4e] overflow-x-hidden">
					<Header />
					<MainPage />
				</section>
			</StoreContextProvider>
		</>
	);
}

export default App;
