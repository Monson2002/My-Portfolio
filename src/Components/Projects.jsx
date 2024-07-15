import projects from "../data/Projects";

const Project = projects.map((project) => (
  <div key={project.id} className="sticky card m-auto w-11/12 sm:w-3/4 bg-base-100 image-full">
    <figure>
      <img
        className="rounded-md opacity-40 hover:opacity-20 m-auto"
        src={project.img}
        alt="slow net speed"
      />
    </figure>
    <div className="relative card-body bottom-32 sm:bottom-40 text-center font-CustomFont1">
      <h2 className="card-title text-gray-200">{project.title}</h2>
      <div className="card-actions justify-end text-gray-200">
        <button
          onClick={() => {
            window.open(project.demo);
          }}
          className={`${project.demo === "null" ? "hidden" : ""} btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800`}>
          View Demo
        </button>
        <button
          onClick={() => {
            window.open(project.code);
          }}
          className="btn text-xs sm:text-sm font-normal m-2 sm:m-4 p-1 sm:p-2 bg-slate-800 rounded-md hover:bg-slate-200 active:bg-slate-300 hover:text-gray-700 active:text-gray-800">
          View Code
        </button>
      </div>
    </div>
  </div>
));

export default function Projects() {
  return (
    <>
      <main
        className="projects w-screen bg-gray-800 flex flex-col justify-evenly items-center"
        id="projects">
        <section className="m-2 sm:m-4 w-11/12">
          <h1 className="p-2 sm:p-4 my-8 sm:my-12 lg:my-16 text-gray-300 font-CustomFont1 text-2xl sm:text-3xl lg:text-4xl underline underline-offset-4 decoration-pink-500 text-center">
            Work Experience
          </h1>
          <section className="cards flex flex-col justify-center items-center md:grid md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Associate Software Engineer - Intern</h3>
                <h4 className="text-md sm:text-lg font-medium text-gray-600 mb-2">Coditas</h4>
                <p className="text-sm sm:text-base text-gray-500 mb-4">Jan 24&lsquo; - Jun 24&lsquo;</p>
                <ul className="list-disc ml-4">
                  <li className="text-sm sm:text-base text-gray-700">Part of the team that developed the HIPAA awareness portal (Health Insurance Portability and Accountability Act) as an internal project for the employees in-house.</li>
                  <li className="text-sm sm:text-base text-gray-700">Worked on creating reusable UI components, pages, routes, services in React.</li>
                  <li className="text-sm sm:text-base text-gray-700">Used useContext and useReducer in combination for complex state management.</li>
                  <li className="text-sm sm:text-base text-gray-700">Integrated Google-O-Auth for login.</li>
                </ul>
              </div>
            </div>
            {/* Add more cards as needed */}
          </section>
        </section>
        <section className="m-2 sm:m-4 w-11/12">
          <h1 className="p-2 sm:p-4 my-8 sm:my-12 lg:my-16 text-gray-300 font-CustomFont1 text-2xl sm:text-3xl lg:text-4xl underline underline-offset-4 decoration-pink-500 text-center">
            Projects
          </h1>
          <section className="cards flex flex-col justify-center items-center md:grid md:grid-cols-2">
            {Project}
          </section>
        </section>
      </main>
    </>
  );
}
