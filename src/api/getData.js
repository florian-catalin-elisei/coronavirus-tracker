import axios from "axios";

const coronavirusApi = "https://api.covidtracking.com/v1/us/current.json";

const instance = axios.create({
  baseURL: coronavirusApi,
  timeout: 5000,
});

const getData = async () => {
  try {
    const response = await instance.get();
    const { data } = response;

    return data[0];
  } catch (error) {
    throw new Error(`Unable to get data: ${error.message}`);
  }
};

export default getData;
