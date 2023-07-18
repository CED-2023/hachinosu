import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComponentsList } from "./pages/ComponentsList";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*ホーム画面 */}
          <Route path="/" element={<Home />} />
          {/* コンポーネント確認用ページ */}
          <Route path="/c" element={<ComponentsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
