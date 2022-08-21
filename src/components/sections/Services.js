import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Web App Development",
    content:
      "I am an experienced web app developer. Working mostly in JS frameworks like React, Vue, Next",
    color: "#6C6CE5",
    contentColor: "dark",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Mobile App Development",
    content:
      "I have been developing hybrid mobile applications for both android and ios using React Native and Expo.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "DevOps",
    content:
      "I know how to manage deployments with minimum cost using AWS, Google cloud and Azure.",
    color: "#F97B8B",
    contentColor: "dark",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
