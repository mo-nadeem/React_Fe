import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const Blog = () => {
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

            <div className="homeblog-right">
              <div className="owl-slider">
                <div id="blog">
                  <Carousel
                    responsive={responsive}
                    arrows={false}
                    itemClass="carousel-item"
                  >
                    <div className="carousel-item" style={{width:"357px" }}>
                      <div className="blog-item">
                        <img src="images/2023/01/10/1.jpg" />
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <div className="blog-drop">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore Ut
                          enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip
                        </div>
                        <div className="blog-text">
                          <div className="category-blog">
                            <span>
                              <img src="images/2023/01/dotted.png" />
                            </span>
                            Category
                          </div>
                          <div className="time-blog">
                            <span>
                              <img src="images/2023/01/dotted.png" />
                            </span>
                            12 min read
                          </div>
                          <a href="#">
                            <img src="images/2023/01/blog-more.png" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item" style={{width:"357px" }}>
                      <div className="blog-item">
                        <img src="images/2023/01/10/1.jpg" />
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <div className="blog-drop">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore Ut
                          enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip
                        </div>
                        <div className="blog-text">
                          <div className="category-blog">
                            <span>
                              <img src="images/2023/01/dotted.png" />
                            </span>
                            Category
                          </div>
                          <div className="time-blog">
                            <span>
                              <img src="images/2023/01/dotted.png" />
                            </span>
                            12 min read
                          </div>
                          <a href="#">
                            <img src="images/2023/01/blog-more.png" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item" style={{width:"357px" }}>
                      <div className="blog-item">
                        <img src="images/2023/01/10/1.jpg" />
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <div className="blog-drop">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore Ut
                          enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip
                        </div>
                        <div className="blog-text">
                          <div className="category-blog">
                            <span>
                              <img src="images/2023/01/dotted.png" />
                            </span>
                            Category
                          </div>
                          <div className="time-blog">
                            <span>
                              <img src="images/2023/01/dotted.png" />
                            </span>
                            12 min read
                          </div>
                          <a href="#">
                            <img src="images/2023/01/blog-more.png" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item" style={{width:"357px" }}>
                      <div className="blog-item">
                        <img src="images/2023/01/10/1.jpg" />
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <div className="blog-drop">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore Ut
                          enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip
                        </div>
                        <div className="blog-text">
                          <div className="category-blog">
                            <span>
                              <img src="images/2023/01/dotted.png" />
                            </span>
                            Category
                          </div>
                          <div className="time-blog">
                            <span>
                              <img src="images/2023/01/dotted.png" />
                            </span>
                            12 min read
                          </div>
                          <a href="#">
                            <img src="images/2023/01/blog-more.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
              <a className="see-more" href="#">
                View more resources{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
