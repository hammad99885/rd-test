import { Card } from "../Elements/Utils.elements";
import LineChart from "./Charts/Line.chart";
import theme from "../Theme/global";

const StatsCard = ({ title, value, type, chart }) => (
  <Card className="d-flex align-items-center">
    <div>
      <p style={{ fontSize: "12px" }}>
        <b>{title}</b>
      </p>
    </div>
    <div style={{ flexGrow: 1 }}>
      <div className="d-flex align-items-start justify-content-end">
        <h4 className="mr-2">{value} </h4> <small>{type}</small>
      </div>
      <div className="pl-3 d-none d-md-block">
        {chart ? (
          <LineChart
            color={theme.colors.bg[value < 3 ? "danger" : "success"]}
            height="50"
            labels={chart.labels}
            data={chart.datasets}
            width="100"
          />
        ) : (
          ".................."
        )}

        {/* <h3> chart</h3> */}
      </div>
    </div>
  </Card>
);
export default StatsCard;
