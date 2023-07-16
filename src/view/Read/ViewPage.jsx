import { useEffect, useState } from "react";
import "./ViewPage.css";
export const ViewPage = () => {
  const dataList = [
    {
      sid: "69",
      username: "radhe",
      name: "Radhika",
      email: "radhika@gmail.com",
    },
    {
      sid: "50",
      username: "radhe",
      name: "Radhika",
      email: "radhika@gmail.com",
    },
    {
      sid: "12",
      username: "radhe",
      name: "Radhika",
      email: "radhika@gmail.com",
    },
    {
      sid: "52",
      username: "radhe",
      name: "Radhika",
      email: "radhika@gmail.com",
    },
    {
      sid: "63",
      username: "radhe",
      name: "Radhika",
      email: "radhika@gmail.com",
    },
    {
      sid: "70",
      username: "radhe",
      name: "Radhika",
      email: "radhika@gmail.com",
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios.get("/radhekiroute").then(d=>{

    // });
    setData(dataList);
  });

  return (
    <div className="view_page">
      <div className="max_width">
        <div className="view_content">
          <div className="heading">View list of Users</div>

          <div className="view_container">
            <table>
              <thead>
                <tr>
                  {/* <th className="theading"></th> */}
                  <th className="theading">Id</th>
                  <th className="theading">SID</th>
                  <th className="theading">username</th>
                  <th className="theading">name</th>
                  <th className="theading">email</th>
                </tr>
              </thead>

              {data.map((value, index) => (
                <tr className="view_row">
                  {/* <td className="view_data"><input type="checkbox"/></td> */}
                  <td className="view_data">{index + 1}</td>
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
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
