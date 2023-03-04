import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="page-wrapper">
      {/*
<div className="global-styles w-embed">
        <style>
  
          .cursor-wrapper {
            pointer-events: none;
          }

          a {
            color: inherit;
            text-decoration: inherit;
            font-size: inherit;
          }
        </style>
      </div>
      */}

      <div className="cursor-wrapper">
        <div className="cursor">
          <div className="cursor-icon w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path>
            </svg>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="navbar-wrapper">
          <div
            data-w-id="6b56c4e8-f3ef-865c-918f-44635e7528f8"
            className="header-notification"
          >
            <div className="div-block-31"></div>
            <div
              id="w-node-_1af070ae-c553-8958-a436-36884c486276-35c6660f"
              className="div-block-28"
            >
              <div className="div-block-27">
                <div className="text-block-18 only-phone">5€ geschenkt</div>
              </div>
              <a
                href="invite-a-friend.html"
                target="_blank"
                className="button-text banner only-screen w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="button-text-text-2 banner">
                    Lade jetzt Freunde ein
                  </div>
                  <div className="button-text-icon-wrapper white">
                    <div className="button-text-icon white w-embed">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="invite-a-friend.html"
                target="_blank"
                className="button-text banner only-phone w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="button-text-text-2 banner">
                    Freund einladen
                  </div>
                  <div className="button-text-icon-wrapper white">
                    <div className="button-text-icon white w-embed">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              id="w-node-_860d2faa-57a7-e965-17a0-ed8dd6a6c755-35c6660f"
              data-w-id="860d2faa-57a7-e965-17a0-ed8dd6a6c755"
              className="div-block-29"
            >
              <div className="button-text-icon-wrapper not-shown">
                <div className="button-text-icon white w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div className="gradient w-embed">
              <canvas
                id="gradient-canvas"
                // style="width: 100vw; height: 100vh"
              ></canvas>
            </div>
          </div>
          <div
            id="w-node-cf665aa7-612c-9713-0917-12f535c66611-35c6660f"
            className="navbar"
          >
            <div className="page-padding header">
              <div className="container-large">
                <header className="navbar-inner">
                  <div
                    id="w-node-cf665aa7-612c-9713-0917-12f535c66615-35c6660f"
                    className="navbar-left"
                  >
                    <div className="navbar-logo">
                      <a
                        href="index.html"
                        aria-current="page"
                        className="w-inline-block w--current"
                      >
                        <img
                          src="images/Logo-2.png"
                          loading="eager"
                          alt=""
                          className="navbar-logo"
                        />
                      </a>
                    </div>
                    <div className="navbar-menu">
                      <a
                        href="index.html"
                        aria-current="page"
                        className="navbar-menu-item w-inline-block w--current"
                      >
                        <div className="navbar-menu-item-inner">
                          <div className="navbar-menu-text">Personal</div>
                        </div>
                      </a>
                      <a
                        href="business.html"
                        className="navbar-menu-item w-inline-block"
                      >
                        <div className="navbar-menu-item-inner">
                          <div className="navbar-menu-text">Business</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="w-node-cf665aa7-612c-9713-0917-12f535c66629-35c6660f"
                    className="navbar-right"
                  >
                    <a
                      href="https://twitter.com"
                      className="link-block-3 w-inline-block"
                    >
                      <img
                        src="images/twitter-2.svg"
                        loading="lazy"
                        alt=""
                        className="twitter-link"
                      />
                    </a>
                    <a
                      href="earlyaccess.html"
                      target="_blank"
                      className="button primary small w-inline-block"
                    >
                      Early Access
                    </a>
                    <div className="mobile-menu-toggle">
                      <div className="mobile-menu-toggle-line _01"></div>
                      <div className="mobile-menu-toggle-line _02"></div>
                      <div className="mobile-menu-toggle-line _03"></div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="mobile-menu">
            <div className="page-padding">
              <div className="container-large">
                <div className="mobile-menu-wrapper">
                  <div className="mobile-menu-nav">
                    <a href="#" className="mobile-menu-nav-link w-inline-block">
                      <div className="mobile-menu-nav-text">Personal</div>
                    </a>
                    <div className="line darker"></div>
                    <a
                      href="business.html"
                      className="mobile-menu-nav-link w-inline-block"
                    >
                      <div className="mobile-menu-nav-text">Business</div>
                    </a>
                    <div className="line darker"></div>
                    <div className="div-block-12 header">
                      <a href="#" className="w-inline-block">
                        <img
                          src="images/twitter-2.svg"
                          loading="lazy"
                          alt=""
                          className="twitter-link"
                        />
                      </a>
                      <a href="#" className="w-inline-block">
                        <img
                          src="images/instagram-2.svg"
                          loading="lazy"
                          alt=""
                          className="twitter-link"
                        />
                      </a>
                      <a href="#" className="w-inline-block">
                        <img
                          src="images/linkedin.svg"
                          loading="lazy"
                          alt=""
                          className="twitter-link"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-sticky-placeholder"></div>
        <div className="navbar-overlay compare"></div>
        <div className="navbar-overlay blog"></div>
        <div className="mobile-menu-overlay"></div>
      </header>
      <main className="main-wrapper">
        <section className="section-features-hero">
          <div className="background-color-primary-light">
            <div className="page-padding">
              <div>
                <div className="padding-vertical padding-xhuge">
                  <div className="features-hero-content">
                    <div
                      id="w-node-_52594825-e4b9-177f-0017-e62bbf5feeb8-303bfe43"
                      data-w-id="52594825-e4b9-177f-0017-e62bbf5feeb8"
                      // style="
                      //   -webkit-transform: translate3d(0, 50px, 0)
                      //     scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0)
                      //     skew(0, 0);
                      //   -moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                      //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                      //   -ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                      //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                      //   transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                      //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                      //   opacity: 0;
                      // "
                      className="div-block-11"
                    >
                      <div className="margin-bottom margin-small">
                        <div className="heading-h5 landing">
                          Die Banking Alternative
                        </div>
                      </div>
                      <div className="margin-bottom margin-small heading-laptop">
                        <h1 className="heading-13">
                          Europas einfachste App
                          <br />
                          für Kryptowährungen
                        </h1>
                      </div>
                      <div className="margin-bottom margin-small heading-phone">
                        <h1 className="heading-13">
                          Europas einfachste
                          <br />
                          App für Krypto
                        </h1>
                      </div>
                      <div
                        id="w-node-_52594825-e4b9-177f-0017-e62bbf5feebe-303bfe43"
                        className="margin-bottom margin-medium container-xsmall"
                      >
                        <div className="text-size-xlarge">
                          Dein neues privates Konto gemacht für schwere Zeiten.
                          Layer 2 und Lightning fähig.
                        </div>
                      </div>
                      <div className="features-hero-buttons">
                        <a
                          href="earlyaccess.html"
                          target="_blank"
                          className="link-block w-inline-block"
                        >
                          <div className="button primary button-outer">
                            <div className="button-inner">
                              <div className="button-inner-text">
                                Early Access anfordern
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="business.html"
                          className="button-text w-inline-block"
                        >
                          <div className="button-text-wrapper">
                            <div className="button-text-text-2">
                              Auch für Unternehmen
                            </div>
                            <div className="button-text-icon-wrapper">
                              <div className="button-text-icon w-embed">
                                <svg
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="20"
                                  height="20"
                                >
                                  <path fill="none" d="M0 0h24v24H0z"></path>
                                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-hero-cards">
              <div className="features-hero-cards-inner">
                <div
                  // style="
                  //   -webkit-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -moz-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -ms-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  // "
                  className="features-hero-card-wrapper _01"
                >
                  <img
                    src="images/Credit-Card.png"
                    loading="eager"
                    data-w-id="ff878151-089d-0248-3c3a-d422056a959a"
                    sizes="100vw"
                    srcSet="
                      images/Credit-Card-p-500.png 500w,
                      images/Credit-Card.png       602w
                    "
                    alt=""
                    className="features-hero-card-01"
                  />
                </div>
                <div
                  // style="
                  //   -webkit-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -moz-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -ms-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  // "
                  className="features-hero-card-wrapper _02"
                >
                  <img
                    src="images/Credit-Card-Dark.png"
                    loading="eager"
                    data-w-id="1c15fddd-ec6a-123e-a205-61cb3d007ef9"
                    sizes="100vw"
                    srcSet="
                      images/Credit-Card-Dark-p-500.png 500w,
                      images/Credit-Card-Dark.png       601w
                    "
                    alt=""
                    className="features-hero-card-02"
                  />
                </div>
                <div
                  // style="
                  //   -webkit-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -moz-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -ms-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  // "
                  className="features-hero-card-wrapper _03"
                >
                  <img
                    src="images/Credit-Card_1.png"
                    loading="eager"
                    alt=""
                    className="features-hero-card-03"
                  />
                </div>
                <div
                  // style="
                  //   -webkit-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -moz-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -ms-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  // "
                  className="features-hero-card-wrapper _04"
                >
                  <img
                    src="images/Credit-Card-Dark.png"
                    loading="eager"
                    data-w-id="e3ce220f-5adb-0ea1-93f5-5330667e7abc"
                    sizes="100vw"
                    srcSet="
                      images/Credit-Card-Dark-p-500.png 500w,
                      images/Credit-Card-Dark.png       601w
                    "
                    alt=""
                    className="features-hero-card-04"
                  />
                </div>
                <div
                  // style="
                  //   -webkit-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -moz-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -ms-transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  // "
                  className="features-hero-card-wrapper _05"
                >
                  <img
                    src="images/Credit-Card.png"
                    loading="eager"
                    data-w-id="15392102-3a1b-42df-c23f-0549473ca257"
                    sizes="100vw"
                    srcSet="
                      images/Credit-Card-p-500.png 500w,
                      images/Credit-Card.png       602w
                    "
                    alt=""
                    className="features-hero-card-05"
                  />
                </div>
              </div>
            </div>
            <div
              data-w-id="8c123e05-eb9d-a320-6157-136265720460"
              // style="width: 0%"
              className="line"
            ></div>
          </div>
        </section>
        <section className="section-features-overview">
          <div className="page-padding">
            <div className="container-default">
              <div className="padding-top padding-xxhuge">
                <div className="margin-bottom margin-huge">
                  <div
                    data-w-id="6a174556-32cd-beb4-a14f-3b060b3d68ab"
                    // style="
                    //   -webkit-transform: translate3d(0, 50px, 0)
                    //     scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0)
                    //     skew(0, 0);
                    //   -moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   -ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   opacity: 0;
                    // "
                    className="text-align-center"
                  >
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-22">Dein Geld wird weniger?</h2>
                    </div>
                    <div className="max-width-medium align-center">
                      <div className="text-size-large text-align-center">
                        Wir wissen auch warum. Dein Geld hat viel an Wert
                        verloren, ohne dass du etwas dagegen machen konntest.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features-overview-grid less-margin">
                  <div className="features-overview-grid-top eurusd-area">
                    <div className="features-overview-card-large inverted">
                      <div className="text-align-center">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-h4 inverted">
                            Der <span id="currency-symbol">Euro</span> verlor
                            <span id="more-info" className="span-percentage">
                              9%
                            </span>
                          </h3>
                          <div className="form-block-6 w-form">
                            <form
                              id="email-form"
                              name="email-form"
                              data-name="Email Form"
                              method="get"
                              className="form-5"
                            >
                              <select
                                id="comparison-picker"
                                name="Select-Country"
                                data-name="Select Country"
                                required
                                className="select-field-2-copy inverted w-select"
                              >
                                <option value="usd">US-Dollar</option>
                                <option value="btc">Bitcoin</option>
                              </select>
                            </form>
                            <div className="w-form-done">
                              <div>
                                Thank you! Your submission has been received!
                              </div>
                            </div>
                            <div className="w-form-fail">
                              <div>
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="margin-bottom margin-small">
                          <div className="max-width-medium align-center">
                            <div className="text-size-medium text-color-muted inverted">
                              Gegenüber dem US-Dollar und durch Inflation im
                              Zeitraum von nur
                              <span id="last-x-years">2</span> Jahren. Ganz
                              schön viel.
                            </div>
                          </div>
                        </div>
                        <div className="margin-bottom margin-large center">
                          <div className="form-block-5 w-form">
                            <form
                              id="email-form"
                              name="email-form"
                              data-name="Email Form"
                              method="get"
                              className="form-6"
                            >
                              <select
                                id="country-picker"
                                name="Select-Country"
                                data-name="Select Country"
                                required
                                className="select-field-2 w-select"
                              >
                                <option value="Europa">
                                  Dein Land auswählen
                                </option>
                                <option value="Europa">Europa</option>
                                <option value="Brasilien">Brasilien</option>
                                <option value="Kanada">Kanada</option>
                                <option value="Großbritannien">
                                  Großbritannien
                                </option>
                              </select>
                              <div className="button-text-icon-wrapper white">
                                <div className="button-text-icon white w-embed">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                  >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                  </svg>
                                </div>
                              </div>
                            </form>
                            <div className="w-form-done">
                              <div>
                                Thank you! Your submission has been received!
                              </div>
                            </div>
                            <div className="w-form-fail">
                              <div>
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                          <div className="form-block-7 w-form">
                            <form
                              id="email-form"
                              name="email-form"
                              data-name="Email Form"
                              method="get"
                            >
                              <div className="input-field-wrap-2">
                                <input
                                  type="text"
                                  className="input-field-2 w-input"
                                  maxLength={256}
                                  name="Slider-Single"
                                  data-name="Slider Single"
                                  placeholder="Range Placeholder"
                                  id="slider-single"
                                  required
                                />
                              </div>
                            </form>
                            <div className="success-message w-form-done">
                              <div>
                                Thanks for the numbers, they could be going to
                                your emails. But they&#x27;re going to mine...
                                Thanks ;D
                              </div>
                            </div>
                            <div className="w-form-fail">
                              <div>
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="features-overview-stats-image-wrapper">
                          <div className="eurusd-phone">
                            <div className="div-block-21">
                              <div className="div-block-20">
                                <img
                                  src="images/Arrow-Back.png"
                                  loading="lazy"
                                  alt=""
                                  className="image-14"
                                />
                              </div>
                              <div className="text-block-15">
                                <span id="currency-symbol-short">EUR</span>-
                                <span id="currency-symbol-short-comparision">
                                  USD
                                </span>
                                <br />
                                1,09$
                              </div>
                              <div className="div-block-19">
                                <img
                                  src="images/Arrow-Down.png"
                                  loading="lazy"
                                  alt=""
                                  className="arrow-down"
                                />
                                <div
                                  id="more-info-2"
                                  className="eurusd-phone-percentage"
                                >
                                  1,46%
                                </div>
                                <div
                                  id="slider-single-value"
                                  className="eurusd-phone-percentage"
                                >
                                  (2 Jahren)
                                </div>
                              </div>
                            </div>
                            <img
                              src="images/Graph-Down.png"
                              loading="lazy"
                              sizes="100vw"
                              srcSet="
                                images/Graph-Down-p-500.png 500w,
                                images/Graph-Down.png       596w
                              "
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="features-overview-card-large inverted blue">
                      <div className="text-align-center">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-h4 white-text">
                            Die Alternative.
                          </h3>
                        </div>
                        <div className="margin-bottom margin-small">
                          <div className="max-width-medium align-center">
                            <div className="text-size-medium text-color-muted inverted">
                              Ein US-Dollar Konto entgegen der Entwertung mit
                              wahlweise nicht inflationärem Bitcoin und 6%
                              Sparkonto.
                            </div>
                          </div>
                        </div>
                        <div className="margin-bottom margin-large">
                          <div className="button-round">
                            <a
                              href="#security-section"
                              className="button-text white w-inline-block"
                            >
                              <div className="button-text-wrapper">
                                <div className="button-text-text-2 white">
                                  Jetzt Geld schützen
                                </div>
                                <div className="button-text-icon-wrapper white">
                                  <div className="button-text-icon white w-embed">
                                    <svg
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="20"
                                      height="20"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="features-overview-stats-image-wrapper">
                          <img
                            src="images/Create-Subwallet---Name.png"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 250px, 100vw"
                            srcSet="
                              images/Create-Subwallet---Name-p-500.png   500w,
                              images/Create-Subwallet---Name-p-800.png   800w,
                              images/Create-Subwallet---Name-p-1080.png 1080w,
                              images/Create-Subwallet---Name.png        1230w
                            "
                            alt=""
                            className="features-overview-alternative-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cta-poll">
                    <div id="w-node-_445f080b-0811-7687-99e1-c12b94e892ff-303bfe43">
                      <div
                        id="w-node-_445f080b-0811-7687-99e1-c12b94e89300-303bfe43"
                        className="margin-bottom-2 margin-tiny"
                      >
                        <h2 className="heading-h4">
                          Hast auch du die Geldentwertung mitbekommen?
                        </h2>
                      </div>
                      <div className="text-size-medium text-color-muted">
                        Diese Umfrage ist anonym.
                      </div>
                    </div>
                    <div
                      id="w-node-_445f080b-0811-7687-99e1-c12b94e8930f-303bfe43"
                      className="div-block-22"
                    >
                      <div className="div-block-23">
                        <div className="poll_thanks">
                          Vielen Dank für die Teilnahme.
                        </div>
                        <div className="button-round blue">
                          <a
                            href="earlyaccess.html"
                            target="_blank"
                            className="button-text blue w-inline-block"
                          >
                            <div className="button-text-wrapper">
                              <div className="button-text-text-2 blue">
                                Jetzt Maßnahmen setzen
                              </div>
                              <div className="button-text-icon-wrapper white">
                                <div className="button-text-icon blue w-embed">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                  >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a
                        data-w-id="077a2a2a-c6f5-1ce6-7847-20a35e8bc7d7"
                        href="#"
                        className="button secondary min-width w-inline-block"
                      >
                        <div className="button-inner">
                          <div className="button-inner-text-2">Ja</div>
                        </div>
                      </a>
                      <a
                        data-w-id="445f080b-0811-7687-99e1-c12b94e89310"
                        href="#"
                        className="button secondary min-width w-inline-block"
                      >
                        <div className="button-inner">
                          <div className="button-inner-text-2">Nein</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-features-overview">
          <div className="page-padding">
            <div className="container-default">
              <div className="padding-top padding-xxhuge">
                <div className="margin-bottom margin-huge">
                  <div
                    data-w-id="074fe724-96c6-61f6-b922-7af7eaa76883"
                    // style="
                    //   -webkit-transform: translate3d(0, 50px, 0)
                    //     scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0)
                    //     skew(0, 0);
                    //   -moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   -ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   opacity: 0;
                    // "
                    className="text-align-center"
                  >
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-23">
                        Die Lösung. Krypto. Unkompliziert.
                      </h2>
                    </div>
                    <div className="max-width-medium align-center">
                      <div className="text-size-large text-align-center">
                        Mit so wenig Aufwand hast du noch nie so viel gespart.
                        Einfach. Schnell. Langfristig.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features-overview-grid less-margin">
                  <div className="features-overview-grid-top eurusd-area">
                    <div className="features-overview-card-large inverted blue">
                      <div className="text-align-center">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-h4 inverted">
                            Startklar in 1 Minute
                          </h3>
                        </div>
                        <div className="margin-bottom margin-small">
                          <div className="max-width-medium align-center">
                            <div className="text-size-medium text-color-muted inverted">
                              Ab dann kontrollierst du dein Geld, nicht länger
                              deine Bank. Dein Vermögen, dezentral abgesichert.
                            </div>
                          </div>
                        </div>
                        <div className="margin-bottom margin-small">
                          <div className="button-round">
                            <a
                              href="#security-section"
                              className="button-text white w-inline-block"
                            >
                              <div className="button-text-wrapper">
                                <div className="button-text-text-2 white">
                                  Warum ist das so sicher
                                </div>
                                <div className="button-text-icon-wrapper white">
                                  <div className="button-text-icon white w-embed">
                                    <svg
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="20"
                                      height="20"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="features-overview-stats-image-wrapper">
                          <img
                            src="images/app-stats.svg"
                            loading="lazy"
                            alt="App Stats"
                            className="features-overview-stats-image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="features-overview-card-large pink">
                      <div className="text-align-center">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-h4 inverted">
                            Super easy. Garantiert.
                          </h3>
                        </div>
                        <div className="margin-bottom margin-small">
                          <div className="max-width-medium align-center">
                            <div className="text-size-medium text-color-muted inverted">
                              Du findest dich direkt zurecht. Wir haben für dich
                              die Stolpersteine und Problemzonen entfernt.
                            </div>
                          </div>
                        </div>
                        <div className="margin-bottom margin-small">
                          <div className="button-round">
                            <a
                              href="#section-scroll"
                              className="button-text white w-inline-block"
                            >
                              <div className="button-text-wrapper">
                                <div className="button-text-text-2 white">
                                  Die Einfachheit entdecken
                                </div>
                                <div className="button-text-icon-wrapper white">
                                  <div className="button-text-icon white w-embed">
                                    <svg
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="20"
                                      height="20"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="features-overview-stats-image-wrapper">
                          <img
                            src="images/Create-Subwallet---Name.png"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 250px, 100vw"
                            srcSet="
                              images/Create-Subwallet---Name-p-500.png   500w,
                              images/Create-Subwallet---Name-p-800.png   800w,
                              images/Create-Subwallet---Name-p-1080.png 1080w,
                              images/Create-Subwallet---Name.png        1230w
                            "
                            alt=""
                            className="features-overview-stats-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="section-scroll"
          data-w-id="52594825-e4b9-177f-0017-e62bbf5feee1"
          className="section-features-app"
        >
          <div className="page-padding">
            <div className="container-default margin-bottom margin-xxhuge">
              <div className="features-app-grid">
                <div
                  id="w-node-_1d760c42-6ec7-08c7-0346-c7c8fb5ee1ed-303bfe43"
                  className="features-app-grid-left"
                >
                  <div className="features-app-content _01">
                    <div className="show-mobile-portrait">
                      <div className="margin-bottom margin-xlarge">
                        <div className="features-app-phone">
                          <img
                            src="images/Wallet-German.png"
                            loading="eager"
                            sizes="(max-width: 479px) 238px, 100vw"
                            srcSet="
                              images/Wallet-German-p-500.png   500w,
                              images/Wallet-German-p-800.png   800w,
                              images/Wallet-German-p-1080.png 1080w,
                              images/Wallet-German.png        1560w
                            "
                            alt=""
                            className="features-app-image _01"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_1d760c42-6ec7-08c7-0346-c7c8fb5ee1ee-303bfe43"
                      className="margin-bottom margin-small"
                    >
                      <div className="heading-h5">Krypto x Bank</div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-24">
                        Ein Wallet wie
                        <br />
                        dein Bankkonto
                      </h2>
                    </div>
                    <div className="margin-bottom margin-medium">
                      <div className="text-size-large">
                        Bye, bye Bankensystem. Mit Superlight besitzt nur du
                        dein Vermögen - also non-custodial. Trotzdem kannst du
                        alles in der Einfachheit verwenden, wie du es von deinem
                        Girokonto gewohnt bist.
                      </div>
                    </div>
                    <div className="list">
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">
                          Keine laufenden Kosten
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">
                          Girokonto ohne Fiat
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">Bank kompatibel</div>
                      </div>
                    </div>
                  </div>
                  <div className="features-app-content _02">
                    <div className="show-mobile-portrait">
                      <div className="margin-bottom margin-xlarge">
                        <div className="features-app-phone">
                          <img
                            src="images/Phone-Trade.png"
                            loading="eager"
                            sizes="(max-width: 479px) 238px, 100vw"
                            srcSet="
                              images/Phone-Trade-p-500.png   500w,
                              images/Phone-Trade-p-800.png   800w,
                              images/Phone-Trade-p-1080.png 1080w,
                              images/Phone-Trade-p-1600.png 1600w,
                              images/Phone-Trade-p-2000.png 2000w,
                              images/Phone-Trade-p-2600.png 2600w,
                              images/Phone-Trade.png        2802w
                            "
                            alt=""
                            className="features-app-image"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_8e3b324b-e7f7-032a-cf74-4a6646f602bb-303bfe43"
                      className="margin-bottom margin-small"
                    >
                      <div className="heading-h5">Unter 1% Gebühren</div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-18">
                        Kaufe &amp; Verkaufe
                        <br />
                        Kryptowährungen
                      </h2>
                      <h2 className="heading-17">
                        Kaufe &amp; Verkaufe
                        <br />
                        Krypto-währungen
                      </h2>
                    </div>
                    <div className="margin-bottom margin-medium">
                      <div className="text-size-large">
                        Spare dir Zeit und kaufe deine Kryptowährungen direkt in
                        dein privates Superlight Wallet. Kein Umweg über eine
                        zentrale Exchange.
                      </div>
                    </div>
                    <div className="list">
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">
                          Apple/Google Pay, Sepa, Kreditkarte
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">
                          Nicht-inflationärer Bitcoin
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">
                          US-Dollar Stablecoin
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="features-app-content _03">
                    <div className="show-mobile-portrait">
                      <div className="margin-bottom margin-xlarge">
                        <div className="features-app-phone">
                          <img
                            src="images/Wallet-Send---German.png"
                            loading="eager"
                            sizes="(max-width: 479px) 238px, 100vw"
                            srcSet="
                              images/Wallet-Send---German-p-500.png   500w,
                              images/Wallet-Send---German-p-800.png   800w,
                              images/Wallet-Send---German-p-1080.png 1080w,
                              images/Wallet-Send---German.png        1560w
                            "
                            alt=""
                            className="features-app-image"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_69a3f469-22b3-e6fe-69a2-62eebad0785c-303bfe43"
                      className="margin-bottom margin-small"
                    >
                      <div className="heading-h5">Jederzeit und überall</div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-14">
                        Bezahle und überweise ohne Gebühren
                      </h2>
                    </div>
                    <div className="margin-bottom margin-medium">
                      <div className="text-size-large">
                        Du bezahlst gerne digital, liebst aber auch die
                        Freiheiten von Bargeld? Dann bezahle ab jetzt unabhängig
                        mit deinen Kryptowährungen. Nebenbei verdienst du dabei
                        sogar Cashback.
                      </div>
                    </div>
                    <div className="list">
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">
                          Weltweit kostenlos
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">
                          Layer-2 &amp; Lightning
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">
                          Direktes Cashback
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="features-app-content _04">
                    <div className="show-mobile-portrait">
                      <div className="margin-bottom margin-xlarge">
                        <div className="features-app-phone">
                          <img
                            src="images/Wallets-Overview---Filled.png"
                            loading="eager"
                            sizes="(max-width: 479px) 238px, 100vw"
                            srcSet="
                              images/Wallets-Overview---Filled-p-500.png 500w,
                              images/Wallets-Overview---Filled.png       780w
                            "
                            alt=""
                            className="features-app-image"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_738a1467-8cb9-5c81-6dc0-e3373b246603-303bfe43"
                      className="margin-bottom margin-small"
                    >
                      <div className="heading-h5">
                        Subwallets als Unterkonten
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-25">
                        Organisiere ganz einfach dein Geld
                      </h2>
                    </div>
                    <div className="margin-bottom margin-medium">
                      <div className="text-size-large">
                        Dein eigener Bereich für all die Dinge die getrennt
                        gehören. Die Übersicht über dein Vermögen, behältst du
                        so ganz von alleine.
                      </div>
                    </div>
                    <div className="list">
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">Eigene Regeln</div>
                      </div>
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">
                          Erhöhte Privatsphäre
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="badge primary-light small">
                          <div className="icon-1x1-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="text-size-medium">Shared Wallets</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_52594825-e4b9-177f-0017-e62bbf5fef29-303bfe43"
                  className="features-app-grid-right"
                >
                  <div className="features-app-grid-right-inner">
                    <div className="features-app-phone">
                      <img
                        src="images/Wallet-German.png"
                        loading="eager"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 238px, (max-width: 991px) 284px, 31vw"
                        srcSet="
                          images/Wallet-German-p-500.png   500w,
                          images/Wallet-German-p-800.png   800w,
                          images/Wallet-German-p-1080.png 1080w,
                          images/Wallet-German.png        1560w
                        "
                        alt=""
                        className="features-app-image _01"
                      />
                      <img
                        src="images/Phone-Trade.png"
                        loading="eager"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 238px, (max-width: 991px) 284px, 31vw"
                        srcSet="
                          images/Phone-Trade-p-500.png   500w,
                          images/Phone-Trade-p-800.png   800w,
                          images/Phone-Trade-p-1080.png 1080w,
                          images/Phone-Trade-p-1600.png 1600w,
                          images/Phone-Trade-p-2000.png 2000w,
                          images/Phone-Trade-p-2600.png 2600w,
                          images/Phone-Trade.png        2802w
                        "
                        alt=""
                        className="features-app-image _02"
                      />
                      <img
                        src="images/Wallet-Send---German.png"
                        loading="eager"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 238px, (max-width: 991px) 284px, 31vw"
                        srcSet="
                          images/Wallet-Send---German-p-500.png   500w,
                          images/Wallet-Send---German-p-800.png   800w,
                          images/Wallet-Send---German-p-1080.png 1080w,
                          images/Wallet-Send---German.png        1560w
                        "
                        alt=""
                        className="features-app-image _03"
                      />
                      <img
                        src="images/Wallets-Overview---Filled.png"
                        loading="eager"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 238px, (max-width: 991px) 284px, 31vw"
                        srcSet="
                          images/Wallets-Overview---Filled-p-500.png 500w,
                          images/Wallets-Overview---Filled.png       780w
                        "
                        alt=""
                        className="features-app-image _04"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          data-w-id="52594825-e4b9-177f-0017-e62bbf5feee0"
          // style="width: 0%"
          className="line"
        ></div>
        <section className="section-features-overview">
          <div className="page-padding">
            <div className="container-default">
              <div className="padding-top padding-xxhuge">
                <div className="margin-bottom margin-huge">
                  <div
                    data-w-id="bb9545ac-5a0e-b999-29a3-55190be7cc19"
                    // style="
                    //   -webkit-transform: translate3d(0, 50px, 0)
                    //     scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0)
                    //     skew(0, 0);
                    //   -moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   -ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   opacity: 0;
                    // "
                    className="text-align-center"
                  >
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-26">Bereit für die Zukunft?</h2>
                    </div>
                    <div className="max-width-medium align-center">
                      <div className="text-size-large text-align-center">
                        Überlasse anderen nicht den Vorsprung. Trete der
                        finanziellen Revolution bei.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features-overview-grid">
                  <div className="features-overview-grid-top">
                    <div className="features-overview-card-large">
                      <div className="text-align-center">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-h4">0% Gebühren</h3>
                        </div>
                        <div className="margin-bottom margin-large">
                          <div className="max-width-medium align-center">
                            <div className="text-size-medium text-color-muted">
                              Mit Superlight bezahlst du keine Netzwerkgebühren
                              beim Bezahlen oder Überweisen.
                            </div>
                          </div>
                        </div>
                        <div className="features-overview-stats-image-wrapper">
                          <img
                            src="images/app-stats.svg"
                            loading="lazy"
                            alt="App Stats"
                            className="features-overview-stats-image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="features-overview-card-large">
                      <div className="text-align-center">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-h4">Inflationsbremser</h3>
                        </div>
                        <div className="margin-bottom margin-large">
                          <div className="max-width-medium align-center">
                            <div className="text-size-medium text-color-muted">
                              Mit bis zu 6% Zinsen auf Sparkonten entgegen der
                              Inflation. Oder kaufe nicht-inflationären Bitcoin.
                            </div>
                          </div>
                        </div>
                        <div className="features-overview-cards-image">
                          <img
                            src="images/Credit-Card-Dark.png"
                            loading="lazy"
                            srcSet="
                              images/Credit-Card-Dark-p-500.png 500w,
                              images/Credit-Card-Dark.png       601w
                            "
                            sizes="(max-width: 479px) 44vw, (max-width: 767px) 28vw, (max-width: 991px) 13vw, 14vw"
                            alt=""
                            className="features-overview-card-outer"
                          />
                          <img
                            src="images/Credit-Card_1.png"
                            loading="lazy"
                            alt=""
                            className="features-overview-card-middle"
                          />
                          <img
                            src="images/Credit-Card.png"
                            loading="lazy"
                            srcSet="
                              images/Credit-Card-p-500.png 500w,
                              images/Credit-Card.png       602w
                            "
                            sizes="(max-width: 479px) 44vw, (max-width: 767px) 28vw, (max-width: 991px) 13vw, 14vw"
                            alt=""
                            className="features-overview-card-outer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="features-overview-cards-wrapper">
                    <div className="features-overview-card-small">
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-h4">
                          Decentralized
                          <br />
                          Finance
                        </h3>
                      </div>
                      <div className="margin-bottom margin-large">
                        <div className="max-width-medium align-center">
                          <div className="text-size-medium text-color-muted">
                            Dein sicherer Zugang zu Defi. Geschützt in einem
                            eigenen Unterkonto.
                          </div>
                        </div>
                      </div>
                      <div className="features-overview-card-image-small">
                        <img
                          src="images/Defi.png"
                          loading="lazy"
                          sizes="100vw"
                          srcSet="
                            images/Defi-p-500.png   500w,
                            images/Defi-p-800.png   800w,
                            images/Defi-p-1080.png 1080w,
                            images/Defi.png        1140w
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="features-overview-card-small">
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-h4">
                          Ordnung für deine Finanzen
                        </h3>
                      </div>
                      <div className="margin-bottom margin-large">
                        <div className="max-width-medium align-center">
                          <div className="text-size-medium text-color-muted">
                            Erstelle unbegrenzte Unterkonten für Sparziele und
                            Investitionen.
                          </div>
                        </div>
                      </div>
                      <div className="features-overview-card-image-small">
                        <img
                          src="images/Wallets.png"
                          loading="lazy"
                          sizes="100vw"
                          srcSet="
                            images/Wallets-p-500.png   500w,
                            images/Wallets-p-800.png   800w,
                            images/Wallets-p-1080.png 1080w,
                            images/Wallets.png        1143w
                          "
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="features-overview-card-small">
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-h4">
                          Automatische
                          <br />
                          Sparpläne
                        </h3>
                      </div>
                      <div className="margin-bottom margin-large">
                        <div className="max-width-medium align-center">
                          <div className="text-size-medium text-color-muted">
                            Spare und investiere ohne daran Gedanken zu
                            verschwenden.
                          </div>
                        </div>
                      </div>
                      <div className="features-overview-transactions-image-wrapper">
                        <img
                          src="images/Recurring_Buy.png"
                          loading="lazy"
                          sizes="100vw"
                          srcSet="
                            images/Recurring_Buy-p-500.png 500w,
                            images/Recurring_Buy.png       906w
                          "
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-w-id="9621f949-5689-4f50-f271-90fe86277f6a"
          className="section-home-cards"
        >
          <div
            data-w-id="307e4abc-740a-edc6-8a54-e75484eed697"
            // style="width: 0%"
            className="line"
          ></div>
          <div className="page-padding">
            <div className="container-xsmall">
              <div className="padding-vertical padding-xxhuge">
                <div
                  data-w-id="9621f949-5689-4f50-f271-90fe86277f6e"
                  // style="
                  //   -webkit-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   -ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                  //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  //   opacity: 0;
                  // "
                  className="home-cards-grid"
                >
                  <div
                    id="w-node-_9621f949-5689-4f50-f271-90fe86277f6f-303bfe43"
                    className="margin-bottom margin-small"
                  >
                    <div className="heading-h5-cards">Demnächst verfügbar</div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-15">
                      Die perfekte Karte für den Alltag
                    </h2>
                  </div>
                  <div
                    id="w-node-_9621f949-5689-4f50-f271-90fe86277f75-303bfe43"
                    className="margin-bottom margin-large"
                  >
                    <div className="max-width-medium align-center">
                      <div className="text-size-large-centered">
                        Die Debitkarte die zu hohe Gebühren aus dem alten System
                        an dich zurückzahlt.
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xlarge">
                    <div className="home-cards">
                      <img
                        src="images/Credit-Card-horizontal.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 400px, 100vw"
                        srcSet="
                          images/Credit-Card-horizontal-p-500.png 500w,
                          images/Credit-Card-horizontal.png       501w
                        "
                        alt=""
                        className="home-card-1"
                      />
                      <img
                        src="images/Credit-Card-2.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 400px, 100vw"
                        srcSet="
                          images/Credit-Card-2-p-500.png 500w,
                          images/Credit-Card-2.png       501w
                        "
                        alt=""
                        className="home-card-2"
                      />
                      <img
                        src="images/Credit-Card-3.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 400px, 100vw"
                        srcSet="
                          images/Credit-Card-3-p-500.png 500w,
                          images/Credit-Card-3.png       501w
                        "
                        alt=""
                        className="home-card-3"
                      />
                    </div>
                  </div>
                  <div className="home-cards-buttons">
                    <a
                      href="earlyaccess.html"
                      target="_blank"
                      className="link-block w-inline-block"
                    >
                      <div className="button primary button-outer">
                        <div className="button-inner">
                          <div className="button-inner-text">
                            Early Access anfordern
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-compare-table-sticky">
          <div className="page-padding margin-bottom margin-xxhuge sticky">
            <div className="container-large sticky">
              <div className="padding-vertical sticky">
                <div
                  id="scroll-compare"
                  className="w-layout-grid margin-bottom margin-huge sticky"
                >
                  <div
                    id="w-node-_6b39917a-c0fc-d211-6291-147240a134ca-303bfe43"
                    className="empty-div"
                  ></div>
                  <div
                    id="w-node-_152fe795-a698-47e7-20c3-7d341ee7c057-303bfe43"
                    className="support-compare-table-cards-right"
                  >
                    <div className="choose-cards-grid">
                      <div
                        id="w-node-_152fe795-a698-47e7-20c3-7d341ee7c059-303bfe43"
                        className="choose-cards-grid-column"
                      >
                        <div className="choose-card-content">
                          <img
                            src="images/Logo.png"
                            loading="lazy"
                            alt=""
                            className="image-10"
                          />
                        </div>
                      </div>
                      <div
                        id="w-node-_152fe795-a698-47e7-20c3-7d341ee7c0eb-303bfe43"
                        className="choose-cards-grid-column"
                      >
                        <div className="choose-card-content">
                          <img
                            src="images/N26_logo.png"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="
                              images/N26_logo-p-500.png  500w,
                              images/N26_logo.png       1721w
                            "
                            alt=""
                            className="image-9"
                          />
                        </div>
                      </div>
                      <div
                        id="w-node-_152fe795-a698-47e7-20c3-7d341ee7c17d-303bfe43"
                        className="choose-cards-grid-column"
                      >
                        <div className="choose-card-content">
                          <img
                            src="images/MetaMask_Fox.png"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="
                              images/MetaMask_Fox-p-500.png   500w,
                              images/MetaMask_Fox-p-800.png   800w,
                              images/MetaMask_Fox-p-1080.png 1080w,
                              images/MetaMask_Fox-p-1600.png 1600w,
                              images/MetaMask_Fox-p-2000.png 2000w,
                              images/MetaMask_Fox.png        2048w
                            "
                            alt=""
                            className="image-6"
                          />
                        </div>
                      </div>
                      <div className="choose-cards-grid-column">
                        <div className="choose-card-content">
                          <img
                            src="images/Coinbase_Logo.png"
                            loading="lazy"
                            sizes="100vw"
                            srcSet="
                              images/Coinbase_Logo-p-500.png   500w,
                              images/Coinbase_Logo-p-800.png   800w,
                              images/Coinbase_Logo-p-1080.png 1080w,
                              images/Coinbase_Logo-p-1600.png 1600w,
                              images/Coinbase_Logo-p-2000.png 2000w,
                              images/Coinbase_Logo.png        2560w
                            "
                            alt=""
                            className="image-7"
                          />
                        </div>
                      </div>
                      <div className="choose-cards-grid-column">
                        <div className="choose-card-content">
                          <img
                            src="images/bitpanda_logo.png"
                            loading="lazy"
                            alt=""
                            className="image-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom-2 margin-small white-background sticky">
                    <h3 className="heading-h5-2">Vergleich</h3>
                  </div>
                  <div
                    id="w-node-bcec7350-3674-13d0-f665-3c0b2223b22c-303bfe43"
                    className="empty-div-2"
                  ></div>
                  <div
                    id="w-node-_9ea7b2fb-3c5b-ea89-0d93-58fd4d9845ba-303bfe43"
                    className="comparison-left"
                  >
                    <div className="compare-table-row-title">
                      <div className="badge primary-light large">
                        <div className="icon-1x1-default w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 9H4v7h16v-7zm0-4V5H4v3h16z"></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="margin-bottom-2 margin-tiny">
                          <h4 className="heading-h6-2 only-screen">
                            Überweisungsgebühren
                          </h4>
                          <h4 className="heading-h6-2 only-phone">
                            Überweisungs-gebühren
                          </h4>
                        </div>
                        <div className="text-size-small text-color-muted compare-area">
                          bei Blockchain-Transaktionen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_1653980d-12cc-bd58-f391-80cc6955cf75-303bfe43"
                    className="comparison-right"
                  >
                    <div>
                      <div className="text-align-center">Kostenlos</div>
                    </div>
                    <div>
                      <div className="text-align-center">nicht möglich</div>
                    </div>
                    <div>
                      <div className="text-align-center">Netzwerk Gebühren</div>
                    </div>
                    <div>
                      <div className="text-align-center">Netzwerk Gebühren</div>
                    </div>
                    <div>
                      <div className="text-align-center">~1,20€</div>
                    </div>
                  </div>
                  <div
                    id="w-node-_3b9749f9-b8eb-61c8-9f27-25f78c3abc98-303bfe43"
                    className="comparison-left"
                  >
                    <div className="compare-table-row-title">
                      <div className="badge primary-light large">
                        <div className="icon-1x1-default w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="margin-bottom-2 margin-tiny">
                          <h4 className="heading-h6-2 only-screen">
                            Anfängerfreundlich
                          </h4>
                          <h4 className="heading-h6-2 only-phone">
                            Anfänger-freundlich
                          </h4>
                        </div>
                        <div className="text-size-small text-color-muted compare-area">
                          kein Vorwissen notwendig
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-fb6d251d-1300-7e99-aaa3-823884faa122-303bfe43"
                    className="comparison-right"
                  >
                    <div id="w-node-a2c951d1-99bd-e886-b15f-0c12e99f6747-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_2bf5c5dc-e313-ee79-f604-3578aa9ff5e9-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_0fe4af95-f6bb-07d8-f56a-f2fe267e2619-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-_04dab1a7-f4ae-34bf-5faa-25a236b49a57-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-_2dbdc324-c2a9-756e-4556-41301f2c2bd2-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_1c6ce988-506a-a58b-2a40-d1d5304d3c28-303bfe43"
                    className="comparison-left"
                  >
                    <div className="compare-table-row-title">
                      <div className="badge primary-light large">
                        <div className="icon-1x1-default w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M20 8V5H4v3h16zm0 2H4v9h16v-9zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 11h6v2H6.5l4.5-4.5V14z"></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="margin-bottom-2 margin-tiny">
                          <h4 className="heading-h6-2">Bank kompatibel</h4>
                        </div>
                        <div className="text-size-small text-color-muted compare-area">
                          Senden und empfangen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_66bf372a-d78d-418e-6f69-9d3603dfe672-303bfe43"
                    className="comparison-right"
                  >
                    <div id="w-node-_66bf372a-d78d-418e-6f69-9d3603dfe673-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_66bf372a-d78d-418e-6f69-9d3603dfe676-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_66bf372a-d78d-418e-6f69-9d3603dfe679-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-_66bf372a-d78d-418e-6f69-9d3603dfe67b-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-_1a1b6b4e-86a3-d77c-ce89-e8285faced96-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                  </div>
                  <div
                    id="w-node-b8e6ea9e-520b-eae4-cacb-0a30725da9ec-303bfe43"
                    className="comparison-left"
                  >
                    <div className="compare-table-row-title">
                      <div className="badge primary-light large">
                        <div className="icon-1x1-default w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1.95-9H15v2h-4.95a2.5 2.5 0 0 0 4.064 1.41l1.7 1.133A4.5 4.5 0 0 1 8.028 13H7v-2h1.027a4.5 4.5 0 0 1 7.788-2.543L14.114 9.59A2.5 2.5 0 0 0 10.05 11z"></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="margin-bottom-2 margin-tiny">
                          <h4 className="heading-h6-2">FIAT entkoppelt</h4>
                        </div>
                        <div className="text-size-small text-color-muted compare-area">
                          kein Fiat Besitz notwendig
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_8d143cc4-1f71-2d9a-1fff-5175800426bb-303bfe43"
                    className="comparison-right"
                  >
                    <div id="w-node-_8d143cc4-1f71-2d9a-1fff-5175800426bc-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_8d143cc4-1f71-2d9a-1fff-5175800426c2-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-_57cefcf7-d609-2dd7-fdd5-65c41c950aa7-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_8d143cc4-1f71-2d9a-1fff-5175800426c4-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-_8d143cc4-1f71-2d9a-1fff-5175800426c6-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                  </div>
                  <div
                    id="w-node-_16de27cd-638c-3dcf-cef1-e385c0b2e7d3-303bfe43"
                    className="comparison-left"
                  >
                    <div className="compare-table-row-title">
                      <div className="badge primary-light large">
                        <div className="icon-1x1-default w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9 8h6l2.5 3.5L12 17l-5.5-5.5L9 8zm1.03 2l-.92 1.29L12 14.18l2.89-2.89-.92-1.29h-3.94z"></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="margin-bottom-2 margin-tiny">
                          <h4 className="heading-h6-2">Non-Custodial</h4>
                        </div>
                        <div className="text-size-small text-color-muted compare-area">
                          nur du hast Zugriff
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-c0c9980c-e4f7-48cf-0a61-2db29083404a-303bfe43"
                    className="comparison-right"
                  >
                    <div id="w-node-c0c9980c-e4f7-48cf-0a61-2db29083404b-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-c0c9980c-e4f7-48cf-0a61-2db290834051-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-c0c9980c-e4f7-48cf-0a61-2db29083404e-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-c0c9980c-e4f7-48cf-0a61-2db290834053-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-c0c9980c-e4f7-48cf-0a61-2db290834055-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                  </div>
                  <div
                    id="w-node-_8a69a3ab-d78e-e967-188f-8a91b5b2d652-303bfe43"
                    className="comparison-left"
                  >
                    <div className="compare-table-row-title">
                      <div className="badge primary-light large">
                        <div className="icon-1x1-default w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M.69 6.997A17.925 17.925 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997l-1.256 1.556A15.933 15.933 0 0 0 12 5C8.191 5 4.694 6.33 1.946 8.553L.69 6.997zm3.141 3.89A12.946 12.946 0 0 1 12 8c3.094 0 5.936 1.081 8.169 2.886l-1.257 1.556A10.954 10.954 0 0 0 12 10c-2.618 0-5.023.915-6.912 2.442l-1.257-1.556zm3.142 3.89A7.967 7.967 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.257 1.556A5.975 5.975 0 0 0 12 15c-1.428 0-2.74.499-3.77 1.332l-1.257-1.556zm3.142 3.89A2.987 2.987 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21l-1.885-2.334z"></path>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="margin-bottom-2 margin-tiny">
                          <h4 className="heading-h6-2">Web3</h4>
                        </div>
                        <div className="text-size-small text-color-muted compare-area">
                          und Defi Zugang
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-e96a43e5-6d17-7b1a-937e-5ba447a1b984-303bfe43"
                    className="comparison-right"
                  >
                    <div id="w-node-e96a43e5-6d17-7b1a-937e-5ba447a1b985-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-e96a43e5-6d17-7b1a-937e-5ba447a1b98b-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-e96a43e5-6d17-7b1a-937e-5ba447a1b988-303bfe43">
                      <div className="badge primary-light small">
                        <div className="icon-1x1-xsmall w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-e96a43e5-6d17-7b1a-937e-5ba447a1b98d-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                    <div id="w-node-e96a43e5-6d17-7b1a-937e-5ba447a1b98f-303bfe43">
                      <div className="badge primary-light small bade-red"></div>
                    </div>
                  </div>
                </div>
                <div className="cta-support-2">
                  <div id="w-node-_58d2a3a1-c4e6-5fa0-3b65-182ea7aa5b1f-303bfe43">
                    <div
                      id="w-node-_58d2a3a1-c4e6-5fa0-3b65-182ea7aa5b20-303bfe43"
                      className="margin-bottom-2 margin-tiny extra-margin"
                    >
                      <h2 className="heading-h4-2">Sag uns was dir fehlt</h2>
                    </div>
                    <div className="text-size-medium-2 inverse-text-color-muted extra-padding">
                      Wir freuen uns auch über ein einfaches &quot;Hallo&quot;
                    </div>
                  </div>
                  <div id="w-node-_58d2a3a1-c4e6-5fa0-3b65-182ea7aa5b30-303bfe43">
                    <a href="#" className="button secondary w-inline-block">
                      <div className="button-inner">
                        <div className="button-inner-text-2">
                          Schreib mit uns
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="security-section" className="section-home-security">
          <div className="page-padding">
            <div className="container-default">
              <div className="padding-vertical padding-xxhuge">
                <div className="home-security-grid">
                  <div
                    id="w-node-f078e755-2bf3-4a85-c9e7-340072c0199b-303bfe43"
                    data-w-id="f078e755-2bf3-4a85-c9e7-340072c0199b"
                    // style="
                    //   -webkit-transform: translate3d(0, 50px, 0)
                    //     scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0)
                    //     skew(0, 0);
                    //   -moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   -ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   opacity: 0;
                    // "
                    className="home-trading-grid-left"
                  >
                    <div
                      id="w-node-f078e755-2bf3-4a85-c9e7-340072c0199c-303bfe43"
                      className="margin-bottom margin-small"
                    >
                      <div className="heading-h6-container">
                        <h2 className="heading-6-white">
                          Non-custodial und sicher
                        </h2>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <div className="max-width-full">
                        <h2 className="heading-2-white margin-bottom margin-medium wide-break">
                          Ruhig schlafen dank höchster Sicherheitsstandards
                        </h2>
                        <h2 className="heading-2-white margin-bottom margin-medium alternative-break">
                          Ruhig schlafen dank höchster Sicherheits-standards
                        </h2>
                      </div>
                    </div>
                    <div className="home-security-grid">
                      <div
                        id="w-node-f078e755-2bf3-4a85-c9e7-340072c019a8-303bfe43"
                        className="home-security-grid-left padding-medium"
                      >
                        <div>
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-h6-security-white">
                              Multi Party Sicherheit
                            </h3>
                          </div>
                          <div className="margin-bottom">
                            <div className="text-size-security-white">
                              Versteckte private Schlüssel für jedes Unterkonto
                              - gesichert und mit zwei Faktoren über MPC (Multi
                              Party Computation) geteilt.
                              <br />
                              <br />
                              Nur MPC-signierte Transaktionen ohne Single Point
                              of Failure.
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-f078e755-2bf3-4a85-c9e7-340072c019b3-303bfe43"
                          className="home-security-button-container"
                        >
                          <div className="button-round-blue-fade">
                            <a
                              href="earlyaccess.html"
                              target="_blank"
                              className="button-text white w-inline-block"
                            >
                              <div className="button-text-wrapper">
                                <div className="button-text-text-2 white">
                                  Mehr zu MPC lesen
                                </div>
                                <div className="button-text-icon-wrapper white">
                                  <div className="button-text-icon white w-embed">
                                    <svg
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="20"
                                      height="20"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-f078e755-2bf3-4a85-c9e7-340072c019b7-303bfe43"
                        className="home-security-grid-right-top padding-medium"
                      >
                        <div className="margin-vertical margin-huge">
                          <h3 className="heading-h3-security-white">
                            MPC wird seit Jahren von Institutionen genutzt, um
                            Milliarden von Euro zu sichern.
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="home-security-grid">
                      <div className="home-security-grid-right-bottom padding-medium">
                        <div id="w-node-f078e755-2bf3-4a85-c9e7-340072c019bd-303bfe43">
                          <div className="padding-medium-security">
                            <h3 className="heading-h3-security-white">
                              Non-Custodial
                            </h3>
                          </div>
                          <div
                            id="w-node-f078e755-2bf3-4a85-c9e7-340072c019c1-303bfe43"
                            className="text-size-security-white-centered"
                          >
                            Niemand außer Dir hat Zugriff auf dein Geld.
                          </div>
                        </div>
                      </div>
                      <div className="home-security-grid-left padding-medium">
                        <div>
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-h6-security-white">
                              Verlustschutz deiner Keys
                            </h3>
                          </div>
                          <div className="margin-bottom">
                            <div className="text-size-security-white">
                              Geteilte Generierung von Schlüsseln und
                              Seed-Phrasen, ohne dass diese aufgeschrieben oder
                              versteckt werden müssen.
                              <br />
                              <br />
                              Einfache Zwei-Faktor-Wallet-Wiederherstellung ohne
                              Verlustrisiko.
                            </div>
                          </div>
                        </div>
                        <div
                          id="w-node-f078e755-2bf3-4a85-c9e7-340072c019cb-303bfe43"
                          className="home-security-button-container"
                        >
                          <div className="button-round-blue-fade">
                            <a
                              href="earlyaccess.html"
                              target="_blank"
                              className="button-text white w-inline-block"
                            >
                              <div className="button-text-wrapper">
                                <div className="button-text-text-2 white">
                                  Mehr zu MPC lesen
                                </div>
                                <div className="button-text-icon-wrapper white">
                                  <div className="button-text-icon white w-embed">
                                    <svg
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="20"
                                      height="20"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-security-quote margin-top margin-huge">
                      <div className="margin-bottom only-phone">
                        <div className="text-size-quote-white">
                          <span className="text-span-2">
                            &quot;Sicherheit hat bei Superlight oberste
                            Priorität, und MPC ist die perfekte Lösung,
                          </span>
                          die uns den Zugang zu einfacherem und leichterem
                          Krypto ermöglicht, ohne die Sicherheit zu
                          gefährden.&quot;
                        </div>
                      </div>
                      <div
                        id="w-node-f078e755-2bf3-4a85-c9e7-340072c019d5-303bfe43"
                        className="home-security-opensource-container"
                      >
                        <div className="margin-bottom opensource-center">
                          <div className="text-size-security-white-right">
                            Alles Open-Source
                          </div>
                        </div>
                        <a
                          href="https://github.com/lauhon/WalletPOC"
                          target="_blank"
                          className="home-security-opensource-button w-button"
                        >
                          Ansehen auf Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-peoples">
          <div className="page-padding">
            <div className="container-default">
              <div className="padding-top padding-xxhuge">
                <div className="margin-bottom margin-huge">
                  <div
                    data-w-id="a7e4e1b9-d2b4-a45e-afdd-d7dfce9bf134"
                    // style="
                    //   -webkit-transform: translate3d(0, 50px, 0)
                    //     scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0)
                    //     skew(0, 0);
                    //   -moz-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   -ms-transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   transform: translate3d(0, 50px, 0) scale3d(1, 1, 1)
                    //     rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                    //   opacity: 0;
                    // "
                    className="text-align-center"
                  >
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-26">Für das stehen wir</h2>
                    </div>
                    <div className="max-width-large align-center">
                      <div className="text-size-large text-align-center">
                        Wir bei Superlight sind überzeugt von einem gerechterem
                        Finanzsystem. Ein dezentrales System schließt niemanden
                        aus und sperrt keine Konten.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="people-grid">
                  <div className="people-grid-left">
                    <img
                      src="images/People-1.png"
                      loading="lazy"
                      id="w-node-a7e4e1b9-d2b4-a45e-afdd-d7dfce9bf13d-303bfe43"
                      alt=""
                      className="people-image-1"
                    />
                    <img
                      src="images/People-2.png"
                      loading="lazy"
                      id="w-node-a7e4e1b9-d2b4-a45e-afdd-d7dfce9bf13e-303bfe43"
                      alt=""
                      className="people-image-2"
                    />
                    <img
                      src="images/People-3.png"
                      loading="lazy"
                      id="w-node-a7e4e1b9-d2b4-a45e-afdd-d7dfce9bf13f-303bfe43"
                      alt=""
                      className="people-image-3"
                    />
                    <img
                      src="images/People-4.png"
                      loading="lazy"
                      id="w-node-a7e4e1b9-d2b4-a45e-afdd-d7dfce9bf140-303bfe43"
                      alt=""
                      className="people-image-4"
                    />
                  </div>
                  <div
                    id="w-node-a7e4e1b9-d2b4-a45e-afdd-d7dfce9bf141-303bfe43"
                    data-w-id="a7e4e1b9-d2b4-a45e-afdd-d7dfce9bf141"
                    className="people-grid-right"
                  >
                    <div className="people-more-from-container">
                      <div className="text-size-large">Weniger von</div>
                      <div className="people-text not-inverted">
                        Exklusivität, Überwachung, Kontrolle, Gebühren,
                        Diskrimierung
                      </div>
                    </div>
                    <div className="people-less-from-container">
                      <div className="text-size-large">Mehr von</div>
                      <div className="people-text not-inverted">
                        Ökonomische, finanzielle, politische Freiheit.
                        Privatsphäre, Fairness, Inklusivität, Innovation,
                        Gemeinsamheit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-cta margin-vertical margin-xxhuge">
          <div className="page-padding">
            <div className="container-default">
              <div
                data-w-id="01848c26-af51-6444-7f85-62b67c6fcd37"
                className="cta"
              >
                <div
                  id="w-node-_01848c26-af51-6444-7f85-62b67c6fcd38-7c6fcd34"
                  className="cta-grid-left"
                >
                  <div
                    id="w-node-_01848c26-af51-6444-7f85-62b67c6fcd39-7c6fcd34"
                    className="margin-bottom margin-small"
                  >
                    <h2 className="heading-h2-white">
                      Deine App.
                      <br />
                      Dein Krypto.
                    </h2>
                  </div>
                  <div
                    id="w-node-_01848c26-af51-6444-7f85-62b67c6fcd3e-7c6fcd34"
                    className="margin-bottom margin-medium"
                  >
                    <div className="text-size-medium">
                      Noch am Überlegen? Probier es einfach aus, es ist
                      kostenlos und benötigt keine Anmeldung.
                    </div>
                  </div>
                  <div className="margin-bottom margin-xlarge">
                    <div className="cta-list-grid">
                      <div className="list">
                        <div className="list-item">
                          <div className="badge inverse small">
                            <div className="icon-1x1-xsmall w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                              </svg>
                            </div>
                          </div>
                          <div>Instant transactions</div>
                        </div>
                        <div className="list-item">
                          <div className="badge inverse small">
                            <div className="icon-1x1-xsmall w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                              </svg>
                            </div>
                          </div>
                          <div>Saving accounts</div>
                        </div>
                      </div>
                      <div className="list">
                        <div className="list-item">
                          <div className="badge inverse small">
                            <div className="icon-1x1-xsmall w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                              </svg>
                            </div>
                          </div>
                          <div>Payments worldwide</div>
                        </div>
                        <div className="list-item">
                          <div className="badge inverse small">
                            <div className="icon-1x1-xsmall w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                              </svg>
                            </div>
                          </div>
                          <div>100% mobile banking</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cta-badges">
                    <a
                      href="earlyaccess.html"
                      target="_blank"
                      className="link-block w-inline-block"
                    >
                      <div className="button primary button-outer">
                        <div className="button-inner">
                          <div className="button-inner-text">
                            Early Access jetzt holen
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  id="w-node-_01848c26-af51-6444-7f85-62b67c6fcd5c-7c6fcd34"
                  className="cta-grid-right"
                >
                  <div className="cta-image-wrapper">
                    <img
                      src="images/Wallets-Overview---Empty.png"
                      loading="eager"
                      sizes="100vw"
                      srcSet="
                        images/Wallets-Overview---Empty-p-500.png 500w,
                        images/Wallets-Overview---Empty.png       820w
                      "
                      alt=""
                      className="cta-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-faq">
          <div className="page-padding">
            <div className="container-default">
              <div className="padding-vertical padding-xxhuge">
                <div className="faq-grid">
                  <div
                    id="w-node-bbfb49c1-f48b-9ff9-f0c0-ed4d9f323e6d-ae6e8d9d"
                    className="faq-grid-left"
                  >
                    <div className="margin-bottom margin-large">
                      <h2 className="heading-16">Noch Fragen?</h2>
                    </div>
                    <div className="margin-bottom margin-large">
                      <div className="faq-contact-list">
                        <div className="list-item">
                          <div className="badge primary-light large only-phone">
                            <div className="icon-1x1-default w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M16.1 3a5.023 5.023 0 0 0 0 2H4.511l7.55 6.662 5.049-4.52c.426.527.958.966 1.563 1.285l-6.601 5.911L4 7.216V19h16V8.9a5.023 5.023 0 0 0 2 0V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1zM21 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                              </svg>
                            </div>
                          </div>
                          <div>
                            <div className="margin-bottom margin-tiny">
                              <a
                                href="mailto:help@superlight.me"
                                className="heading-h6"
                              >
                                help@superlight.me
                              </a>
                            </div>
                            <div className="text-size-small text-color-muted">
                              Support Email
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="support.html"
                      className="button-text w-inline-block"
                    >
                      <div className="button-text-wrapper">
                        <div className="button-text-text-2">Zum Support</div>
                        <div className="button-text-icon-wrapper">
                          <div className="button-text-icon w-embed">
                            <svg
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    id="w-node-bbfb49c1-f48b-9ff9-f0c0-ed4d9f323e7e-ae6e8d9d"
                    className="faq-grid-right"
                  >
                    <div
                      id="w-node-bbfb49c1-f48b-9ff9-f0c0-ed4d9f323e7f-ae6e8d9d"
                      className="faq"
                    >
                      <div className="accordion first">
                        <div className="accordion-title-wapper">
                          <div className="accordion-title-grid">
                            <h3 className="accordion-title">
                              Wie erzeuge ich ein neues Wallet?
                            </h3>
                            <div className="accordion-icon">
                              <div className="icon-1x1-default dark w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 30 31"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.75 14.25V6.75H16.25V14.25H23.75V16.75H16.25V24.25H13.75V16.75H6.25V14.25H13.75Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-content-wrapper">
                          <div className="accordion-content">
                            <p className="paragraph">
                              Mit jedem Subwallet wird dir automatisch ein
                              eigenständiges Wallet erzeugt. Darin kannst du
                              Bitcoin, Ethereum, US-Dollar Stablecoins und viele
                              weitere verwalten.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-title-wapper">
                          <div className="accordion-title-grid">
                            <h3 className="accordion-title">
                              Wo kann ich mit Superlight bezahlen?
                            </h3>
                            <div className="accordion-icon">
                              <div className="icon-1x1-default dark w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 30 31"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.75 14.25V6.75H16.25V14.25H23.75V16.75H16.25V24.25H13.75V16.75H6.25V14.25H13.75Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-content-wrapper">
                          <div className="accordion-content">
                            <p className="paragraph">
                              Überall wo Kartenzahlung oder Kryptowährungen
                              akzeptiert sind.
                              <br />
                              Frage auch gerne nach, ob du mit Kryptowährungen
                              direkt bezahlen kannst. So spart der Verkäufer und
                              du unnötige Gebühren.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-title-wapper">
                          <div className="accordion-title-grid">
                            <h3 className="accordion-title">
                              Ab wann ist Superlight verfügbar?
                            </h3>
                            <div className="accordion-icon">
                              <div className="icon-1x1-default dark w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 30 31"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.75 14.25V6.75H16.25V14.25H23.75V16.75H16.25V24.25H13.75V16.75H6.25V14.25H13.75Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-content-wrapper">
                          <div className="accordion-content">
                            <p className="paragraph">
                              Wir arbeiten mit Hochdruck daran deinen Early
                              Access Zugang zu aktivieren. Du kannst mit Mitte
                              2023 damit rechnen. Du wirst nach Anmeldung per
                              E-Mail benachrichtigt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-title-wapper">
                          <div className="accordion-title-grid">
                            <h3 className="accordion-title">
                              Seid ihr eine Bank?
                            </h3>
                            <div className="accordion-icon">
                              <div className="icon-1x1-default dark w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 30 31"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.75 14.25V6.75H16.25V14.25H23.75V16.75H16.25V24.25H13.75V16.75H6.25V14.25H13.75Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-content-wrapper">
                          <div className="accordion-content">
                            <p className="paragraph">
                              Nein.
                              <br />
                              <br />
                              Alles an Geld bei Superlight gehört nur dir und
                              auch nur du hast Zugriff darauf. Wie bieten dir
                              nur die Infrastruktur damit alles so einfach läuft
                              wie nur irgendwie möglich.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion last">
                        <div className="accordion-title-wapper">
                          <div className="accordion-title-grid">
                            <h3 className="accordion-title">
                              Kann ich Kryptowährungen auch direkt an Ibans
                              senden?
                            </h3>
                            <div className="accordion-icon">
                              <div className="icon-1x1-default dark w-embed">
                                <svg
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  viewBox="0 0 30 31"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.75 14.25V6.75H16.25V14.25H23.75V16.75H16.25V24.25H13.75V16.75H6.25V14.25H13.75Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-content-wrapper">
                          <div className="accordion-content">
                            <p className="paragraph">
                              Ja das ist möglich.
                              <br />
                              <br />
                              Diese werden dann automatisch zum aktuellen Kurs
                              umgewandelt und versandt.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div
          data-w-id="823b313e-922b-0a49-af35-7cd998b63e2f"
          className="line"
        ></div>
        <section className="section-newsletter">
          <div className="page-padding padding-vertical padding-xxhuge">
            <div className="container-default">
              <div>
                <div className="margin-bottom margin-large">
                  <div className="section-newsletter-heading">
                    <div
                      id="w-node-_1c1e1ac6-7f6a-ec9a-257f-5cfde6330cad-3fd6c0e0"
                      className="max-width-large"
                    >
                      <h2 className="heading-h2-centered">
                        Schütze jetzt dein Geld mit dem privaten Superwallet
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="div-block-13">
                  <a
                    href="earlyaccess.html"
                    target="_blank"
                    className="link-block w-inline-block"
                  >
                    <div className="button primary button-outer">
                      <div className="button-inner">
                        <div className="button-inner-text">
                          Kostenloser Early Access
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-padding-footer">
          <div className="container-large">
            <div className="padding-bottom padding-large">
              <div className="line-footer"></div>
              <div className="footer-bottom margin-top margin-medium">
                <div className="div-block-10">
                  <img
                    src="images/Logo-Black.png"
                    loading="lazy"
                    width="250"
                    sizes="150px"
                    srcSet="
                      images/Logo-Black-p-500.png 500w,
                      images/Logo-Black.png       794w
                    "
                    alt=""
                  />
                </div>
                <div
                  id="w-node-_010eb94e-e537-e275-f514-c9f83fd6c12a-3fd6c0e0"
                  className="footer-subnav"
                >
                  <a
                    href="transparency/imprint.html"
                    className="footer-subnav-link"
                  >
                    Impressum
                  </a>
                  <a
                    href="transparency/privacy.html"
                    className="footer-subnav-link"
                  >
                    Datenschutz
                  </a>
                  <div className="text-size-small-footer text-color-muted">
                    ©2023 Superlight GmbH i.G.
                  </div>
                </div>
                <div
                  id="w-node-_3af0f097-e1e2-94e2-2a2a-2853b9605a29-3fd6c0e0"
                  className="div-block-12"
                >
                  <a href="#" className="w-inline-block">
                    <img
                      src="images/twitter-2.svg"
                      loading="lazy"
                      alt=""
                      className="twitter-link"
                    />
                  </a>
                  <a href="#" className="w-inline-block">
                    <img
                      src="images/instagram-2.svg"
                      loading="lazy"
                      alt=""
                      className="twitter-link"
                    />
                  </a>
                  <a href="#" className="w-inline-block">
                    <img
                      src="images/linkedin.svg"
                      loading="lazy"
                      alt=""
                      className="twitter-link"
                    />
                  </a>
                </div>
              </div>
              <div className="footer-bottom-note">
                <div className="empty-placeholder"></div>
                <div className="footer-bottom-note-text">
                  Dargestellte Features können je nach Umsetzbarkeit in der
                  finalen Version variieren.
                </div>
                <div className="language-picker">
                  <a href="#" className="link-de w-inline-block"></a>
                  <a href="#" className="link-en w-inline-block"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
