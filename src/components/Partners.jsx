import React from "react";
import google from "../assets/images/google.webp";
import slack from "../assets/images/slack.png";
import atlassian from "../assets/images/atlassian.svg";
import dropbox from "../assets/images/dropbox.png";
import shopify from "../assets/images/shopify.png";

const Partners = () => {
  return (
    <div className="flex gap-16 justify-center mb-24 flex-wrap">
      <img
        className="h-6 brightness-0  invert opacity-50"
        src={google}
        alt="Google"
      />
      <img
        className="h-6 brightness-0  invert opacity-50"
        src={slack}
        alt="Slack"
      />
      <img
        className="h-6 brightness-0  invert opacity-50"
        src={atlassian}
        alt="Atlassian"
      />
      <img
        className="h-6 brightness-0  invert opacity-50"
        src={dropbox}
        alt="Dropbox"
      />
      <img
        className="h-6 brightness-0  invert opacity-50"
        src={shopify}
        alt="Shopify"
      />
    </div>
  );
};

export default Partners;
