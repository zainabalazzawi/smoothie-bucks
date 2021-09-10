import { useEffect, useState } from "react";

const useGet = () => {
  const [getIt, setGetIt] = useState(false);
  const [selected, setIsSelected] = useState(false);

  useEffect(() => {
    setGetIt(false);
    setIsSelected(false);
  }, []);
  // function to select one
  // const SelectOne = () => {};

  return { getIt, setGetIt, selected, setIsSelected };
};

export default useGet;
