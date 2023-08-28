import React, { useCallback, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";
import { Link } from "react-router-dom";

const BlogList = () => {
  const dispatch = useDispatch();

  const { blog } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

  const blog1 = blog?.slice(0, 1) ?? [];
  const blog2 = blog?.slice(1, 2) ?? [];
  const blog3 = blog?.slice(2, 3) ?? [];
  const blog4 = blog?.slice(3, 4) ?? [];
  const blog5 = blog?.slice(0, 3) ?? [];

  return (
    <>
      <Homelayout>
        <section id="bloglist-head">
          <div className="midbox-inner  wiki-mk">
            <div className="bloglist">
              {blog1.map((e) => (
                <div className="bloglist-left" key={e.id}>
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/blog/${e.icon}`}
                    alt={e.name}
                  />
                  <div className="bloglist-box">
                    <Link to={`/blog/${e.slug}`}>
                      <h2>{e.name}</h2>
                    </Link>

                    {/* <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur ma Sed ut
                      perspiciatis Nemo
                    </p> */}
                    <div
                      dangerouslySetInnerHTML={{ __html: e.short_description }}
                    />
                  </div>
                </div>
              ))}

              <div className="bloglist-right">
                {blog2.map((e) => (
                  <div className="bloglist-box1" key={e.id}>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/blog/${e.icon}`}
                      alt={e.name}
                    />
                    <div className="bloglist-box">
                      <Link to={`/blog/${e.slug}`}>
                        <h2>{e.name}</h2>
                      </Link>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: e.short_description,
                        }}
                      />
                    </div>
                  </div>
                ))}
                <div className="bloglist-box2">
                  {blog3.map((e) => (
                    <div className="bloglist-box3" key={e.id}>
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/blog/${e.icon}`}
                        alt={e.name}
                      />
                      <div className="bloglist-box">
                        <Link to={`/blog/${e.slug}`}>
                          <h2>{e.name}</h2>
                        </Link>
                        {/* <div
                          dangerouslySetInnerHTML={{
                            __html: e.short_description,
                          }}
                        /> */}
                      </div>
                    </div>
                  ))}
                  {blog4.map((e) => (
                    <div className="bloglist-box4" key={e.id}>
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/blog/${e.icon}`}
                        alt={e.name}
                      />
                      <div className="bloglist-box">
                        <Link to={`/blog/${e.slug}`}>
                          <h2>{e.name}</h2>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bloglist-section">
          <div className="midbox-inner  wiki-mk">
            <div className="bloglist-itembox">
              <div className="bloglist-itemleft">
                <h3>Lorem ipsum dolor amet fugit</h3>
                <div className="bloglist-itemmid">
                  <div className="bloglist-leftbox">
                    <div className="bloglist-item">
                      <img src="images/2023/04/04/6.jpg" />
                      <h4>
                        Lorem ipsum dolor sit amet quia aspernatur odit sed
                        consequntr
                      </h4>
                      <div className="blog-datalist">Feb 12, 2023</div>
                      <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur
                      </p>
                    </div>
                  </div>

                  <div className="bloglist-midbox">
                    <ul>
                      <li>
                        <div className="blogright-img">
                          <img src="images/2023/04/04/7.jpg" />
                        </div>
                        <div className="blogright-details">
                          <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                          <div className="blog-datalist">Feb 12, 2023</div>
                        </div>
                      </li>

                      <li>
                        <div className="blogright-img">
                          <img src="images/2023/04/04/8.jpg" />
                        </div>
                        <div className="blogright-details">
                          <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                          <div className="blog-datalist">Feb 12, 2023</div>
                        </div>
                      </li>

                      <li>
                        <div className="blogright-img">
                          <img src="images/2023/04/04/9.jpg" />
                        </div>
                        <div className="blogright-details">
                          <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                          <div className="blog-datalist">Feb 12, 2023</div>
                        </div>
                      </li>

                      <li>
                        <div className="blogright-img">
                          <img src="images/2023/04/04/10.jpg" />
                        </div>
                        <div className="blogright-details">
                          <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                          <div className="blog-datalist">Feb 12, 2023</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bloglist-itemright">
                <img src="images/2023/04/04/5.jpg" alt="" />
                <div className="bloglist-box">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur ma Sed ut perspiciatis
                    Nemo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bloglist-section">
          <div className="midbox-inner  wiki-mk">
            <div className="bloglist-itembox">
              <div className="bloglist-itemleft">
                <h3>Lorem ipsum dolor amet fugit</h3>
                <div className="bloglist-itemmid">
                  <div className="bloglist-item">
                    <img src="images/2023/04/04/6.jpg" />
                    <h4>
                      Lorem ipsum dolor sit amet quia aspernatur odit sed
                      consequntr
                    </h4>
                    <div className="blog-datalist">Feb 12, 2023</div>
                    <p>
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur
                    </p>
                  </div>
                  <div className="bloglist-item">
                    <img src="images/2023/04/04/6.jpg" />
                    <h4>
                      Lorem ipsum dolor sit amet quia aspernatur odit sed
                      consequntr
                    </h4>
                    <div className="blog-datalist">Feb 12, 2023</div>
                    <p>
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur
                    </p>
                  </div>
                </div>

                <div className="bloglist-midlist">
                  <ul>
                    <li>
                      <div className="blogright-img">
                        <img src="images/2023/04/04/7.jpg" />
                      </div>
                      <div className="blogright-details">
                        <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                        <div className="blog-datalist">Feb 12, 2023</div>
                      </div>
                    </li>

                    <li>
                      <div className="blogright-img">
                        <img src="images/2023/04/04/8.jpg" />
                      </div>
                      <div className="blogright-details">
                        <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                        <div className="blog-datalist">Feb 12, 2023</div>
                      </div>
                    </li>

                    <li>
                      <div className="blogright-img">
                        <img src="images/2023/04/04/9.jpg" />
                      </div>
                      <div className="blogright-details">
                        <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                        <div className="blog-datalist">Feb 12, 2023</div>
                      </div>
                    </li>

                    <li>
                      <div className="blogright-img">
                        <img src="images/2023/04/04/10.jpg" />
                      </div>
                      <div className="blogright-details">
                        <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                        <div className="blog-datalist">Feb 12, 2023</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bloglist-midinner">
                <h3>Lorem ipsum </h3>
                <div className="bloglist-itemmid-right">
                  <div className="bloglist-item">
                    <img src="images/2023/04/04/11.jpg" />
                    <h4>Lorem ipsum dolor amet quia sit aspernatur</h4>
                  </div>
                  <div className="bloglist-item">
                    <img src="images/2023/04/04/12.jpg" />
                    <h4>Lorem ipsum dolor amet quia sit aspernatur</h4>
                  </div>
                  <div className="bloglist-item">
                    <img src="images/2023/04/04/13.jpg" />
                    <h4>Lorem ipsum dolor amet quia sit aspernatur</h4>
                  </div>
                  <div className="bloglist-item">
                    <img src="images/2023/04/04/14.jpg" />
                    <h4>Lorem ipsum dolor amet quia sit aspernatur</h4>
                  </div>
                  <div className="bloglist-item">
                    <img src="images/2023/04/04/15.jpg" />
                    <h4>Lorem ipsum dolor amet quia sit aspernatur</h4>
                  </div>
                  <div className="bloglist-item">
                    <img src="images/2023/04/04/16.jpg" />
                    <h4>Lorem ipsum dolor amet quia sit aspernatur</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bloglist-section">
          <div className="midbox-inner  wiki-mk">
            <div className="bloglist-itembox">
              <div className="bloglist-itemleft">
                <h3>Lorem ipsum dolor amet fugit</h3>
                <div className="bloglist-itemmid">
                  {blog5.map((e) => (
                    <div className="bloglist-item" key={e.id}>
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/blog/${e.icon}`}
                        alt={e.name}
                        style={{ width: "300px", height: "200px" }}
                      />
                      <Link to={`/blog/${e.slug}`}>
                        <h4>{e.name}</h4>
                      </Link>
                      <div className="blog-datalist">Feb 12, 2023</div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: e.short_description,
                        }}
                      />
                    </div>
                  ))}
                  {/* <div className="bloglist-item">
                    <img src="images/2023/04/04/17.jpg" />
                    <h4>
                      Lorem ipsum dolor sit amet quia aspernatur odit sed
                      consequntr
                    </h4>
                    <div className="blog-datalist">Feb 12, 2023</div>
                    <p>
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur
                    </p>
                  </div>
                  <div className="bloglist-item">
                    <img src="images/2023/04/04/18.jpg" />
                    <h4>
                      Lorem ipsum dolor sit amet quia aspernatur odit sed
                      consequntr
                    </h4>
                    <div className="blog-datalist">Feb 12, 2023</div>
                    <p>
                      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                      et. Sunt qui esse pariatur
                    </p>
                  </div> */}
                </div>
{/* 
                <div className="bloglist-itembottom">
                  <h3>Lorem ipsum dolor amet fugit</h3>
                  <div className="bloglist-itemmid">
                    <div className="bloglist-leftbox">
                      <div className="bloglist-item">
                        <img src="images/2023/04/04/22.jpg" />
                        <h4>
                          Lorem ipsum dolor sit amet quia aspernatur odit sed
                          consequntr
                        </h4>
                        <div className="blog-datalist">Feb 12, 2023</div>
                        <p>
                          Aliqua id fugiat nostrud irure ex duis ea quis id quis
                          ad et. Sunt qui esse pariatur
                        </p>
                      </div>
                    </div>

                    <div className="bloglist-midbox">
                      <ul>
                        <li>
                          <div className="blogright-img">
                            <img src="images/2023/04/04/23.jpg" />
                          </div>
                          <div className="blogright-details">
                            <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                            <div className="blog-datalist">Feb 12, 2023</div>
                          </div>
                        </li>

                        <li>
                          <div className="blogright-img">
                            <img src="images/2023/04/04/24.jpg" />
                          </div>
                          <div className="blogright-details">
                            <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                            <div className="blog-datalist">Feb 12, 2023</div>
                          </div>
                        </li>

                        <li>
                          <div className="blogright-img">
                            <img src="images/2023/04/04/25.jpg" />
                          </div>
                          <div className="blogright-details">
                            <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                            <div className="blog-datalist">Feb 12, 2023</div>
                          </div>
                        </li>

                        <li>
                          <div className="blogright-img">
                            <img src="images/2023/04/04/26.jpg" />
                          </div>
                          <div className="blogright-details">
                            <h4>Lorem ipsum dolor sit amet lorem sit amet </h4>
                            <div className="blog-datalist">Feb 12, 2023</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* <div className="bloglist-rightbottom">
                <h3>Lorem ipsum </h3>
                <div className="bloglist-item">
                  <img src="images/2023/04/04/20.jpg" />
                  <h4>
                    Lorem ipsum dolor sit amet quia aspernatur odit sed
                    consequntr
                  </h4>
                  <div className="blog-datalist">Feb 12, 2023</div>
                  <p>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur
                  </p>
                </div>

                <div className="bloglist-item">
                  <img src="images/2023/04/04/21.jpg" />
                  <h4>
                    Lorem ipsum dolor sit amet quia aspernatur odit sed
                    consequntr
                  </h4>
                  <div className="blog-datalist">Feb 12, 2023</div>
                  <p>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* <section id="newslette-section">
          <div className="midbox-inner  wiki-mk">
            <div className="newslette-box">
              <div className="newslette-left">
                <h2>Sign up to our Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim minim
                </p>
              </div>
              <div className="newslette-right">
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
            </div>
          </div>
        </section> */}
      </Homelayout>
    </>
  );
};

export default BlogList;
