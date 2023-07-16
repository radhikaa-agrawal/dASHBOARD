import "./homePage.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <div className={"main_home_page"}>
      <navBar />
      <div className="home_page">
        <div className="max_width">
          <div className="home_content">
            <div className="heading">Welcome user</div>
            <div className="crud_bar">
              <div className="label">Choose your Operation:</div>
              <div className="crud_buttons_container">
                <Link to="formDetails" className="crud_button">
                  CREATE
                </Link>
                <Link to="view" className="crud_button">
                  VIEW
                </Link>{" "}
                <Link to="update" className="crud_button">
                  UPDATE
                </Link>
                <Link to="delete" className="crud_button">
                  DELETE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
