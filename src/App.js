import "./App.css";
import Button from "./UI/Button";
import { buttonData } from "./utility/buttonData";
const outerContainerCss =
  "h-screen w-screen overflow-x-hidden flex flex-col items-center justify-center";

function App() {
  return (
    <div className={outerContainerCss}>
      <div className="w-[30%]">
        <input
          type="text"
          className="w-full h-12 m-0 px-2 text-2xl font-bold bg-slate-300 outline-none"
        />
        <div className="w-full flex flex-wrap m-0">
          {buttonData.map(({ id, data }) => {
            return <Button key={id}>{data}</Button>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
