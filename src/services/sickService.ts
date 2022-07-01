import axios from "axios";
type covid = {
  cases: number;
  datetime: Date;
  deaths: number;
  refuses: number;
  state: string;
  suspects: number;
  uf: string;
  uid: number;
};
export default async function deadService() {
  const data: any = await axios.get(
    "https://covid19-brazil-api.now.sh/api/report/v1"
  );
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const deadByMonth = [];
  for (const month of months) {
    const dead = await axios.get(
      `https://covid19-brazil-api.now.sh/api/report/v1/brazil/2021${month}01`
    ).then(res => {

    deadByMonth.push(
      res.data.data.reduce((acc, item) => {
        return acc + item.cases;
      }, 0)
    );
    });
  }
  return {
    estado: data.data.data.map((item: covid) => {
      return {
        state: item.state,
        count: item.cases,
      };
    }),
    data: deadByMonth,
  };
}
