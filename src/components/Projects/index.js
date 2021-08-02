// // import React from 'react';

// // function Projects() {
// //   return (
// //     <section>
// //       <h1>PROJECT</h1>
// //       <p>DESCRIPTION</p>
// //     </section>
// //   );
// // }
// // export default Projects;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ProjectsCard from '../ProjectsCard';
// import projects from '../../projects.json';
// import './style.css'

// const Project = () => {
//   // const params = useParams();
//   // const history = useHistory();
//   const [ currentProject, setCurrentProject ] = useState([]);
//   useEffect(() => {
//     // const selectedProject = projects.map(project => project.id === Number(params.projectId));
//     setCurrentProject(projects);
//   }, [])
//   // console.log(params);
//   // console.log(history);
//   return (
//     <div class='container'>
//       {projects.map((project) => {
//         return <ProjectsCard
//         name={project.name}
//         github={project.github}
//         img={project.img}
//         deployedlink={project.deployedlink}
//         tools={project.tools}
//       />
//       }) }

//       {/* <button
//         onClick={() => history.push('/Home')}
//       >Go home</button> */}
// //     </div>
//   )
// }
// export default Project;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectsCard from '../ProjectsCard';
import projects from '../../projects.json';

export default function Projects() {
    // const params = useParams();
  // const history = useHistory();
  const [ currentProject, setCurrentProject ] = useState([]);
  useEffect(() => {
    // const selectedProject = projects.map(project => project.id === Number(params.projectId));
    setCurrentProject(projects);
  }, [])
  // console.log(params);
  // console.log(history);
  return (
<section class="section-tours" id="projects">
<div class="u-center-text u-margin-bottom-big">
    <h2 class="heading-secondary">
       Projects
    </h2>
</div>
<div class="row">
<div class='container'>
      {projects.map((project) => {
        return <ProjectsCard
        name={project.name}
        github={project.github}
        img={project.img}
        deployedlink={project.deployedlink}
        tools={project.tools}
        role={project.role}
      />
      }) }

      {/* <button
        onClick={() => history.push('/Home')}
      >Go home</button> */}
//     </div>
</div>
</section>
  );
}

