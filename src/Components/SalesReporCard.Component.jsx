import LineChart from "./Charts/Line.chart";
import { H3 } from "../Elements/Typograpgy.elements";
import { Card } from "../Elements/Utils.elements"
//
const SalesReportCard = ({ chartOne, charttwo, chartThree }) => {
  return (
    <Card bgColor="dark" className="mt-3" color="light">
      <div className="d-flex flex-wrap pt-2 pl-4 pr-4">
        <div
          className="rounded-circle bg-success"
          style={{ width: "100px", height: "100px" }}
        ></div>
        <div className="ml-4">
          <H3 color="greayed" className="mb-1">
            <b>$ 4398</b> INC
          </H3>
          <H3 color="success" className="mb-1">
            <b>$ 116</b> EXP
          </H3>
          <H3 color="danger" className="mb-1">
            <b>$ 74</b> Sales
          </H3>
        </div>
      </div>
      <div className="pl-4 pr-4 mt-4">
        <div className="mt-4">
          <LineChart
            color="#6ed940"
            height="50"
            labels={chartOne.labels}
            data={chartOne.datasets}
          />
        </div>
        <div className="mt-4">
          <LineChart
            color="#9560d6"
            height="50"
            labels={charttwo.labels}
            data={charttwo.datasets}
          />
        </div>
        <div className="mt-4 mb-5">
          <LineChart
            color="rgb(255, 99, 132)"
            height="50"
            labels={chartThree.labels}
            data={chartThree.datasets}
          />
        </div>
      </div>
    </Card>
  );
};

export default SalesReportCard;
