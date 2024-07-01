import { useContext, useRef } from "react";
import { curve } from "../assets";
import Section from "./Section";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { screenSizeContext } from "../context/screenSize";
import PostContainer from "./PostContainer";
import TypingAnimation from "./design/TypingAnimation";
import SubHeader from "./SubHeader";

const Hero = () => {
  const parallaxRef = useRef(null);
  const { screenSize, getHeight, mobileStyle } = useContext(screenSizeContext);
  const isMobile =
    screenSize === "sm" || screenSize === "md" || screenSize === "xs";

  return (
    <>
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <SubHeader />
        <div className="container relative " ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <div className="flex flex-col items-center">
              <div
                style={{
                  height: getHeight(),
                  ...(isMobile && mobileStyle),
                }}
              >
                <h1 className="h1 mb-6 ">
                  Stand strong for theDefense and Truth of {` `}
                  <span className="inline-block relative">
                    Israel{" "}
                    <img
                      src={curve}
                      className="absolute top-full left-0 w-full xl:-mt-2"
                      width={624}
                      height={28}
                      alt="Curve"
                    />
                  </span>
                </h1>
                <TypingAnimation
                  text=" Join the fight for Israel's right to defend itself against terror
              and combat misconceptions about apartheid. Remembering the horrors
              of October 7th, let's unite in solidarity for truth and justice."
                  interval="40"
                  style="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
                  loop={false}
                />
              </div>
            </div>
          </div>

          <div className="relative bg-n-8 rounded-[1rem]">
            <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <img
                className="object-cover w-full h-full"
                src="/src/assets/hero/israel and america.png"
                alt="Voice Of Israel"
              />
            </div>
          </div>

          {/* Gradient component */}
          <Gradient />
        </div>

        {/* Background circles component */}
        <BackgroundCircles />
      </Section>
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="VideosContainer"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
              <PostContainer />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
