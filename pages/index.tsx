import Image from "next/image"
import { useCallback, useEffect } from "react"
import Icon, { FileTextFilled, GithubFilled, FilePdfFilled, LinkedinFilled, MailFilled } from "@ant-design/icons"
import LocationSvg from "../public/location.svg"
import { Collapse } from "antd"

const { Panel } = Collapse

const App = () => {
  const checkDark = (): Boolean => localStorage.theme === "dark"
    || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)

  const toggleDarkMode = useCallback(() => {
    if (checkDark()) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    toggleDarkMode()
  }, [])

  return (
    <div
      className="w-screen bg-gray-100 lg:max-h-screen lg:overflow-y-scroll dark:bg-slate-800 dark:text-white min-h-screen">
      <div className="flex flex-col lg:flex-row mx-auto md:px-4 max-w-screen-2xl">
        <div className="basis-1/4 flex flex-col items-center bg-white lg:pt-10
                        lg:min-h-screen dark:bg-slate-700 lg:sticky lg:self-start lg:top-0">
          <Image
            src="/Yuchen-Profile.jpg"
            alt="Yuchen Wang"
            className="max-h-48 w-fit rounded-3xl m-8"
            width={1245}
            height={1245}
            priority
          />
          <div className="flex flex-col items-center prose dark:prose-invert">
            <h2 className="mt-0 mb-0">Yuchen (Barry) Wang</h2>
            <h2 className="mt-0 mb-0">王雨宸</h2>
            <span className="mt-4">Master of Software Engineering</span>
            <span>Carnegie Mellon University</span>
            <span><Icon component={LocationSvg} className="align-middle"/> Pittsburgh, PA, USA </span>
            <span className="not-prose">
              <MailFilled className="align-middle"/> <a href="mailto:barrywang@cmu.edu">barrywang@cmu.edu</a>
            </span>
          </div>
          <div className="flex-row lg:flex-col min-w-[120px] justify-around flex mt-5 text-lg url-links prose dark:prose-invert text-lg">
            <div>
              <a href="https://github.com/Barrywww">
                <GithubFilled className="align-middle"/>
                <span className="hidden lg:inline-block">Barrywww</span>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/yuchen-barry-wang/">
                <LinkedinFilled className="align-middle"/>
                <span className="hidden lg:inline-block">Yuchen Wang</span>
              </a>
            </div>
            <div>
              <a href="https://nmgit.net/en">
                <FileTextFilled className="align-middle"/>
                <span className="hidden lg:inline-block">Barry's Blog</span>
              </a>
            </div>
            <div>
              <a href="./Resume-Yuchen-Wang.pdf">
                <FilePdfFilled className="align-middle"/>
                <span className="hidden lg:inline-block">Downloadable CV</span>
              </a>
            </div>
          </div>
          <a className="hidden lg:absolute lg:block bottom-0 italic text-gray-400 dark:text-gray-500 text-sm" href="https://beian.miit.gov.cn/">蒙ICP备19005733号-3</a>
        </div>
        <div className="basis-3/4 bg-white dark:bg-slate-700 min-h-screen lg:pt-10 lg:pr-10 px-5 pb-10">
          <div className="prose dark:prose-invert min-w-full">
            <div className="divide-y-2 divide-dashed">
              <h3>Background</h3>
              <div>
                <p>Hi there👋! I'm a graduate student at Carnegie Mellon University, majoring in Software Engineering.
                  I love gazing, pondering and solving real-world puzzles elegantly using code. Specially, I have strong
                  interests in
                  front-end engineering, as I enjoy designing and implementing aesthetically beautiful interfaces and
                  satisfactory
                  interactions. I also have extensive experiences in full-stack engineering across
                  my previous work experiences, school courses and projects. Besides, I am a proactive team player,
                  presenter, and communicator.
                </p>
                <p>Currently, I am seeking 2023 Summer internship opportunities and full-time jobs.</p>
              </div>
            </div>
            <div className="divide-y-2 divide-dashed">
              <h3>Education</h3>
              <div className="not-prose pt-5">
                <div>
                  <div className="flex justify-between">
                    <p className="font-bold">Carnegie Mellon University</p>
                    <p>Pittsburgh, PA</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Master of Software Engineering in Scalable Systems, GPA 3.92/4.33</p>
                    <p className="flex-shrink-0">09/2022-12/2023</p>
                  </div>
                  <Collapse ghost>
                    <Panel key='1' header="Core Courses">
                      <ul className="py-5">
                        <li>17-603: Communications for Software Leader</li>
                        <li>17-611: Statistics for Decision Making</li>
                        <li>17-614: Formal Methods</li>
                        <li>17-615: Data Structures and Algorithms</li>
                        <li>17-622: Agile Methods</li>
                        <li>17-623: Quality Assurance</li>
                        <li>17-625: API Design</li>
                        <li>17-626: Requirements for Information Systems</li>
                      </ul>
                    </Panel>
                  </Collapse>
                </div>
                <div className="pt-2.5">
                  <div className="flex justify-between">
                    <p className="font-bold">New York University Shanghai</p>
                    <p>Shanghai, China</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Bachelor of Science in Computer Science, GPA 3.65/4.00</p>
                      <p>Minor: Interactive Media Art</p>
                    </div>
                    <span className="flex-shrink-0">09/2022-12/2023</span>
                  </div>
                  <Collapse ghost>
                    <Panel key='1' header="Core Courses">
                      <ul className="py-5">
                        <li>MATH-SHU 121: Calculus</li>
                        <li>MATH-SHU 235: Probability and Statistics</li>
                        <li>CSCI-SHU 2314: Discrete Maths</li>
                        <br/>
                        <li>CENG-SHU 202: Computer Architecture</li>
                        <li>CSCI-SHU 210: Data Structures</li>
                        <li>CSCI-SHU 213: Databases</li>
                        <li>CSCI-SHU 215: Operating Systems</li>
                        <li>CSCI-SHU 220: Algorithms</li>
                        <li>CSCI-SHU 254: Distributed Systems</li>
                        <li>CSCI-SHU 308: Computer Networking</li>
                        <li>CSCI-SHU 360: Machine Learning</li>
                        <li>CSCI-SHU 361: Computer Security</li>
                        <li>CSCI-SHU 410: Software Engineering</li>
                        <br/>
                        <li>INTM-SHU 101: Interaction Lab</li>
                        <li>INTM-SHU 257: VFX in the Age of Virtual Production</li>
                        <li>INTM-SHU 303: Advanced Lab: Shaders</li>
                        <li>INTM-SHU 305: Advanced Seminar: Hello Metaverse</li>

                      </ul>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>
            <div className="divide-y-2 divide-dashed">
              <h3>Work Experiences</h3>
              <div className="not-prose dark:text-white pt-5">
                <Collapse ghost>
                  <Panel key="1"
                         header={
                           <>
                             <div className="flex justify-between">
                               <p className="font-bold">PayPal</p>
                               <p>Shanghai, China</p>
                             </div>
                             <div className="flex justify-between">
                               <p>Front-end Software Engineer Intern</p>
                               <p className="flex-shrink-0">06/2021-07/2022</p>
                             </div>
                           </>
                         }>
                    <ul>
                      <li>
                        - Constructed two data visualization platforms using TypeScript + React + Redux + ECharts, supported role-based access control, data filtering, and customized dashboard, deployed with Jenkins CI/CD pipelines, and serviced 2000+ users.
                      </li>
                      <li>
                        - Implemented an internal frontend library that exports ECharts graphs into editable PowerPoint graphs. Supported bar, line, pie, scatter charts, and the composite of them. Applied in two data visualization projects with more than 50 charts.
                      </li>
                      <li>
                        - Held a knowledge-sharing session on the application of frontend reactive programming (RxJS). Introduced its benefits and shortcomings in asynchronous data flow manipulation in React projects.
                      </li>
                    </ul>
                  </Panel>
                  <Panel key="2"
                         header={<>
                           <div className="flex justify-between">
                             <p className="font-bold">Yibei Investments</p>
                             <p>Shanghai, China</p>
                           </div>
                           <div className="flex justify-between">
                             <p>Software Engineer Intern</p>
                             <p className="flex-shrink-0">06/2020-09/2020</p>
                           </div>
                         </>}>
                    <ul>
                      <li>
                        - Implemented a web crawler with proxies for EastMoney stock community forum (a professional Chinese financial information platform) using Scrapy, BeautifulSoup, and Selenium for crawling, pandas for data cleaning, and MySQL for storage.
                      </li>
                      <li>
                        -	Developed an automatic hedging cost calculation and storage tool using Python and MySQL.
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </div>
            </div>
            <div className="divide-y-2 divide-dashed">
              <h3>Research and Projects</h3>
              <div className="not-prose pt-5">
                <Collapse ghost>
                  <Panel key="1"
                         header={<>
                           <div className="flex justify-between">
                             <p className="font-bold">
                               Capstone: NYU Shanghai Library Workflow Management System
                               <a href="https://github.com/NYUSHLibraryAccess/LibSense-server" className="text-amber-400"> [Code]</a>
                             </p>
                             <p>02/2022-05/2022</p>
                           </div>
                           <div className="flex justify-between">
                             <span>
                               Supervisor:&nbsp;
                               <a className="highlight-url" href="https://shanghai.nyu.edu/academics/faculty/directory/olivier-marin">Prof. Oliver Marin</a>
                               ,&nbsp;
                               <a className="highlight-url" href="https://library.nyu.edu/people/qinghua-xu/">Qinghua Xu</a>
                             </span>
                           </div>
                         </>}>
                    <ul>
                      <li>
                        -	Constructed a backend RESTful API and data processing service utilizing Python + FastAPI + Pandas. Supported library staff's daily usage to manage ordering workflow of 10,000 + books, across sites in Shanghai and New York.
                      </li>
                      <li>
                        - Implemented features like JWT-based user authentication, access control, and automated database backup to ensure data security. Supported caching and backend pagination to improve loading performance.
                      </li>
                    </ul>
                  </Panel>
                  <Panel key="2"
                         header={<>
                           <div className="flex justify-between">
                             <p className="font-bold">
                               Research: Extensible Mutation Operator in the PiTest Framework
                               <a href="https://github.com/Barrywww/DURF2021" className="text-amber-400"> [Code]</a>
                             </p>
                             <p>06/2021-05/2022</p>
                           </div>
                           <div className="flex justify-between">
                             <span>
                               Supervisor:&nbsp;
                               <a className="highlight-url" href="https://shanghai.nyu.edu/academics/faculty/directory/lihua-xu">Prof. Lihua Xu</a>
                               ,&nbsp;Collaborator:&nbsp;
                               <a className="highlight-url" href="https://harrilee.site/">Harry Lee</a>
                             </span>
                           </div>
                         </>}>
                    <ul>
                      <li>
                        - Investigated the application of mutation testing technology in the field of financial technology.
                      </li>
                      <li>
                        -	Created a customized mutation operator under the PiTest framework with Java ASM, which identifies a specific flaw code pattern, and applies mutation to it.
                      </li>
                      <li>
                        -	Collaborated with teammates, conducted test case validity experiments provided by an automated test generation suite.
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </div>
            </div>
            <div className="divide-dashed divide-y-2">
              <h3>Awards & Honors</h3>
              <div className="not-prose pt-5">
                <div className="flex justify-between">
                  <p className="font-bold">
                    Deans' Undergraduate Research Fund,&nbsp;<span className="font-medium">NYU Shanghai</span>
                  </p>
                  <p>05/2021</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold">
                    Deans' List for Academic Year,&nbsp;<span className="font-medium">NYU Shanghai</span>
                  </p>
                  <p>2020-2022</p>
                </div>
            </div>
            </div>
            <div className="divide-y-2 divide-dashed">
              <h3>Extracurricular Activities</h3>
              <div className="not-prose pt-5">
                <Collapse ghost>
                  <Panel key="1"
                         header={<>
                           <div className="flex justify-between">
                             <p className="font-bold">
                               Learning Assistant,&nbsp;<span className="font-medium">NYU Shanghai</span>
                             </p>
                             <p>06/2020-09/2022</p>
                           </div>
                           <div className="flex justify-between">
                             <span>
                               Course: Introduction to Computer Programming
                             </span>
                             <span>
                               Faculty: <a className="highlight-url" href="https://shanghai.nyu.edu/academics/faculty/directory/romain-corcolle">Prof. Romain Corcolle</a>
                             </span>
                           </div>
                         </>}>
                    <ul>
                      <li>
                        -	Provided in-class coding support to students, and timely feedback to the professor to facilitate teaching.
                      </li>
                      <li>
                        -	Held office hours weekly, provided instruction on class and recitation materials to students, and organized midterm and final review sessions. Provided more than 50 hours of tutoring over the semester.
                      </li>
                    </ul>
                  </Panel>
                  <Panel key="2"
                         header={<>
                           <div className="flex justify-between">
                             <p className="font-bold">
                               Hack the Pearl Modelling Contest,&nbsp;<span className="font-medium">HSBC | NYU Shanghai</span>
                             </p>
                             <p>04/2019-06/2019</p>
                           </div>
                           <div className="flex justify-between">
                             <span>
                               Collaborators: Alex Wang, Tony Lian, William Huang
                             </span>
                           </div>
                         </>}>
                    <ul>
                      <li>
                        -	Filtered, cleaned, and visualized 300,000+ real account data provided utilizing Pandas, matplotlib.
                      </li>
                      <li>
                        -	Selected features for data modeling and developed a neural network with PyTorch and Keras for final prediction.
                      </li>
                      <li>
                        -	Won "Most Exciting Data Analysis Award" with two teammates.
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden bottom-0 italic text-gray-400 dark:text-gray-500 text-sm min-w-full text-center">
        <a href="https://beian.miit.gov.cn/">蒙ICP备19005733号-3</a>
      </div>
    </div>
  )
}

export default App
