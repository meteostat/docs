import React, { type ReactNode } from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import type { Props } from "@theme/TOC";

import styles from "./styles.module.css";
import Ad from "@site/src/components/Ad";

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";

export default function TOC({ className, ...props }: Props): ReactNode {
  return (
    <div className={clsx(styles.tableOfContents, "thin-scrollbar", className)}>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
      <div style={{ position: "static" }}>
        <script
          type="text/javascript"
          src="//cdn.carbonads.com/carbon.js?serve=CESDK2QN&placement=devmeteostatnet&format=responsive"
          id="_carbonads_js"
        ></script>
      </div>
    </div>
  );
}
