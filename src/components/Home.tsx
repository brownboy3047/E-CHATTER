import { Link } from "react-router-dom";

//components
import LandingCard from "./LandingCard";

//react icon
import { BsGraphUpArrow, BsFillPeopleFill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";

//style
import "./Home.css";

//img
import hero_two from "../assets/hero_two.png";
import hero_three from "../assets/hero_three.png";
import hero_four from "../assets/hero_four.png";
import hero_five from "../assets/hero_five.png";
import hero_six from "../assets/hero_six.png";

const Home = () => {
  return (
    <div className="landing">
      <header className="landing_hero">
        <div className="landing_hero_info">
          <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>

          <p>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>

          <Link to="/register">Get started</Link>
        </div>
      </header>

      <main>
        <section className="first_section">
          <div className="first_section_info">
            <h2>About Chatter</h2>

            <p>
              Chatter is a multi-functional platform where authors and readers
              can have access <br />
              to their own content. It aims to be a traditional bookworm’s
              heaven and a blog to <br />
              get access to more text based content. Our vision is to foster an
              inclusive and <br /> vibrant community where diversity is
              celebrated. We encourage open-mindedness <br /> and respect for
              all individuals, regardless of their backgrounds or beliefs.
              <br /> By promoting dialogue and understanding, we strive
            </p>
          </div>

          <div className="first_section_img">
            <img src={hero_two} alt="hero two image" />
          </div>
        </section>

        <section className="second_section">
          <div className="second_section_info">
            <h3>Why you should join chatter</h3>

            <p>
              Our goal is to make writers and readers see our platform as their
              next heaven for blogging, ensuring ease in interactions, <br />{" "}
              connecting with like-minded peers, have access to favorite content
              based on interests and able to communicate your great <br /> ideas
              with people
            </p>
          </div>

          <div className="second_section_card">
            <LandingCard>
              <div>
                <BsGraphUpArrow className="icon" />
              </div>

              <h2>Analytics</h2>
              <p>
                Analytics to track the number <br />
                of views, likes and comment and <br />
                also analyze the performance of <br />
                your articles over a period of time
              </p>
            </LandingCard>

            <LandingCard>
              <div>
                <BsFillPeopleFill className="icon" />
              </div>

              <h2>Social interactions</h2>
              <p>
                Users on the platform can <br />
                interact with posts they like, <br />
                comment and engage in <br />
                discussions
              </p>
            </LandingCard>

            <LandingCard>
              <div>
                <GrNotes className="icon" />
              </div>

              <h2>Analytics</h2>
              <p>
                Write nice and appealing with <br />
                our in-built markdown, a rich <br />
                text editor
              </p>
            </LandingCard>
          </div>
        </section>

        <section className="third_section">
          <div className="third_section_img">
            <img src={hero_three} alt="hero three image" />
          </div>

          <div className="third_section_info">
            <p className="text_one">
              "Chatter has become an integral part of my online experience. As a
              user of this incredible blogging platform, <br /> I have
              discovered a vibrant community of individuals who are passionate
              about sharing their ideas and <br /> engaging in thoughtful
              discussions.”
            </p>

            <p className="text_two">
              <b>Adebobola Muhydeen,</b> Software developer at Apple
            </p>

            <Link to="/register">Join chatter</Link>
          </div>
        </section>

        <section className="fourth_section">
          <div className="fourth_section_img">
            <div className="one">
              <img src={hero_four} alt="" />
              <img src={hero_five} alt="" />
            </div>

            <div className="two">
              <img src={hero_six} alt="" />
            </div>
          </div>

          <div className="fourth_section_info">
            <h2>
              Write, read and connect <br /> with great minds on chatter
            </h2>

            <p>
              Share people your great ideas, and also read write-ups based on
              <br />
              your interests. connect with people of same interests and goals
            </p>

            <Link to="/register">Get started</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
