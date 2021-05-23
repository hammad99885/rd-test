import { H3, P } from "../Elements/Typograpgy.elements";
import { Card } from "../Elements/Utils.elements";

const Calendar = () => (
  <Card bgColor="light" color="dark" className="mt-2 pl-3 pl-4 ">
    <H3>Calendar</H3>
    <div className="d-flex justify-content-around text-center">
      <div className="d-flex flex-column justify-content-center">
        <P className="mb-0 " color="greayed">
          S
        </P>
        <P className="mb-0">08</P>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <P className="mb-0 " color="greayed">
          M
        </P>
        <P className="mb-0">09</P>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <P className="mb-0 " color="greayed">
          T
        </P>
        <P className="mb-0">10</P>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <P className="mb-0 " color="greayed">
          W
        </P>
        <P className="mb-0">11</P>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <P className="mb-0 " color="greayed">
          T
        </P>
        <P className="mb-0">12</P>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <P className="mb-0 " color="greayed">
          F
        </P>
        <P className="mb-0">13</P>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <P className="mb-0 " color="greayed">
          S
        </P>
        <P className="mb-0">14</P>
      </div>
      {/* <P>
        <Span color="secondary">08</Span>
      </P> */}
    </div>
    <hr />
    <div className="text-center">
      <div className="d-flex flex-row">
        <div className="d-flex flex-column justify-content-center">
          <P className="mb-0">11:35</P>
          <P className="mb-0" color="greayed">
            14
          </P>
        </div>
        <div className="mr-5"></div>
        <div style={{ flexGrow: 1 }}>
          <Card className="text-left" color="light" bgColor="dark">
            <P color="light" className="mb-0">
              Honda Accord Engin Oil
            </P>
            <P color="danger">OverHauling</P>
            <P color="light">
              <img
                width="30px"
                className="rounded-circle"
                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                alt=""
              />{" "}
              Jhon Doe
            </P>
          </Card>
        </div>
      </div>
      <div className="d-flex flex-row mt-2">
        <div className="d-flex flex-column justify-content-center">
          <P className="mb-0">11:35</P>
          <P className="mb-0" color="greayed">
            14
          </P>
        </div>
        <div className="mr-5"></div>
        <div style={{ flexGrow: 1 }}>
          <Card className="text-left" color="dark" bgColor="secondary">
            <P color="dark" className="mb-0">
              Honda Accord Engin Oil
            </P>
            <P color="danger">OverHauling</P>
            <P color="dark">
              <img
                width="30px"
                className="rounded-circle"
                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                alt=""
              />{" "}
              Jhon Doe
            </P>
          </Card>
        </div>
      </div>
    </div>
  </Card>
);

export default Calendar;
