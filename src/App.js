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
    selectedList,
    removeFromList,
    setYourName,
    yourName,
    makeIt,
    setMakeIt,
    addRemoveFruit,
    isSelected,
  } = useGet();

  return (
    <div className="main-container background-main">
      {!getIt ? (
        <div className="app-container">
          <div className="logo"></div>
          <p className="text">
            To make the best Smoothie, select your favorate fruites:
          </p>
          <FruitsList
            data={data}
            addRemoveFruit={addRemoveFruit}
            isSelected={isSelected}
          />
          <GetItButton
            getIt={getIt}
            setGetIt={setGetIt}
            selectedList={selectedList}
          />
        </div>
      ) : (
        <GetIt
          selectedList={selectedList}
          removeFromList={removeFromList}
          setYourName={setYourName}
          yourName={yourName}
          makeIt={makeIt}
          setMakeIt={setMakeIt}
          setGetIt={setGetIt}
        />
      )}
    </div>
  );
}

export default App;
