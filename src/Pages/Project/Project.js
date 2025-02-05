// import React from "react";
// import "./Project.css";
// import Pcards from "./../../Components/Cards/Pcards/Pcards";
// import projecticon from "../../Assets/projecticon.svg";
// import DashBoard from '../../Assets/DashBoard.png'; // Adjust the relative path if needed
// import Plant from '../../Assets/Plant.png';
// import Bookrenting from '../../Assets/Bookrenting.png';
// import PortfolioIMG from '../../Assets/PortfolioIMG.png';

// export default function Project() {
//   return (
//     <>
//       <div className="ProjectPage">
//         <h1 className="Protitle" align="center">

//           <u>Projects </u>
//         </h1>

//         <div className="project">
//           <div>
//             <img src={projecticon} alt="Message Icon" className="Pimage" />
//           </div>

//           <div className="projectscards">
//             <Pcards Project_Name={"React Dashboard"} image={DashBoard} />
//             <Pcards Project_Name={"BookRenting Website"} image={Bookrenting} />
//             <Pcards Project_Name={"Coffee Website"} image={Plant}/>
//             <Pcards Project_Name={"Project 4"} image={PortfolioIMG}/>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




import React from "react";
import "./Project.css";
import Pcards from "./../../Components/Cards/Pcards/Pcards";
import projecticon from "../../Assets/projecticon.svg";
import DashBoard from "../../Assets/DashBoard.png";
import Plant from "../../Assets/Plant.png";
import Bookrenting from "../../Assets/Bookrenting.png";
import PortfolioIMG from "../../Assets/PortfolioIMG.png";

const projects = [
  {
    name: "React Dashboard",
    image: DashBoard,
    Description:"A dynamic and interactive dashboard built with React.js, featuring responsive design . It includes components like charts, tables, and user management features, providing an intuitive user experience.",
    link:"https://react-dashboard-adminpannel.netlify.app/",
    Github:"https://github.com/Aadityadav191/React-Dashboard.git"
  },
  {
    name: "BookRenting Website",
    image: Bookrenting,
    Description:"A user-friendly Book Renting Website developed with React.js, allowing users to browse, rent, and manage books online. The platform includes features like search filters, user accounts, and rental management. ",
    link:"https://react-dashboard-adminpannel.netlify.app/",
    Github:"https://github.com/Aadityadav191/React-Dashboard.git"
  },
  {
    name: "Coffee Website",
    image: Plant,
    Description:"A dynamic and interactive dashboard built with React.js, featuring responsive design . It includes components like charts, tables, and user management features, providing an intuitive user experience.",
    link:"https://react-dashboard-adminpannel.netlify.app/",
    Github:"https://github.com/Aadityadav191/React-Dashboard.git"
  },
  {
    name: "Project 4",
    image: PortfolioIMG,
    Description:"A dynamic and interactive dashboard built with React.js, featuring responsive design . It includes components like charts, tables, and user management features, providing an intuitive user experience.",
    link:"https://react-dashboard-adminpannel.netlify.app/",
    Github:"https://github.com/Aadityadav191/React-Dashboard.git"
  },
];

export default function Project() {
  return (
    <div id="projects" className="ProjectPage">
      <h1 className="Protitle" align="center">
        Projects 
      </h1>

      <div className="project">
        <div>
          <img src={projecticon} alt="Message Icon" className="Pimage" />
        </div>

        <div className="projectscards">
          {projects.map((project, index) => (
            <Pcards
              key={index}
              Project_Name={project.name}
              image={project.image}
              Description={project.Description}
              link={project.link}
              Github={project.Github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
