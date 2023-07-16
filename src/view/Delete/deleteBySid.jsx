import { useEffect, useState } from "react";
import "../../view/Read/ViewPage.css";
import { useNavigate } from "react-router-dom";
export const DeleteBySid = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setValue({
      sid: "69",
      username: "radhika",
      name: "radhika",
      email: "abc@andjasd.coml̥",
    });
  }, []);
  const [value, setValue] = useState({});
  return (
    <>
      <div className="deleteBySid">
        <div
          className="heading"
          style={{
            padding: "4rem 0 0 0 ",
          }}
        >
          Are You Sure, you Want to Delete?
        </div>

        <div
          className="view_container"
          style={{
            padding: "1rem",
          }}
        >
          <table>
            <thead>
              <tr>
                {/* <th className="theading"></th> */}
                <th className="theading">SID</th>
                <th className="theading">username</th>
                <th className="theading">name</th>
                <th className="theading">email</th>
              </tr>
            </thead>

            <tr className="view_row">
              <td className="view_data">{value.sid}</td>
              <td className="view_data">{value.username}</td>
              <td
                className="view_data"
                style={{
                  textTransform: "capitalize",
                }}
              >
                {value.name}
              </td>
              <td className="view_data">{value.email}</td>
            </tr>
          </table>
          <button
            className="deleteBtn"
            onClick={() => {
                alert("You deleted ")
              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
