import { Card, CustomIcon } from "../Elements/Utils.elements";
import { P, Span } from "../Elements/Typograpgy.elements";
import { Button } from "../Elements/Buttons.elemets";
import StatsCard from "../Components/StatsCard";
import ReportsCard from "../Components/ReportsCard.component";
import StatusCard from "../Components/StatusCard.component";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";

const StatsAndReport = ({ stats, reports }) => {
  return (
    <>
      <div className="row ">
        {stats.map((stat, index) => (
          <div className="col-12 col-md-6 col-xl-3 text-light mt-3" key={"stats-" + index}>
            <StatsCard
              value={stat.value}
              title={stat.title}
              type={stat.type}
              chart={stat.chart}
            />
          </div>
        ))}
      </div>
      <div className="row ">
        <div className="col-12 col-xl-6 mt-4">
          <ReportsCard reports={reports} />
        </div>
        <div className="col-12 col-xl-6 mt-4">
          <Card className="pl-4 pr-4" color="dark" bgColor="light" style={{ height: "100%" }}>
            <div className="pt-3">
              <div className="d-flex justify-content-between">
                <p>
                  <CustomIcon bgColor="primary">
                    <IoPersonCircleOutline />
                  </CustomIcon>
                  <b> Orderd</b>
                </p>
                <p>
                  <b>17</b>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <CustomIcon bgColor="danger">
                    <IoPersonCircleOutline />
                  </CustomIcon>
                  <b> Transit</b>
                </p>
                <p>
                  <b>11</b>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>
                  <CustomIcon bgColor="success">
                    <IoPersonCircleOutline />
                  </CustomIcon>
                  <b> Delivered</b>
                </p>
                <p>
                  <b>4</b>
                </p>
              </div>
            </div>
            <Button className="mt-3">Order details</Button>
            <P className="mt-4">
              <b>Crank Shaft Order</b>
            </P>
            <P color="greayed">
              <b>Order $53434 - Toyota Camry</b>
            </P>

            <div className="d-flex justify-content-between">
              <P>
                <small>
                  <b>
                    <Span color="greayed">1x</Span> Drive Shaft-GLI 2019
                  </b>
                </small>
              </P>
              <P>
                <b>$150</b>
              </P>
            </div>
            <div className="d-flex justify-content-between">
              <P>
                <small>
                  <b>
                    <Span color="greayed">3x</Span> Shoks
                  </b>
                </small>
              </P>
              <P>
                <b>$175</b>
              </P>
            </div>
          </Card>
        </div>
      </div>
      <div>
        <Card bgColor="light" color="dark" className="mt-4 pl-4 pr-4">
          <div className="row">
            <div className="col-12 col-md-3">
              <P>
                <b>Status</b>
              </P>
              <P>
                <CustomIcon bgColor="primary" size="small">
                  <AiOutlineCheck />
                </CustomIcon>{" "}
                <CustomIcon bgColor="primary" size="small">
                  ToDo
                </CustomIcon>
              </P>
              <P>
                <CustomIcon bgColor="danger" size="small">
                  <AiOutlineCheck />
                </CustomIcon>{" "}
                <CustomIcon bgColor="danger" size="small">
                  Pending
                </CustomIcon>
              </P>
              <P>
                <CustomIcon bgColor="greayed" size="small">
                  <AiOutlineCheck />
                </CustomIcon>{" "}
                <CustomIcon bgColor="greayed" size="small">
                  InProgress
                </CustomIcon>
              </P>
              <P>
                <CustomIcon bgColor="greayed" size="small">
                  <AiOutlineCheck />
                </CustomIcon>{" "}
                <CustomIcon bgColor="greayed" size="small">
                  Review
                </CustomIcon>
              </P>
              <P>
                <CustomIcon bgColor="success" size="small">
                  <AiOutlineCheck />
                </CustomIcon>{" "}
                <CustomIcon bgColor="success" size="small">
                  Completed
                </CustomIcon>
              </P>
            </div>
            <div className="col-12 col-md-3">
              <P>
                <b>In Progress</b>
              </P>
              <StatusCard
                title="Enging Overhauling"
                desc="Mazda RX8 Enging Overhauling"
                daysRemaning="1"
                progress="60"
                progressColor="danger"
              />
            </div>
            <div className="col-12 col-md-3">
              <P>
                <b>Completed</b>
              </P>
              <StatusCard
                title="Paint Job"
                desc="Lamborghini Aventador LP700-4 Bumers"
                daysRemaning="4"
                progress="100"
                progressColor="success"
              />
            </div>
            <div className="col-12 col-md-3">
              <P>
                <b>pending</b>
              </P>
              <StatusCard
                title="Enging Overhauling"
                desc="Mazda RX8 Enging Overhauling"
                daysRemaning="1"
                progress="5"
                progressColor="danger"
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StatsAndReport;
