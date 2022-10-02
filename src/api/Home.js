export const getNews = async () => {
  const response = await fetch(
    'https://newsapi.org/v2/everything?q=tesla&from=2022-09-02&sortBy=publishedAt&apiKey=e7a8e124f8fa4a9a8402bf8a45df67b9',
  );
  const responseJson = await response.json();
  console.log(responseJson);
  return responseJson;
};
