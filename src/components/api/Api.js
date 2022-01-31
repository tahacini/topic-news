export const fetchNews = async (category, setState) => {
  const datas = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=tkHRsGDpwxBOVOLcqd1JkYa8H7QCSmAZ`
  );
  const data = await datas.json();
  setState(data.results);
  console.log(data.results);
};

// export const fetchNews = async (country, category, setState) => {
//   const datas = await fetch(
//     `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`
//   );
//   const data = await datas.json();
//   setState(data.articles);
//   console.log(data.articles);
// };
