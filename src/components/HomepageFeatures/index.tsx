import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  to?: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Meteostat Python",
    to: "/python",
    Svg: require("@site/static/img/undraw_programmer_raqr.svg").default,
    description: (
      <>
        Access historical weather and climate data using our open-source Python
        library.
      </>
    ),
  },
  {
    title: "Bulk Data",
    to: "/data",
    Svg: require("@site/static/img/undraw_visual-data_1eya.svg").default,
    description: (
      <>
        Download long-term time series of weather stations in CSV format for
        your own analysis.
      </>
    ),
  },
  {
    title: "JSON API",
    to: "/api",
    Svg: require("@site/static/img/undraw_code-review_jdgp.svg").default,
    description: (
      <>
        Integrate weather and climate data into your applications using our
        easy-to-use JSON API.
      </>
    ),
  },
];

function Feature({ title, Svg, description, to }: FeatureItem) {
  const content = (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </>
  );

  return (
    <div className={clsx("col col--4")}>
      {to ? (
        <Link to={to} className={styles.featureLink} aria-label={title}>
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
