import { useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "../Components/SideBar.component";
import {
  getGenralStats,
  getReports,
  genrateGraphData,
} from "../Services/DummyApi.service";
import NavBar from "../Components/NavBar.component";
import StatsAndReport from "../Layouts/StatsAndReport.layout";
import SalesReportCard from "../Components/SalesReporCard.Component";
import Calendar from "../Components/Calendar.component";

const MainContainer = styled.div`
  margin: 20px 20px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: 30px 15px;
  border-radius: 10px;
`;

const Home = (props) => {
  const [stats, setStats] = useState([]);
  const [isStatsLoading, setIsStatsLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const [isReportsLoading, setIsReportLoading] = useState(false);
  const [chartOne, setChartOne] = useState({ labels: [], datasets: [] });
  const [charttwo, setCharttwo] = useState({ labels: [], datasets: [] });
  const [chartThree, setChartThree] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    getStats();
    getreports();
    getCharts();
  }, []);

  const getStats = async () => {
    try {
      setIsStatsLoading(true);
      const stats = await getGenralStats();
      setIsStatsLoading(false);
      if (stats.status === "success") setStats(stats.data);
      else throw Error(stats.message);
    } catch (error) {
      setIsStatsLoading(false);
      console.log(error);
    }
  };

  const getreports = async () => {
    try {
      setIsReportLoading(true);
      const reports = await getReports();
      setIsReportLoading(false);
      if (reports.status === "success") setReports(reports.data);
      else throw Error(reports.message);
    } catch (error) {
      setIsReportLoading(false);
      console.log(error);
    }
  };

  const getCharts = async () => {
    try {
      const chart1 = await await genrateGraphData(5, 500);
      setChartOne(chart1);
      const chart2 = await await genrateGraphData(5, 800);
      setCharttwo(chart2);
      const chart3 = await await genrateGraphData(5, 1200);
      setChartThree(chart3);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainContainer>
      <div className="row ml-0 mr-0">
        <div className="col-3 col-sm-3 col-md-2 col-xl-1 d-none d-sm-block">
          <SideBar />
        </div>
        <div className="col-12 col-sm-9 col-md-10 col-xl-11">
          <NavBar />
          <div className="row mt-3">
            <div className="col-12 col-md-12 col-xl-8">
              <StatsAndReport
                stats={stats}
                reports={reports}
                isStatsLoading={isStatsLoading}
                isReportsLoading={isReportsLoading}
              />
            </div>
            <div className="col-12 col-md-12 col-xl-4">
              <SalesReportCard
                chartOne={chartOne}
                charttwo={charttwo}
                chartThree={chartThree}
              />
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
export default Home;
