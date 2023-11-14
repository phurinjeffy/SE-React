import React from "react";
import "./HomePage.css";
import seBanner from "../../assets/se_banner.png";
import UoG from "../../assets/glasgow.png";
import seLogo from "../../assets/se_logo_white.png";
import career1 from "../../assets/career1.png";
import career2 from "../../assets/career2.png";
import curriculum from "../../assets/curriculum.png";
import classroom1 from "../../assets/classroom1.png";
import classroom2 from "../../assets/classroom2.png";
import classroom3 from "../../assets/classroom3.png";
import classroom4 from "../../assets/classroom4.png";
import classroom5 from "../../assets/classroom5.png";
import classroom6 from "../../assets/classroom6.png";
import facebookIcon from "../../assets/facebook.svg";
import kmitlIcon from "../../assets/kmitl.svg";
import engineeringIcon from "../../assets/engineering.svg";
import softwareIcon from "../../assets/software.svg";
import academicIcon from "../../assets/academic.svg";

const HomePage = () => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homePage">
      <div className="homeHeader">
        <a href="#about" onClick={() => scrollTo('about')}>
          About
        </a>
        <a href="#program" onClick={() => scrollTo('program')}>
          Program
        </a>
        <a href="#classroom" onClick={() => scrollTo('classroom')}>
          Classroom
        </a>
        <a href="#contact" onClick={() => scrollTo('contact')}>
          Contact
        </a>
      </div>
      <img src={seBanner} alt="seBanner" className="seBanner" />

      <div className="homeBody">
        <div id="about" className="sectionAbout">
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
              <img src={engineeringIcon} alt="engineering" />
              <div className="fieldLine"></div>
              <div className="fieldText">Engineering</div>
            </div>
            <div className="aboutField">
              <img src={softwareIcon} alt="software" />
              <div className="fieldLine"></div>
              <div className="fieldText">software</div>
            </div>
            <div className="aboutField">
              <img src={academicIcon} alt="academic" />
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
        </div>

        <div id="program" className="sectionProgram">
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
              4-year undergraduate program aiming at producing graduates who are
              capable of working confidently in the international software
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
              students will be trained to communicate correctly and effectively.
              At the end of Year 2, every student is required to undertake an
              internship in a software company for 8 - 10 weeks. All the courses
              in the first two years will be held at the International College
              in the Bangkok Campus of KMITL.
            </div>
          </div>

          <div className="SectionLine"></div>

          <div className="paragraph">
            <div className="leftTitle">Year 3 and Year 4 (KMITL) </div>
            <div>
              In Year 3 and Year 4, the students will learn advanced topics in
              software engineering and important software development
              methodologies that are used in practice. The students will have
              opportunities to the apply the knowledge and skills they have
              acquired to conduct a team software project in Year 3 and a
              one-year research project in Year 4. Students entering Year 3 are
              required to take one of the following specializations:
              <li>
                Enterprise Software Engineering - Specializing inlarge and
                complex software for enterprises and distributed systems{" "}
              </li>
              <li>
                Internet of Things - Specializing in the Internet of Things,
                including embedded and mobile systems{" "}
              </li>
              <li>
                Intelligent Systems - Specializing in applications of artificial
                intelligence and data science, including machine learning and
                Big Data{" "}
              </li>
              The study plans for these three specializations differ in some
              required courses. Also the students are recommended to toe work on
              their senior projects that utilize the knowledge of their
              respective specializations.
            </div>
          </div>

          <div className="SectionLine"></div>

          <div className="paragraph">
            <div className="leftTitle">
              Year 3 and Year 4 (KMITL-Glasgow Double-Degree Program)
            </div>
            <div>
              The students joining the KMITL-Glasgow Double-Degree Program will
              take courses in Years 3 and 4 in the Software Engineering program
              at the School of Computing Science, University of Glasgow.
            </div>
          </div>
        </div>

        <div id="classroom" className="sectionClassroom">
          <div className="SectionLine"></div>
          <div className="SectionTitle">CLASSROOM</div>
          <div className="SectionLine"></div>

          <div className="classroomContainer">
            <img src={classroom1} alt="classroom1" className="classroomImage" />
            <img src={classroom2} alt="classroom2" className="classroomImage" />
            <img src={classroom3} alt="classroom3" className="classroomImage" />
            <img src={classroom4} alt="classroom4" className="classroomImage" />
            <img src={classroom5} alt="classroom5" className="classroomImage" />
            <img src={classroom6} alt="classroom6" className="classroomImage" />
          </div>

          <div className="SectionLine"></div>
        </div>
      </div>

      <div className="homeFooter">
        <div id="contact" className="footerTitle">contact us</div>
        <div className="contactIcons">
          <a href="https://www.facebook.com/sekmitl/?locale=th_TH" target="_blank">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="https://www.se.kmitl.ac.th/" target="_blank">
            <img src={kmitlIcon} alt="kmitl" />
          </a>
        </div>
        <a className="backToTop" href="#" onClick={() => scrollTo('homeHeader')}>
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default HomePage;
