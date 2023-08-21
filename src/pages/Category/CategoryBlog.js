import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import dottedImg from "../../assests/images/2023/01/dotted.png";
import icon from "../../assests/images/2023/01/blog-more.png";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1.6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1.6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CategoryBlog = ({ blog }) => {
  let blogSection = null;
  if (blog.length > 0) {
    blogSection = (
      <>
        <div className="homeblog-right">
          <div className="owl-slider">
            <div id="blog">
              <Carousel
                responsive={responsive}
                arrows={false}
                itemClass="carousel-item"
              >
                {blog &&
                  blog.map((e) => (
                    <div className="carousel-item" key={e.id}>
                      <div className="blog-item">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}/blog/${e.icon}`}
                          alt={e.slug}
                        />
                        <h4>{e.name}</h4>
                        {/* <div className="blog-drop">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore Ut
                            enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip
                          </div> */}
                        <div
                          className="blog-drop"
                          dangerouslySetInnerHTML={{
                            __html: e.short_description,
                          }}
                        />
                        <div className="blog-text">
                          <div className="category-blog">
                            <span>
                              <img src={dottedImg} alt="icon" />
                            </span>
                            Category
                          </div>
                          <div className="time-blog">
                            <span>
                              <img src={dottedImg} alt="icon1" />
                            </span>
                            12 min read
                          </div>
                          <Link to={`/blog/${e.slug}`}>
                            <img src={icon} alt="icon-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </Carousel>
            </div>
          </div>
          <Link className="see-more" to="/">
            View more resources{" "}
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <section id="blog-home">
        <div className="midbox-inner  wiki-mk">
          <div className="blog-homebox">
            <div className="homeblog-left">
              <h2>Helpful Resources</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur ma Sed ut perspiciatis Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit..
              </p>

              <h3>Sign up to get latest updates</h3>
              <div className="latest-news">
                <input
                  className="latest-newsbox"
                  type="text"
                  placeholder="Email address"
                  name="name"
                  required=""
                />
                <button type="submit" name="en" className="news-button">
                  Sign Up <img src="images/2023/01/arrow-w.png" alt="" />
                </button>
              </div>
            </div>
            {blogSection}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryBlog;
