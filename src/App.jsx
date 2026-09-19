import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import logo from "./assets/logo.png";
import london from "./assets/london.png";
import newyork from "./assets/newyork.png";
import washington from "./assets/washington.png";
import library from "./assets/library.png";
import basketball from "./assets/basketball.png";
import cafeteria from "./assets/cafeteria.png";
import background from "./assets/background.jpg";
import user1 from "./assets/user1.jpg";
import user2 from "./assets/user2.jpg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>             
            {/* HERO / HOME SECTION */}
            <section className="hero" id="home">
              
              {/* Navigation */}

            <header className="header">

                <a href="#home" className="logo">
                    <img src={logo} alt="logo"/>
                </a>

                {/* Mobile menu button */}

                <button className="menu-toggle" aria-label="Open navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>

                <nav className="nav">

                    <a href="#home">HOME</a>

                    <a href="#about">ABOUT</a>

                    <a href="#courses">COURSE</a>

                    <a href="#blog">BLOG</a>

                    <a href="#contact">CONTACT</a>

                </nav>

            </header>


            {/* Hero Content */}

            <div className="hero-content">

                <h1>World's Biggest University</h1>

                <p>
                    Making website is now one of the easiest things in the world.
                    You just need to learn HTML, CSS,<br/>
                    Javascript and you are good to go.
                </p>

                <a href="#courses" className="hero-btn">
                    Visit Us to Know More
                </a>

            </div>

        </section>



        {/* =====================================================
            COURSES SECTION
        ===================================================== */}

        <section className="courses section" id="courses">

            <div className="section-title">

                <h2>Courses We Offer</h2>

                <p>
                    World University provides quality education and professional
                    development opportunities for your academic journey.
                </p>

            </div>


            <div className="courses-container">


                {/* Card 1 */}

                <div className="course-card">

                    <h3>INTERMEDIATE</h3>

                    <p>
                        Our intermediate programs provide students with a strong
                        academic foundation and prepare them for higher education,
                        professional training, and future career opportunities.
                    </p>

                </div>


                {/* Card 2 */}

                <div className="course-card">

                    <h3>DEGREE</h3>

                    <p>
                        Our undergraduate degree programs combine academic knowledge,
                        practical learning, and professional development to prepare
                        students for successful careers and meaningful contributions
                        to society.
                    </p>

                </div>


                {/* Card 3 */}

                <div className="course-card">

                    <h3>POST GRADUATE</h3>

                    <p>
                        Our postgraduate programs are designed for graduates who want
                        to advance their knowledge, develop specialist expertise,
                        conduct research, and prepare for leadership roles.
                    </p>

                </div>

            </div>

        </section>



        {/* =====================================================
            GLOBAL CAMPUS
        ===================================================== */}

        <section className="campus section">

            <div className="section-title">

                <h2>Our Global Campus</h2>

                <p>
                    We have our campuses all over the world.
                </p>

            </div>


            <div className="campus-container">


                {/* London */}

                <div className="campus-card">

                    <img
                        src={london} alt="london"
                    />

                    <div className="campus-overlay">

                        <h3>LONDON</h3>

                    </div>

                </div>


                {/* New York */}

                <div className="campus-card">

                    <img
                        src={newyork} alt="newyork"
                    />

                    <div className="campus-overlay">

                        <h3>NEW YORK</h3>

                    </div>

                </div>


                {/* Washington */}

                <div className="campus-card">

                    <img
                        src={washington} alt="washington"
                    />

                    <div className="campus-overlay">

                        <h3>WASHINGTON</h3>

                    </div>

                </div>

            </div>

        </section>



        {/* =====================================================
            FACILITIES SECTION
        ===================================================== */}

        <section className="facilities section">

            <div className="section-title">

                <h2>Our Facilities</h2>

                <p>
                    We provide modern facilities to support learning,
                    recreation and student development.
                </p>

            </div>


            <div className="facilities-container">


                {/* Facility 1 */}

                <div className="facility-card">

                    <img
                        src={library}
                        alt="University Library"
                    />

                    <h3>World Class Library</h3>

                    <p>
                        Our library provides students with access to books,
                        digital resources and a comfortable environment for
                        learning and research.
                    </p>

                </div>


                {/* Facility 2 */} 

                <div className="facility-card">

                    <img
                        src={basketball}
                        alt="University Playground"
                    />

                    <h3>Largest Play Ground</h3>

                    <p>
                        Our recreational facilities provide students with
                        opportunities to participate in sports, exercise
                        and other activities.
                    </p>

                </div>


                {/* Facility 3 */}

                <div className="facility-card">

                    <img
                        src={cafeteria}
                        alt="University Cafeteria"
                    />

                    <h3>Tasty and Healthy Food</h3>

                    <p>
                        Our cafeteria provides students with a comfortable
                        environment and a variety of meals and refreshments.
                    </p>

                </div>

            </div>

        </section>



        {/* =====================================================
            ABOUT SECTION
        ===================================================== */}

        <section className="about section" id="about">

            <div className="about-container">


                {/* Text */}

                <div className="about-text">

                    <span className="small-heading">
                        ABOUT OUR UNIVERSITY
                    </span>

                    <h2>
                        We Are The World's Largest University
                    </h2>

                    <p>
                        World University is committed to providing students
                        with quality education, practical skills and opportunities
                        for personal and professional development.
                    </p>

                    <p>
                        Our learning environment encourages creativity,
                        innovation, research and collaboration while preparing
                        students to make meaningful contributions to society.
                    </p>

                    <a href="#contact" className="about-btn">
                        EXPLORE MORE
                    </a>

                </div>


                {/* Image */}

                <div className="about-image">

                    <img
                        src={background}
                        alt="Students at World University"
                    />

                </div>

            </div>

        </section>



        {/* =====================================================
            TESTIMONIALS
        ===================================================== */}

        <section className="testimonials section">

            <div className="section-title">

                <h2>What Our Students Say</h2>

                <p>
                    Hear from students who have experienced life at
                    World University.
                </p>

            </div>


            <div className="testimonial-container">


                {/* Testimonial 1 */}

                <div className="testimonial-card">

                    <img
                        src={user1}
                        alt="Student testimonial"
                    />

                    <div className="testimonial-content">

                        <p>
                            World University has given me an excellent learning
                            experience. The lecturers are supportive and the
                            environment has helped me grow academically.
                        </p>

                        <h3>Christine Berkley</h3>

                        <div className="stars">

                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className    ="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>

                        </div>

                    </div>

                </div>



                {/* Testimonial 2 */}

                <div className="testimonial-card">

                    <img
                        src={user2}
                        alt="Student testimonial"
                    />

                    <div className="testimonial-content">

                        <p>
                            My experience at World University has been
                            wonderful. I have developed new skills and made
                            valuable connections during my studies.
                        </p>

                        <h3>David Byer</h3>

                        <div className="stars">

                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>

                        </div>

                    </div>

                </div>

            </div>

        </section>



        {/* =====================================================
            CALL TO ACTION
        ===================================================== */}

        <section className="cta" id="blog">

            <div className="cta-overlay"></div>

            <div className="cta-content">

                <h2>
                    Enroll For Our Various Online Courses
                    <br/>
                    Anywhere From The World
                </h2>

                <a href="#contact" className="cta-btn">
                    CONTACT US
                </a>

            </div>

        </section>



        {/* =====================================================
            CONTACT SECTION
        ===================================================== */}

        <section className="contact section" id="contact">

            <div className="section-title">

                <h2>Get In Touch With Us</h2>

                <p>
                    We would love to hear from you. Contact us for more
                    information about our courses and programs.
                </p>

            </div>


            <div className="contact-container">


                <div className="contact-box">

                    <i className="fa-solid fa-location-dot"></i>

                    <h3>Our Location</h3>

                    <p>
                        University Road, World City
                    </p>

                </div>


                <div className="contact-box">

                    <i className="fa-solid fa-phone"></i>

                    <h3>Phone Number</h3>

                    <p>
                        +234 800 000 0000
                    </p>

                </div>


                <div className="contact-box">

                    <i className="fa-solid fa-envelope"></i>

                    <h3>Email Address</h3>

                    <p>
                        info@worlduniversity.com
                    </p>

                </div>

            </div>

        </section>



        {/* =====================================================
          FOOTER
        ===================================================== */}

        <footer className="footer">

          <h3>About World University</h3>

          <p>
              World University is dedicated to providing quality education,
              developing future leaders and creating opportunities for students
              around the world.
          </p>


          <div className="social-icons">

              <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a href="#">
                  <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
              </a>

          </div>


          <p className="copyright">
              © 2026 World University. All Rights Reserved.
          </p>

        </footer>      
    </div>
  )
}

export default App
