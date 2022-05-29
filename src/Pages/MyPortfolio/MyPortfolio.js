import React from "react";
import { Link } from "react-router-dom";
import abSiddiq from "../../assets/images/ab_siddiq.jpg";
const MyPortfolio = () => {
  return (
    <div className="grid grid-cols-4 gp-5 my-[50px]">
      <div className="mt-[150px]">
        <div class="flex justify-center">
          <img
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              textAlign: "center",
            }}
            src={abSiddiq}
          ></img>
        </div>

        <div className="text-center ">
          <h2 className="text-2xl">Md. Abu Bakkar Siddiq</h2>
          <p className="">E-mail: siddiq.aiub@gmail.com</p>
          <p className="">Mobile: +880 1732378015</p>
          <p className="">
            Github: <Link to="https://github.com/ab-siddiq">ab-siddiq</Link>
          </p>
          <p className="">
            Linkedin:{" "}
            <Link to="https://www.linkedin.com/in/ab-siddiq/">ab-siddiq</Link>
          </p>
        </div>
      </div>
      <div className="col-span-3">
        <h2 className="text-bold text-3xl mb-[50px] text-center">My Skills</h2>
        <div className="">
          <h2 className="text-bold text-3xl my-[15px]">Experience</h2>
          <ul className="steps steps-vertical">
            <li className="step step-primary">
              2 years of experience in web design
            </li>
            <li className="step step-primary">
              Creative Developer at SBPO (4 March, 2021-Present)
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-bold text-3xl my-[15px]">TECHNICAL KNOWLEDGE</h2>
          <ul className="steps steps-vertical">
            <li className="step step-primary">
              Frontend: CSS3, Bootstrap5, JavaScript, React.js, Tailwind CSS,
              React Bootstrap
            </li>
            <li className="step step-primary">
              Backend: JavaScript, Node.js, Express.js
            </li>
            <li className="step step-primary">Database: MongoDB</li>
            <li className="step step-primary">
              Authentication: Firebase, React-firebase-hooks
            </li>
            <li className="step step-primary">Version control: git</li>
            <li className="step step-primary">
              Others: Jira Project Management, Slack Communication, MS Office
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-bold text-3xl my-[15px]">Projects</h2>
          <ul className="steps steps-vertical">
            <li className="step step-primary">
              Simple Ecommerce (React, API, Tailwind CSS, Firebase) https://ema-john-simple-6ff77.firebaseapp.com/
            </li>
            <li className="step step-primary">
              Product Data (React.js, Tailwind CSS, React Router, rechart) https://product-data-analysis.netlify.app/
            </li>
            <li className="step step-primary">
              React Router with Tailwind CSS https://react-router-with-tailwind.netlify.app/
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-bold text-3xl my-[15px]">EDUCATIONAL QUALIFICATION</h2>
          <ul className="steps steps-vertical">
            <li className="step step-primary">
              B.Sc in CSE from American International University-Bangladesh
            </li>
            <li className="step step-primary">
              H.S.C (Science) Mosleduddin Govt. Degree College, Haripur, Thakurgaon
            </li>
            <li className="step step-primary">
              S.S.C (Science) Haripur Govt. Pilot High School, Haripur, Thakurgaon
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
