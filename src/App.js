import "./App.scss";
import "./assets/style/index.scss";
import Header from "./pages/header/header";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import "../src/assets/icon/style.css";
import Footer from "./pages/footer";
import Home from "./pages/home";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main_content">
                <Routes>
                    <Route path={"*"} element={<Home />} />
                    {routes.map((rout) => (
                        <Route key={rout.id} path={rout.path} element={rout.component} />
                    ))}
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
