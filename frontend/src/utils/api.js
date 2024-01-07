const url = "http://localhost:5000";

const api = fetch(url).then((response) => {
  return response.json();
});

export default api;
