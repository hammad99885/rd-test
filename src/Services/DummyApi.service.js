import { reports, stats } from "../DummyData";

const genRandomNoArr = (length) => {
  let data = [];
  for (let i = 1; i <= length; i++) {
    data.push(Math.ceil(Math.random() * 10));
  }
  return data;
};
export const getGenralStats = (error) =>
  new Promise((resolve, reject) =>
    setTimeout(async () => {
      if (error) return reject(new Error("some error occured"));
      const Stats = { ...stats };
      await Stats.data.map(async (Stats) => {
        const data = await genrateGraphData(2, 0, false);
        Stats.chart = data;
        return Stats;
      });
      await resolve(Stats);
    }, 500)
  );

export const getReports = (error) =>
  new Promise((resolve, reject) =>
    setTimeout(async () => {
      if (error) return reject(new Error("some error occured"));
      const rep = { ...reports };
      await rep.data.map(async (rep) => {
        const data = await genrateGraphData(5, 0, false);
        rep.chart = data;
        return rep;
      });
      resolve(rep);
    }, 800)
  );

export const genrateGraphData = (length, timeout, error) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => {
        if (error) return reject(new Error("some error occured"));
        const datasets = [];
        datasets.push(...genRandomNoArr(length));
        const labels = datasets.map((d) => "|");
        resolve({ labels, datasets });
      },
      timeout ? timeout : 500
    )
  );
