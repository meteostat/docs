import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

const CarbonAds = () => {
  const location = useLocation();

  useEffect(() => {
    const isCarbonExist = document.querySelector("#carbonads");

    if (!!isCarbonExist) {
      // @ts-ignore
      _carbonads.refresh();
      return;
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//cdn.carbonads.com/carbon.js?serve=CESDK2QN&placement=devmeteostatnet";
    script.id = "_carbonads_js";
    script.async = true;

    document.querySelectorAll(".carbon-ads")[0].appendChild(script);
  }, [location.pathname]);

  return <div className="carbon-ads"></div>;
};

export default CarbonAds;
