import useFetch from "./components/Hooks/useFetch";
import useGet from "./components/Hooks/useGet";
import FruitsList from "./components/FruitsList/FruitsList";
import GetItButton from "./components/GetItButton/GetItButton";
import GetIt from "./components/GetIt/GetIt";

import "./css/App.css";

function App() {
  const { data } = useFetch(
    "https://my-demos-data-default-rtdb.europe-west1.firebasedatabase.app/fruits.json"
  );

  const {
    getIt,
    setGetIt,
    setIsSelected,
    selected,
    addFruit,
    selectedList,
    removeFromList,
    setYourName,
    yourName,
  } = useGet();
  return (
    <div className="main-container">
      {!getIt ? (
        <div>
          <h1 className="logo">SmoothieBucks</h1>
          <p className="text">
            To make the best Smoothie, select your favorate fruites:
          </p>
          <FruitsList
            data={data}
            setIsSelected={setIsSelected}
            selected={selected}
            addFruit={addFruit}
          />
          <GetItButton getIt={getIt} setGetIt={setGetIt} />
        </div>
      ) : (
        <GetIt
          selectedList={selectedList}
          removeFromList={removeFromList}
          setYourName={setYourName}
          yourName={yourName}
        />
      )}
    </div>
  );
}

export default App;
