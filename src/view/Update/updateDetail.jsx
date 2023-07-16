import { Formik, Field, ErrorMessage, Form } from "formik";
import "../../view/CreateForm/detailPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../hooks/dataProvider";
export const UpdateDetailsPage = () => {
  const [data, setData] = useContext(UserContext);

  const navigate = useNavigate(); // hook
  const [formSubmit, setSubmit] = useState(false);
  const [initialValues, setIntitalValues] = useState({
    SID: "radhe",
    username: "radhe",
    name: "eri",
    email: "radhika@personal.com",
  });
  useEffect(() => {
    // axios.get("getDataBysid/data.sid").then((d) => {});
    // alert(data.sid);
    setIntitalValues({
      SID: "i800061",
      username: "radhe",
      name: "Radhika",
      email: "radhika@gmail.com",
    });
  }, []);
  return (
    <>
      <div className="detail_page">
        <div className="max_width">
          <div className="heading">Update your details</div>
          <div className="home_content">
            <Formik
              enableReinitialize={true}
              initialValues={initialValues}
              onSubmit={(v) => {
                setSubmit(true);

                // send data using API POst waali or update waali

                // axios.post().then(d=>{
                // setSubmit(true);
                // })
              }}
            >
              <Form className={"home_form"}>
                <div>
                  <label htmlFor="SID">SId</label>
                  <Field
                    id={"SID"}
                    type="text"
                    alt={"Required*"}
                    name={"SID"}
                    placeholder={"Enter your SID*"}
                    required
                  />
                  <ErrorMessage name="SID" component="div" />
                </div>
                <div>
                  <label htmlFor="username">Username</label>
                  <Field
                    id={"username"}
                    type="text"
                    alt={""}
                    name={"username"}
                    placeholder={"Enter your Username*"}
                    required
                  />
                  <ErrorMessage name="username" component="div" />
                </div>
                <div>
                  <label htmlFor="name">Name</label>
                  <Field
                    id={"name"}
                    type="text"
                    alt={""}
                    name={"name"}
                    placeholder={"Enter your Name*"}
                    required
                  />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    id={"email"}
                    type="text"
                    alt={""}
                    name={"email"}
                    placeholder={"Enter your Email*"}
                    required
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="submission_box">
                  <button className={"btn"} type="submit" value="">
                    Update
                  </button>
                  <button
                    className={"btn"}
                    type={"button"}
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </button>
                  <button
                    className={"btn"}
                    type="reset"
                    onClick={() => setSubmit(false)}
                  >
                    Reset
                  </button>
                </div>
              </Form>
            </Formik>

            {formSubmit ? (
              <div className="submission">
                <span>Form Submitted Successfully</span>l̥
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
