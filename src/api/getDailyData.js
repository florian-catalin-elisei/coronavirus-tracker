import axios from "axios";

const coronavirusApi = "https://api.covidtracking.com/v1/us/daily.json";

const instance = axios.create({
  baseURL: coronavirusApi,
  timeout: 5000,
});

const getDailyData = async () => {
  try {
    const response = await instance.get();
    const { data } = response;

    return data;
  } catch (error) {
    throw new Error(`Unable to get data: ${error.message}`);
  }
};

export default getDailyData;
