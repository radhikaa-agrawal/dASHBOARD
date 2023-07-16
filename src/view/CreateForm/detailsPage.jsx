import { Formik, Field, ErrorMessage, Form } from "formik";
import "./detailPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const DetailsPage = () => {
  const navigate = useNavigate(); // hook
  const [formSubmit, setSubmit] = useState(false);
  return (
    <>
      <div className="detail_page">
        <div className="max_width">
          <div className="heading">Enter your details</div>
          <div className="home_content">
            <Formik
              initialValues={{
                SID: "",
                username: "",
                name: "",
                email: "",
              }}

              onSubmit={(v) => {
                setSubmit(true);
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
                    Submit
                  </button>
                  <button
                    className={"btn"}
                    type={"button"}
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </button>
                  <button className={"btn"} type="reset" onClick={()=>setSubmit(false)}>
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
