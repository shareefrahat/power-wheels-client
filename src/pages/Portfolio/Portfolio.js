import React from "react";
import screenshot1 from "../../images/screenshot1.png";
import screenshot2 from "../../images/screenshot2.png";
import screenshot3 from "../../images/screenshot3.png";

const Portfolio = () => {
  return (
    <>
      <section>
        <h2 className="text-xl lg:text-2xl font-primary my-10">My Portfolio</h2>
      </section>

      <section className="w-fit lg:w-1/2 mx-4 lg:mx-auto border border-primary p-5 rounded my-10">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-5 lg:gap-x-20 mb-5">
          <div className="lg:text-left">
            <p className="font-primary text-xl lg:text-3xl">
              Mohammad <br /> Sharif Uddin
            </p>
            <p className="mt-2 font-semibold font-secondary">
              Full Stack developer
            </p>
          </div>
          <div className="lg:text-right font-secondary">
            <p>Chittagong, Bangladesh</p>
            <p>Sharifmrahat@gmail.com</p>
          </div>
        </div>
        <div className="text-left font-secondary ">
          <div>
            <p className="text-lg font-bold border-y-2 border-y-accent py-1 mb-4">
              Educational Qualification
            </p>
          </div>
          <p className="font-semibold">BSc. in Textile Engineering</p>
          <p>University: Bangladesh University of Textiles</p>
          <p>Department: Apparel Engineering</p>
          <p>Duration: 2016 - 2021</p>
        </div>
        <div className="text-left font-secondary my-5">
          <div>
            <p className="text-lg font-bold border-y-2 border-y-accent py-1 mb-4">
              Key Skills
            </p>
          </div>
          <p>
            <span className="font-bold">Expertise: </span>HTML5, CSS3,
            Bootstrap, Tailwind, JavaScript, ES6, React, REST API, Material UI,
            Ant Design, React Based Libraries.
          </p>
          <p>
            <span className="font-bold">Comfortable: </span>NodeJs, Express,
            MongoDB, Firebase, Stripe, Axios, JWT, Redux, SCSS.
          </p>
          <p>
            <span className="font-bold">Familiar: </span> TypeScript, Lodash,
            Wordpress, JQuery, MySQL.
          </p>
          <p>
            <span className="font-bold">Tools: </span>Git, Github, VS Code, Dev
            Tools, Netlify, Vercel, Heroku, Figma, Postman, Linux.
          </p>
          <p>
            <span className="font-bold">Additional: </span>Management,
            Leadership, Presentation, Listening, MS Word, Excel, Powerpoint.
          </p>
        </div>
        <div className="text-left font-secondary my-5">
          <div>
            <p className="text-lg font-bold border-y-2 border-y-accent py-1 mb-5">
              Projects Highlights
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 ">
            <div class="card card-compact lg:w-72 mx-auto bg-base-100 shadow -z-50">
              <figure>
                <img src={screenshot2} alt="" />
              </figure>
              <div class="card-body lg:w-96">
                <h2 class="card-title">Power Wheels Ltd.</h2>
                <p>
                  A MERN Stack web application for auto parts manufacturer
                  company which has different dashboard with nested route for
                  users and admin. User can purchase product and can pay cost
                  with valid ard, user can post and update a review. Admin can
                  manage users role,order shipment, can also add new product. A
                  user can not access protected APIs.
                </p>
              </div>
            </div>
            <div class="card card-compact lg:w-72 mx-auto bg-base-100 shadow -z-50">
              <figure>
                <img src={screenshot1} alt="" />
              </figure>
              <div class="card-body lg:w-96">
                <h2 class="card-title">Electron Valley</h2>
                <p>
                  Electron Valley is a MERN Stack web application created for a
                  warehouse company where a suppliers can add their products,
                  also they can update or delete their product in real time. An
                  admin can change the role of any user into admin. Have a fancy
                  slider, toast message system and a secure authentication and
                  authorization system.
                </p>
              </div>
            </div>
            <div class="card card-compact lg:w-72 mx-auto bg-base-100 shadow -z-50">
              <figure>
                <img src={screenshot3} alt="" />
              </figure>
              <div class="card-body lg:w-96">
                <h2 class="card-title">NutriFix</h2>
                <p>
                  Single page web application build with React for a Nutrition
                  specialist. Have active routing system. Secure Firebase
                  Authentication System with RegEx for both email and password.
                  A protected checkout route where a patient can book for a
                  service. Have accordion which is used for FAQ section. Back
                  end did not develop yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
