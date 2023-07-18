import "./Home.css";
import { InputCheck } from "../components/organisms/InputCheck";

//TODO:背景の横幅調整をしたい
//TODO:全てのコンポ―ネントを中心ぞろえに
export const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* 他のコンポーネントや要素をここに追加 */}
        <InputCheck />
      </div>
    </>
  );
};
