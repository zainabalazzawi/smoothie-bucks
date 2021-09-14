import { useEffect, useState } from "react";

const useGet = () => {
  const [getIt, setGetIt] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [yourName, setYourName] = useState("");
  const [makeIt, setMakeIt] = useState(false);

  useEffect(() => {
    setGetIt(false);
    setYourName("");
    setMakeIt(false);
  }, []);

  const addFruit = (fruit) => {
    console.log(fruit);
    if (selectedList.find((fruitItem) => fruitItem.id === fruit.id)) return;
    setSelectedList([...selectedList, fruit]);
  };

  const removeFromList = (fruit) => {
    setSelectedList(
      selectedList.filter((fruitItem) => fruitItem.id !== fruit.id)
    );
  };

  return {
    getIt,
    setGetIt,
    addFruit,
    selectedList,
    removeFromList,
    setYourName,
    yourName,
    setMakeIt,
    makeIt,
  };
};

export default useGet;
