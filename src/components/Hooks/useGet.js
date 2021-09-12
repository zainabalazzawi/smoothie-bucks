import { useEffect, useState } from "react";

const useGet = () => {
  const [getIt, setGetIt] = useState(false);
  const [selected, setIsSelected] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    setGetIt(false);
    setIsSelected(false);
  }, []);

  const addFruit = (fruit) => {
    console.log(fruit);
    if (selectedList.find((fruitItem) => fruitItem.id === fruit.id)) return;
    setSelectedList([...selectedList, fruit]);
  };
  // function to select one
  // const SelectOne = () => {};

  return { getIt, setGetIt, selected, setIsSelected, addFruit, selectedList };
};

export default useGet;
