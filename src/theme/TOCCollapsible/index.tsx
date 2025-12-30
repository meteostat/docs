import React, { type ReactNode } from "react";
import TOCCollapsible from "@theme-original/TOCCollapsible";
import type TOCCollapsibleType from "@theme/TOCCollapsible";
import type { WrapperProps } from "@docusaurus/types";
import Ad from "@site/src/components/Ad";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof TOCCollapsibleType>;

export default function TOCCollapsibleWrapper(props: Props): ReactNode {
  return (
    <>
      <TOCCollapsible {...props} />
      <div className={styles.adWrapper}>
        <Ad />
      </div>
    </>
  );
}
