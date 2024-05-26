const API_URL = "http://localhost:3000/auth";

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
    console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There was an error!", error);
    return { error: error.message };
  }
};

export { apiGeneralTemplate, apiTokenTemplate };
