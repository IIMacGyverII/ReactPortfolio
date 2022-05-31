import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Checkout some of my work",
    paragraph:
      "Most of this I have done as homework while attending Northwestern University",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            id="myWork"
            className="center-content"
          />
          <div className={splitClasses}>
            <div
              className="split-item"
              onClick
              href="https://github.com/IIMacGyverII/Tech_Blog"
            >
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <a href="https://github.com/IIMacGyverII/Tech_Blog">
                    Tech Blog
                  </a>
                </div>
                <h3 className="mt-0 mb-12">
                  <a href="https://github.com/IIMacGyverII/Tech_Blog">
                    A simple blog using mySQL and user authentication
                  </a>
                </h3>
                <p
                  href="https://github.com/IIMacGyverII/Tech_Blog"
                  className="m-0"
                >
                  <a href="https://github.com/IIMacGyverII/Tech_Blog">
                    Make an account, create posts, view posts and make comments
                    on posts all managed within a mySQL database. Pretty
                    straight forward.
                  </a>
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <a href="https://github.com/IIMacGyverII/Tech_Blog">
                <Image
                  src={require("./../../assets/img/ss_techblog.png")}
                  alt="Tech Blog"
                  width={528}
                  href="https://github.com/IIMacGyverII/Tech_Blog"
                  height={396}
                />
                </a>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                <a href="https://github.com/IIMacGyverII/therecipeforsuccess">
                  The Recipe for Success</a>
                </div>
                <h3 className="mt-0 mb-12">
                <a href="https://github.com/IIMacGyverII/therecipeforsuccess">
                  Find your food here
                  </a>
                  </h3>
                <p className="m-0">
                <a href="https://github.com/IIMacGyverII/therecipeforsuccess">
                  A group project we made to create, view and sort recipes based
                  on common food alergies and perferences.
                  </a>
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                  <a href="https://github.com/IIMacGyverII/therecipeforsuccess">
                <Image
                  src={require("./../../assets/img/ss_therecipeforsuccess.png")}
                  alt="The Recipe for Success"
                  width={528}
                  height={396}
                  />
                  </a>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                <a href="https://github.com/IIMacGyverII/QuickMovieLookup">
                  Quick Movie Lookup
                  </a>
                </div>
                <h3 className="mt-0 mb-12">
                <a href="https://github.com/IIMacGyverII/QuickMovieLookup">
                  Find your favorite movies
                  </a>
                  </h3>
                <p className="m-0">
                <a href="https://github.com/IIMacGyverII/QuickMovieLookup">
                  Another group project utilizing, IMDB API and linking it with
                  youtube API to quickly get the movie info and a trailer for
                  the movie
                  </a>
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <a href="https://github.com/IIMacGyverII/QuickMovieLookup">
                <Image
                  src={require("./../../assets/img/ss_quickmovielookup.png")}
                  alt="Quick Movie Lookup"
                  width={528}
                  height={396}
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
