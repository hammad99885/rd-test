import { SearchBox } from "../Elements/Inputs.elements";
import { Link } from "../Elements/Buttons.elemets";
const NavBar = () => {
  return (
    <div className="row">
      <div className="col-8 col-sm-4">
        <div className="form-group mb-0">
          {/* <input type="text" className="form-control" /> */}
          <SearchBox type="search" placeholder="Search" />
        </div>
      </div>
      <div className="col-4 col-sm-4 col-md-2 d-flex d-flex justify-content-around align-items-center">
        <Link to="/">Feedback</Link>
        <Link to="/">Help</Link>
      </div>
    </div>
  );
};

export default NavBar;
