import React from "react";
import "./HomePage.css";
import { NavLink } from "react-router-dom";
import seBanner from "../../assets/se_banner.png";
import UoG from "../../assets/glasgow.png";
import seLogo from "../../assets/se_logo_white.png";

import career1 from "../../assets/career1.png";
import career2 from "../../assets/career2.png";
import curriculum from "../../assets/curriculum.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homeNavBar">
        <a href="#">About</a>
        <a href="#">Program</a>
        <a href="#">Classroom</a>
        <a href="#">Contact</a>
      </div>
      <img src={seBanner} alt="seBanner" className="seBanner" />

      <div className="homeBody">
        <div className="sectionAbout">
          <div className="paraImg">
            <div className="paragraph">
              <div className="leftTitle">What is Software Engineering?</div>
              <div>
                Software engineering (SE) is an engineering discipline
                concerning all aspects of software production, including
                software analysis, design, development, testing, and deployment.
                SE requires profound abstract and logical thinking and the
                application of mathematics, logic, and computer science in order
                to produce efficient and reliable software with the available
                resources.
              </div>
            </div>
            <img src={seLogo} alt="seLogo" className="seLogoHome" />
          </div>

          <div className="aboutBox">
            <div className="aboutField">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M96.8555 32.5391C97.4805 34.2383 96.9531 36.1328 95.6055 37.3438L87.1484 45.0391C87.3633 46.6602 87.4805 48.3203 87.4805 50C87.4805 51.6797 87.3633 53.3398 87.1484 54.9609L95.6055 62.6562C96.9531 63.8672 97.4805 65.7617 96.8555 67.4609C95.9961 69.7852 94.9609 72.0117 93.7695 74.1602L92.8515 75.7422C91.5625 77.8906 90.1172 79.9219 88.5351 81.8359C87.3828 83.2422 85.4687 83.7109 83.75 83.1641L72.8711 79.707C70.2539 81.7188 67.3633 83.3984 64.2773 84.668L61.8359 95.8203C61.4453 97.5977 60.0781 99.0039 58.2812 99.2969C55.5859 99.7461 52.8125 99.9805 49.9805 99.9805C47.1484 99.9805 44.375 99.7461 41.6797 99.2969C39.8828 99.0039 38.5156 97.5977 38.125 95.8203L35.6836 84.668C32.5976 83.3984 29.707 81.7188 27.0898 79.707L16.2305 83.1836C14.5117 83.7305 12.5976 83.2422 11.4453 81.8555C9.86327 79.9414 8.41796 77.9102 7.1289 75.7617L6.21093 74.1797C5.01952 72.0312 3.98436 69.8047 3.12499 67.4805C2.49999 65.7812 3.02733 63.8867 4.37499 62.6758L12.832 54.9805C12.6172 53.3398 12.5 51.6797 12.5 50C12.5 48.3203 12.6172 46.6602 12.832 45.0391L4.37499 37.3438C3.02733 36.1328 2.49999 34.2383 3.12499 32.5391C3.98436 30.2148 5.01952 27.9883 6.21093 25.8398L7.1289 24.2578C8.41796 22.1094 9.86327 20.0781 11.4453 18.1641C12.5976 16.7578 14.5117 16.2891 16.2305 16.8359L27.1094 20.293C29.7265 18.2812 32.6172 16.6016 35.7031 15.332L38.1445 4.17969C38.5351 2.40234 39.9023 0.996094 41.6992 0.703125C44.3945 0.234375 47.168 0 50 0C52.832 0 55.6055 0.234375 58.3008 0.683594C60.0976 0.976562 61.4648 2.38281 61.8555 4.16016L64.2969 15.3125C67.3828 16.582 70.2734 18.2617 72.8906 20.2734L83.7695 16.8164C85.4883 16.2695 87.4023 16.7578 88.5547 18.1445C90.1367 20.0586 91.582 22.0898 92.8711 24.2383L93.789 25.8203C94.9805 27.9688 96.0156 30.1953 96.875 32.5195L96.8555 32.5391ZM50 65.625C54.144 65.625 58.1183 63.9788 61.0485 61.0485C63.9788 58.1183 65.625 54.144 65.625 50C65.625 45.856 63.9788 41.8817 61.0485 38.9515C58.1183 36.0212 54.144 34.375 50 34.375C45.856 34.375 41.8817 36.0212 38.9514 38.9515C36.0212 41.8817 34.375 45.856 34.375 50C34.375 54.144 36.0212 58.1183 38.9514 61.0485C41.8817 63.9788 45.856 65.625 50 65.625Z"
                  fill="#293A4E"
                />
              </svg>
              <div className="fieldLine"></div>
              <div className="fieldText">Engineering</div>
            </div>
            <div className="aboutField">
              <svg
                width="150"
                height="100"
                viewBox="0 0 150 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M90 18.75V62.5H15V18.75H90ZM15 6.25C6.72656 6.25 0 11.8555 0 18.75V62.5C0 69.3945 6.72656 75 15 75H42.4922L39.9844 81.25H22.5C18.3516 81.25 15 84.043 15 87.5C15 90.957 18.3516 93.75 22.5 93.75H82.5C86.6484 93.75 90 90.957 90 87.5C90 84.043 86.6484 81.25 82.5 81.25H64.9922L62.4844 75H90C98.2734 75 105 69.3945 105 62.5V18.75C105 11.8555 98.2734 6.25 90 6.25H15ZM123.75 6.25C117.539 6.25 112.5 10.4492 112.5 15.625V84.375C112.5 89.5508 117.539 93.75 123.75 93.75H138.75C144.961 93.75 150 89.5508 150 84.375V15.625C150 10.4492 144.961 6.25 138.75 6.25H123.75ZM127.5 18.75H135C137.062 18.75 138.75 20.1562 138.75 21.875C138.75 23.5938 137.062 25 135 25H127.5C125.438 25 123.75 23.5938 123.75 21.875C123.75 20.1562 125.438 18.75 127.5 18.75ZM123.75 34.375C123.75 32.6562 125.438 31.25 127.5 31.25H135C137.062 31.25 138.75 32.6562 138.75 34.375C138.75 36.0938 137.062 37.5 135 37.5H127.5C125.438 37.5 123.75 36.0938 123.75 34.375ZM131.25 65.625C133.239 65.625 135.147 66.2835 136.553 67.4556C137.96 68.6277 138.75 70.2174 138.75 71.875C138.75 73.5326 137.96 75.1223 136.553 76.2944C135.147 77.4665 133.239 78.125 131.25 78.125C129.261 78.125 127.353 77.4665 125.947 76.2944C124.54 75.1223 123.75 73.5326 123.75 71.875C123.75 70.2174 124.54 68.6277 125.947 67.4556C127.353 66.2835 129.261 65.625 131.25 65.625Z"
                  fill="#293A4E"
                />
              </svg>
              <div className="fieldLine"></div>
              <div className="fieldText">software</div>
            </div>
            <div className="aboutField">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_779_813)">
                  <path
                    d="M80.1367 45.1172L82.3437 42.9102L75.7226 36.2891L63.5937 24.1602L56.9726 17.5391L54.7656 19.7461L50.3515 24.1602L11.4453 63.0664C9.41405 65.0976 7.92967 67.6172 7.10936 70.3711L0.195297 93.8867C-0.292984 95.5273 0.156235 97.3047 1.3867 98.5156C2.61717 99.7266 4.37498 100.176 6.01561 99.707L29.5117 92.793C32.2656 91.9726 34.7851 90.4883 36.8164 88.457L75.7226 49.5508L80.1367 45.1172ZM31.25 78.0078L29.4726 82.4414C28.6914 83.0469 27.8125 83.4961 26.875 83.7891L11.6015 88.2812L16.0937 73.0273C16.3672 72.0703 16.8359 71.1914 17.4414 70.4297L21.875 68.6523V74.9023C21.875 76.6211 23.2812 78.0273 25 78.0273H31.25V78.0078ZM70.8398 3.65234L68.0273 6.48437L63.6133 10.8984L61.3867 13.1055L68.0078 19.7266L80.1367 31.8555L86.7578 38.4766L88.9648 36.2695L93.3789 31.8555L96.2109 29.0234C101.094 24.1406 101.094 16.2305 96.2109 11.3477L88.5351 3.65234C83.6523 -1.23047 75.7422 -1.23047 70.8594 3.65234H70.8398ZM61.582 36.4648L33.457 64.5898C32.2461 65.8008 30.2539 65.8008 29.043 64.5898C27.832 63.3789 27.832 61.3867 29.043 60.1758L57.168 32.0508C58.3789 30.8398 60.3711 30.8398 61.582 32.0508C62.793 33.2617 62.793 35.2539 61.582 36.4648Z"
                    fill="#293A4E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_779_813">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="fieldLine"></div>
              <div className="fieldText">academic</div>
            </div>
          </div>

          <div className="SectionLine"></div>

          <div className="paragraph">
            <div className="centerTitle">Why study Software Engineering?</div>
            <div>
              <br />
              It is hard to overstate the ubiquity of software nowadays. Every
              computer system is governed by software. Almost every human
              activity involves software in some form. Undoubtedly software
              industry is one of the largest and fastest growing industries in
              the world. Consequently, skilled software engineers are in high
              demand worldwide. As software becomes more and more complex, the
              programming skills and the rudimentary knowledge of software
              engineering that students obtained from traditional computer
              science and computer engineering curriculums are insufficient. The
              development of real-world software applications requires the
              skills in analysing the problem domain and the customer's
              requirement and the skills in designing the software from the
              topmost level down to the implementation level. Moreover, a
              software engineer must be able to use proper tools, techniques,
              and methodologies in order to produce the software in an efficient
              manner
            </div>
          </div>

          <div className="SectionLine"></div>

          <div className="paraImg">
            <div className="paragraph">
              <div className="leftTitle">
                KMITL-Glasgow Double-Degree Program in Software Engineering
              </div>
              <div>
                <br />
                “A collaboration between KMITL and the University of Glasgow,
                United Kingdom” Students who have completed Year 2 of software
                engineering program at KMITL with GPA no less than 3.00 and the
                IELTS score of 6.5 will be able to continue their studies in
                Year 3 and 4 at the School of Computing Science, University of
                Glasgow.
                <br />
                <span>
                  *Additional fee may apply for double-degree program.
                </span>
              </div>
            </div>
            <img src={UoG} alt="UoG" className="UoG" />
          </div>

          <div className="SectionLine"></div>

          <div className="paragraph">
            <div className="leftTitle">Careers in Software Engineering</div>
            <div>
              <br />
              There are abundant career opportunities for graduates from the
              software engineering program.
              <li>
                Software engineers, software architects, and software developers
                on various platforms, including enterprise software, web
                applications, mobile applications, games, embedded applications,
                etc.
              </li>
              <li>Analysts and designers of IT systems, IT consultants </li>
              <li>Software entrepreneurs </li>
              With strong foundation in computer science, mathematics, and
              software engineering principles, graduates of the SE program may
              continue their studies at postgraduate level in various software
              engineering or computing related fields in universities worldwide.
            </div>
          </div>

          <div className="imageSphere">
            <img src={career1} alt="career" />
            <img src={career2} alt="career" />
          </div>


          <div className="sectionProgram">
            <div className="SectionLine"></div>
            <div className="SectionTitle">PROGRAM</div>
            <div className="SectionLine"></div>

            <div className="paragraph">
              <div className="curriculumTitle">
                B.Eng. in Software Engineering Program
              </div>
              <div className="curriculumParagraph">
                <br />
                The <span>B.Eng. in Software Engineering Program</span> is a
                4-year undergraduate program aiming at producing graduates who
                are capable of working confidently in the international software
                industry as well as pursuing postgraduate study and research in
                leading universities worldwide. The curriculum of the program is
                designed in accordance with the recent ACM/IEEE guideline for
                undergraduate curriculum in software engineering.
              </div>
            </div>

            <img src={curriculum} alt="curriculum" className="curriculumImg" />

            <div className="paragraph">
              <div className="leftTitle">Year 1 and Year 2</div>
              <div>
                In the first two years, the students will study basic courses in
                mathematics, computer science, and software engineering and
                develop their programming skills using various programming
                languages (including Python, C, C++, Java, etc.). Also, the
                students will be trained to communicate correctly and
                effectively. At the end of Year 2, every student is required to
                undertake an internship in a software company for 8 - 10 weeks.
                All the courses in the first two years will be held at the
                International College in the Bangkok Campus of KMITL.
              </div>
            </div>

            <div className="SectionLine"></div>

            <div className="paragraph">
              <div className="leftTitle">Year 3 and Year 4 (KMITL) </div>
              <div>
                In Year 3 and Year 4, the students
                will learn advanced topics in software engineering and important
                software development methodologies that are used in practice.
                The students will have opportunities to the apply the knowledge
                and skills they have acquired to conduct a team software project
                in Year 3 and a one-year research project in Year 4. Students
                entering Year 3 are required to take one of the following
                specializations: 
                
                <li>Enterprise Software Engineering - Specializing
                inlarge and complex software for enterprises and distributed
                systems </li>
                
                <li>Internet of Things - Specializing in the Internet of Things, including embedded and mobile systems </li>
                
                <li>Intelligent Systems - Specializing in applications of artificial
                intelligence and data science, including machine learning and
                Big Data </li>
                
                The study plans for these three specializations differ
                in some required courses. Also the students are recommended to
                toe work on their senior projects that utilize the knowledge of
                their respective specializations.
              </div>
            </div>

            <div className="SectionLine"></div>

            <div className="paragraph">
              <div className="leftTitle">Year 3 and Year 4 (KMITL-Glasgow Double-Degree Program)</div>
              <div>
              The students joining the KMITL-Glasgow Double-Degree Program will take courses in Years 3 and 4 in the Software Engineering program at the School of Computing Science, University of Glasgow.
              </div>
            </div>
          </div>

          <div className="sectionClassroom">
            <div className="SectionLine"></div>
            <div className="SectionTitle">CLASSROOM</div>
            <div className="SectionLine"></div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
