import React from "react";

const Home = () => {
  return (
		<section>
      <div class="pusher">
        <div id="bg-home" class=" pusher inverted vertical masthead ui center aligned segment">
          <div id="fix-nav">
            <div id="nav" class="ui container">
              <div class="ui large secondary inverted pointing menu">
                <a class="toc item"><i class="sidebar icon" /></a>
                <a class="active item">i9Dev</a>
                <a class="item" href="#howItWork">How it works</a>
                <a class="item">Company</a>
                <a class="item">Careers</a>
                <div class="right item">
                  <a class="ui inverted button">Log in</a>
                  <a class="ui inverted button">Sign Up</a>
                </div>
              </div>
            </div>
          </div>

          <div class="ui text container">
            <h1 class="ui inverted header">
              The best place to create your portfolio or MVP.
            </h1>
            <h2>Dev or Enterprise?</h2>
            <div class="ui huge primary button">
              Get Started! <i class="right arrow icon" />
            </div>
          </div>
        </div>

				<div id="howItWork"class="ui vertical stripe segment">
          <div class="ui middle aligned stackable grid container">
            <div class="row">
              <div class="eight wide column">
                <h3 class="ui header">We Help Devs to create a portfolio</h3>
                <p>
                  Here you can find enterprises who needs your skills to create
                  a MVP. They give you the ideias and you make the code.
                </p>
                <h3 class="ui header">We Help enterprises to get their MVP.</h3>
                <p>
                  Yes that's right, you come with ideias and the devs make their
                  magic, in change, they can use as portfolio.
                </p>
              </div>
              <div class="six wide right floated column">
                <img
                  src="/images/image-profile/perfil-resilencia.jpg"
                  class="ui large bordered rounded image"
                />
              </div>
            </div>
            <div class="row">
              <div class="center aligned column">
                <a class="ui huge button">Check Them Out</a>
              </div>
            </div>
          </div>
        </div>

        <div class="ui vertical stripe quote segment">
          <div class="ui equal width stackable internally celled grid">
            <div class="center aligned row">
              <div class="column">
                <h3>"What a Company"</h3>
                <p>That is what they all say about us</p>
              </div>
              <div class="column">
                <h3>"I shouldn't have gone with their competitor."</h3>
                <p>
                  <img src="/images/icons/happy.svg" class="ui avatar image"
                  />{" "}
                  <b>Nan</b>Chief Fun Officer Acme Toys
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="ui vertical stripe segment">
          <div class="ui text container">
            <h3 class="ui header">Breaking The Grid, Grabs Your Attention</h3>
            <p>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <a class="ui large button">Read More</a>
            <h4 class="ui horizontal header divider">
              <a href="#">Case Studies</a>
            </h4>
            <h3 class="ui header">Did We Tell You About Our Bananas?</h3>
            <p>
              Yes I know you probably disregarded the earlier boasts as
              non-sequitur filler content, but its really true. It took years of
              gene splicing and combinatory DNA research, but our bananas can
              really dance.
            </p>
            <a class="ui large button">I'm Still Quite Interested</a>
          </div>
        </div>

        <div class="ui inverted vertical footer segment">
          <div class="ui container">
            <div class="ui stackable inverted divided equal height stackable grid">
              <div class="three wide column">
                <h4 class="ui inverted header">About</h4>
                <div class="ui inverted link list">
                  <a href="#" class="item">
                    Sitemap
                  </a>
                  <a href="#" class="item">
                    Contact Us
                  </a>
                  <a href="#" class="item">
                    Religious Ceremonies
                  </a>
                  <a href="#" class="item">
                    Gazebo Plans
                  </a>
                </div>
              </div>
              <div class="three wide column">
                <h4 class="ui inverted header">Services</h4>
                <div class="ui inverted link list">
                  <a href="#" class="item">
                    Banana Pre-Order
                  </a>
                  <a href="#" class="item">
                    DNA FAQ
                  </a>
                  <a href="#" class="item">
                    How To Access
                  </a>
                  <a href="#" class="item">
                    Favorite X-Men
                  </a>
                </div>
              </div>
              <div class="seven wide column">
                <h4 class="ui inverted header">Footer Header</h4>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
