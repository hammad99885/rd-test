import { Card, Indicators } from "../Elements/Utils.elements";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import LineChart from "./Charts/Line.chart";
import theme from "../Theme/global";

const ReportsCard = ({ reports }) => (
  <Card color="dark" bgColor="light" className="pl-4 pr-4">
    <h3>Reporting</h3>
    {reports.map((report, index) => (
      <div className="row mb-1" key={"reports-" + index}>
        <div className="col-5">
          <b>{report.title}</b>
        </div>
        <div className="col-5">
          {/* <b>chart</b> */}
          {report.chart ? (
            <LineChart
              color={theme.colors.bg[report.value < 0 ? "danger" : "success"]}
              height="50"
              labels={report.chart.labels}
              data={report.chart.datasets}
            />
          ) : (
            ".............."
          )}
        </div>
        <div className="col-2">
          <Indicators color={report.value < 0 ? "danger" : "success"}>
            <div>
              {report.value < 0 ? (
                <BsFillCaretDownFill />
              ) : (
                <BsFillCaretUpFill />
              )}
            </div>
            <div>
              {report.value > 0
                ? "+" + report.value + " %"
                : report.value + " %"}
            </div>
          </Indicators>
        </div>
      </div>
    ))}
  </Card>
);
export default ReportsCard;
