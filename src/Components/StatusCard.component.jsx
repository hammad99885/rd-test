import {
  Card,
  CustomIcon,
  Progress,
  ProgressBar,
} from "../Elements/Utils.elements";
import { P } from "../Elements/Typograpgy.elements";
import { AiFillClockCircle } from "react-icons/ai";

const StatusCard = ({ title, desc, progress, daysRemaning, progressColor }) => (
  <Card bgColor="dark" color="light">
    <P color="danger">
      <b>&bull; {title}</b>
    </P>
    <P className="pr-3" color="light">{desc}</P>
    <ProgressBar>
      <Progress progress={progress} bgColor={progressColor} />
    </ProgressBar>
    <div className="d-flex justify-content-between mt-3">
      <P>
        <img
          width="30px"
          className="rounded-circle"
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
          alt=""
          // style={{marginLeft:"-10px"}}
        />
        <img
          width="30px"
          className="rounded-circle"
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
          alt=""
          style={{ marginLeft: "-10px", zIndex: 100 }}
        />
        <img
          width="30px"
          className="rounded-circle"
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
          alt=""
          style={{ marginLeft: "-10px" }}
        />
      </P>
      <P color="light">
        <CustomIcon size="large">
          <AiFillClockCircle />
        </CustomIcon>
        <small>
          <small>{daysRemaning} days</small>
        </small>
      </P>
    </div>
  </Card>
);

export default StatusCard;
