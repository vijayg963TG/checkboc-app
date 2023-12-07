import { truncateText } from "../../utils/globalFunction";
import fetchInstance from "../../utils/Api";
import { useEffect, useState } from "react";
import Loader from "../loader";

interface numtype {
  num: number;
}

interface restype {
  letter: string;
}

const ItemCard = ({ num }: numtype) => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    const fetchData = async (num: number) => {
      try {
        const data: restype = await fetchInstance(num);
        setText(data?.letter);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(num);
    const intervalId = setInterval(() => {
      fetchData(num);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`box ${text === "" && "errorBorder"}`}>
      {text ? truncateText(text) : <Loader />}
    </div>
  );
};

export default ItemCard;
