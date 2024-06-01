const API_URL = "http://localhost:3000";

const apiGeneralTemplate = async (method, formDetail, controller) => {
  const options = {
    method: `${method}`,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDetail),
  };
  try {
    const response = await fetch(`${API_URL}/${controller}`, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error!", error);
    return { error: error.message };
  }
};
const apiGetTemplate = async (method, controller) => {
  const options = {
    method: `${method}`,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await fetch(`${API_URL}/${controller}`, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error!", error);
    return { error: error.message };
  }
};

const apiTokenTemplate = async (method, token, controller) => {
  const options = {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${API_URL}/${controller}`, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error!", error);
    return { error: error.message };
  }
};

export { apiGeneralTemplate, apiGetTemplate, apiTokenTemplate };
