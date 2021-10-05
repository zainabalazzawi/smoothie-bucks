import useFetch from "./components/Hooks/useFetch";
import useGet from "./components/Hooks/useGet";
import GetIt from "./components/GetIt/GetIt";
import MainPage from "./components/MainPage/MainPage";
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
        <MainPage
          data={data}
          addRemoveFruit={addRemoveFruit}
          isSelected={isSelected}
          getIt={getIt}
          setGetIt={setGetIt}
          selectedList={selectedList}
        />
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
