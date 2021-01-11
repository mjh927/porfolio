import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleFirstTab = (e) => {
      if (e.key === "Tab") {
        document.body.classList.add("user-is-tabbing");

        window.removeEventListener("keydown", handleFirstTab);
        window.addEventListener("mousedown", handleMouseDownOnce);
      }
    };

    const handleMouseDownOnce = () => {
      document.body.classList.remove("user-is-tabbing");

      window.removeEventListener("mousedown", handleMouseDownOnce);
      window.addEventListener("keydown", handleFirstTab);
    };

    window.addEventListener("keydown", handleFirstTab);

    const backToTopButton = document.querySelector(".back-to-top");
    console.log(backToTopButton, "back");
    let isBackToTopRendered = false;

    let alterStyles = (isBackToTopRendered) => {
      backToTopButton.style.visibility = isBackToTopRendered
        ? "visible"
        : "hidden";
      backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
      backToTopButton.style.transform = isBackToTopRendered
        ? "scale(1)"
        : "scale(0)";
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        isBackToTopRendered = true;
        alterStyles(isBackToTopRendered);
      } else {
        isBackToTopRendered = false;
        alterStyles(isBackToTopRendered);
      }
    });
  }, []);

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="./images/favicon.png"
        />

        {/* <!-- Put your site title here --> */}
        <title>PORTFOLIO | Joon, Fullstack developer</title>

        <meta
          name="description"
          content="Portfolio of Joon, fullstack developer"
        />
        <meta
          name="keywords"
          content="react, react native, node.js, next.js, mongodb, graphql, apollo"
        />
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        {/* <!-- ***** Header ***** --> */}
        <header className="header" role="banner" id="top">
          <div className="row">
            <nav className="nav" role="navigation">
              <ul className="nav__items">
                <li className="nav__item">
                  <a href="#work" className="nav__link">
                    Portfolio
                  </a>
                </li>
                {/* <li className="nav__item">
                  <a href="#clients" className="nav__link">
                    Clients
                  </a>
                </li> */}
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__text-box row">
            <div className="header__text">
              <h1 className="heading-primary">
                {/* 내 이름 */}
                <span>Joon Maeng</span>
              </h1>
              {/* 내 소개 */}
              <p>안녕하세요. 친화력 좋은 좋은 개발자 맹주훈입니다.</p>
              <a href="#contact" className="btn btn--pink">
                연락하기
              </a>
            </div>
          </div>
        </header>

        <main role="main">
          {/* <!-- ***** Work ***** --> */}

          {/* 픽홈 프론트엔드 */}
          <section className="work" id="work">
            <div className="row">
              <h2>My Work</h2>
              <div className="work__boxes">
                {/* <!-- Each div with the work__box className is a project. --> */}

                <div className="work__box">
                  <div className="work__text">
                    <h3>FIXHOME FRONTEND</h3>

                    <p>
                      집수리 마켓플레이스 웹. Next.js(SSR)를 이용해
                      만들었습니다.
                    </p>
                    <ul className="work__list">
                      <li>Next.js(SSR)</li>
                      <li>React.js</li>
                      <li>Styled Components</li>
                      <li>MaterializeCSS</li>
                      <li>Ant.design</li>
                    </ul>

                    <div className="work__links">
                      <a
                        href="https://fixhome.kr"
                        target="_blank"
                        rel="noreferrer"
                        className="link__text"
                      >
                        Visit Project <span>&rarr;</span>
                      </a>
                      {/* <a
                        href="#비공개"
                        title="View Source Code"
                        target="_blank" rel="noreferrer"
                      >
                        <img
                          src={process.env.PUBLIC_URL + "/images/github.svg"}
                          className="work__code"
                          alt="GitHub"
                        />
                      </a> */}
                    </div>
                  </div>
                  <div className="work__image-box">
                    <img
                      src={process.env.PUBLIC_URL + "/images/fixhome-front.png"}
                      className="work__image"
                      alt="Project 1"
                    />
                  </div>
                </div>

                {/* 픽홈 백엔드 */}
                <div className="work__box">
                  <div className="work__text">
                    <h3>FIXHOME BACKEND</h3>
                    <p>
                      픽홈 마켓플레이스 백엔드 서버. Node.js Apollo Express
                      GraphQL을 이용해 만들었습니다.
                    </p>
                    <ul className="work__list">
                      <li>Node.js</li>
                      <li>Apollo Server</li>
                      <li>Express</li>
                      <li>GraphQL</li>
                      <li>MongoDB</li>
                    </ul>

                    <div className="work__links">
                      <a
                        href="https://fixhome.kr"
                        className="link__text"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit Site <span>&rarr;</span>
                      </a>
                      {/* <a href="#비공개">
                        <img
                          src={process.env.PUBLIC_URL + "/images/github.svg"}
                          className="work__code"
                          title="View Source Code"
                          alt="GitHub"
                        />
                      </a> */}
                    </div>
                  </div>
                  <div className="work__image-box">
                    <img
                      src={process.env.PUBLIC_URL + "/images/fixhome-front.png"}
                      className="work__image"
                      alt="Project 3"
                    />
                  </div>
                </div>

                {/* 픽홈 앱 */}
                <div className="work__box">
                  <div className="work__text">
                    <h3>FIXHOME APP</h3>
                    <p>
                      React Native로 개발한 작업자 전용 APP 입니다. 실시간 대응
                      동작(Subscription)도 포함되어 있습니다.
                    </p>
                    <ul className="work__list">
                      <li>React Native</li>
                      <li>Apollo/Client</li>
                      <li>Styled Components</li>
                      <li>Push Notifications</li>
                    </ul>

                    <div className="work__links">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.fixhomeappv2"
                        className="link__text"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit Google Play <span>&rarr;</span>
                      </a>
                      {/* <a href="#비공개">
                        <img
                          src={process.env.PUBLIC_URL + "/images/github.svg"}
                          className="work__code"
                          title="View Source Code"
                          alt="GitHub"
                        />
                      </a> */}
                    </div>
                  </div>
                  <div className="work__image-box">
                    <img
                      src={process.env.PUBLIC_URL + "/images/fixhome-app.png"}
                      className="work__image"
                      alt="Project 1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- ***** Clients ***** --> */}
          {/* <section className="client" id="clients">
            <div className="row">
              <h2>Clients</h2>
            </div>
            <div className="row">
              <div className="client__logos">
                <!-- Add logos of the clients or companies you'have worked with. -->
                <img
                  src={process.env.PUBLIC_URL + "/images/ronjones.png"}
                  className="client__logo"
                  alt="Company 2"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/goldengrid.png"}
                  className="client__logo"
                  alt="Company 3"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/bullseye.png"}
                  className="client__logo"
                  alt="Company 1"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/mighty-furnitures.png"}
                  className="client__logo"
                  alt="Company 1"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/fastlane.png"}
                  className="client__logo"
                  alt="Company 3"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/chippy.png"}
                  className="client__logo"
                  alt="Company 1"
                />
              </div>
            </div>
          </section> */}

          {/* <!-- ***** About ***** --> */}

          <section className="about" id="about">
            <div className="row">
              <h2>About Me</h2>
              <div className="about__content">
                <div className="about__text">
                  <p>
                    스스로 가치를 올리기 위해 공부하는 것을 즐겨합니다.
                    개발하기를 즐겨하고 사람들과 쉽게 어울리는 개발자입니다.
                    재밌게 살고 있습니다.
                  </p>
                  {/* <!-- 여기에 무슨 버튼을 넣으면 좋을까? --> */}
                  {/* <a href="#" className="btn">
                    전화걸기를 넣을까?
                  </a> */}
                </div>

                <div className="about__photo-container">
                  {/* <!--사진 집어넣어 --> */}
                  <img
                    className="about__photo"
                    src={process.env.PUBLIC_URL + "/images/joon.jpg"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* <!-- ***** Contact ***** --> */}

        <section className="contact" id="contact">
          <div className="row">
            <h2>Get in Touch</h2>
          </div>
          <div className="row">
            <div className="contact__info">
              <p>
                빠른 80% 개발과 20%의 보완 개발을 추구하는 편이나, 팀 또는 개발
                상황에 맞게 100%를 지향하는 개발 또한 가능합니다. 다큐먼트 읽는
                것을 좋아하고, 공식 문서에 나와있는 방법으로 개발해야한다는
                강박이 조금 있으나, 역시 개발해야하는 프로덕트의 성향에 따라
                충분히 조정가능합니다. 포트폴리오 내용 이외에 다른 궁금하신 점이
                있으시면 언제든지 이메일 주세요 : )
              </p>
              {/* <!-- 이메일 발송 버튼 --> */}
              <a href="mailto:mjh927@gmail.com" className="btn">
                mjh927@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* <!-- ***** Footer ***** --> */}

        <footer role="contentinfo" className="footer">
          <div className="row">
            {/* <!-- Social 링크들 --> */}
            <ul className="footer__social-links">
              {/* <li className="footer__social-link-item">
                <a
                  href="#"
                  title="Link to Twitter Profile"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/twitter.svg"}
                    className="footer__social-image"
                    alt="Twitter"
                  />
                </a>
              </li> */}
              {/* <li className="footer__social-link-item">
                <a
                  href="#"
                  title="Link to Github Profile"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/github.svg"}
                    className="footer__social-image"
                    alt="Github"
                  />
                </a>
              </li> */}
              {/* <li className="footer__social-link-item">
                <a
                  href="#"
                  title="Link to Codepen Profile"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/codepen.svg"}
                    className="footer__social-image"
                    alt="Codepen"
                  />
                </a>
              </li> */}
              {/* <li className="footer__social-link-item">
                <a href="#">
                  <img
                    src={process.env.PUBLIC_URL + "/images/linkedin.svg"}
                    title="Link to Linkedin Profile"
                    className="footer__social-image"
                    alt="Linkedin"
                  />
                </a>
              </li> */}
            </ul>
          </div>
          <div className="row">
            {/* <!-- If you give me some credit by keeping the below paragraph, will be huge for me 😊 Thanks. --> */}
            <p>
              <span style={{ fontWeight: "bold" }}>
                A huge thank to Nisar
                <br />
              </span>
              &copy; 2020 - Template designed & developed by{" "}
              <a href="https://nisar.dev" className="link">
                Nisar
              </a>
              .
            </p>
          </div>
          <div className="row">
            <div className="footer__github-buttons">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=nisarhassan12&repo=portfolio-template&type=watch&count=true"
                frameborder="0"
                scrolling="0"
                width="170"
                height="20"
                title="Watch Portfolio Template on GitHub"
              ></iframe>
            </div>
          </div>
        </footer>

        <a href="#top" className="back-to-top" title="Back to Top">
          <img
            src={process.env.PUBLIC_URL + "/images/arrow-up.svg"}
            alt="Back to Top"
            className="back-to-top__image"
          />
        </a>
        {/* <script src="./index.js"></script> */}
      </body>
    </>
  );
}

export default App;
