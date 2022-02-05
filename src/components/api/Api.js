export const fetchNews = async (category, setState) => {
  const datas = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=tkHRsGDpwxBOVOLcqd1JkYa8H7QCSmAZ`
  );
  const data = await datas.json();
  setState(data.results);
  console.log(data.results);
};
