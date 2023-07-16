import { useNavigate } from "react-router-dom";
import "../Update/update.css";
import { useContext } from "react";
import { UserContext } from "../../hooks/dataProvider";
export const DeletePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useContext(UserContext);
  return (
    <>
      <div className="update_page">
        <div className="max_width">
          <div className="heading">Delete the Entries</div>
          <div className="home_content">
            <form action=""
              onSubmit={(v) => {
                v.preventDefault()
                setData({
                  sid:v.target[0].value
                });
                navigate("/deleteBySid");
              }}
            >
              <div className="sid_row">
                <div>
                  <label htmlFor="">Enter your SID</label>
                  <input type="text" />
                </div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
