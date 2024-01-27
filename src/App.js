import { useState, useEffect } from "react";
import { Cards, Chart } from "./components";
import getData from "./api/getData";
import styles from "./App.module.css";
import image from "./images/image.png";

const App = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const data = await getData();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.App}>
      <img src={image} alt="Coronavirus" width={250} style={{ marginTop: "25px" }} />
      <Cards data={data} />
      <Chart />
    </div>
  );
};

export default App;
