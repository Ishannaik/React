import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 0z8ga8nyktDIVm59b_mxYrvKvSX9f7TasJLhBbyqYuA",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
