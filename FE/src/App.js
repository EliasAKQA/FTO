import './app.scss';
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading/LoadingScreen";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let myStorage = window.sessionStorage;
        if (myStorage.getItem("loading") !== "false") {
            setTimeout(() => {
                setLoading(false);
                myStorage.setItem("loading", "false");
            }, 3000);
        } else {
            setLoading(false);
        }
        return () => {
            myStorage.removeItem("loading");
        }
    }, []);

    if (loading) return <LoadingScreen />
    return (
        <div className={"bg--animated main__container--fullwidth"}>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
