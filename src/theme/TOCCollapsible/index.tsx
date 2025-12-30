import React, { type ReactNode } from "react";
import TOCCollapsible from "@theme-original/TOCCollapsible";
import type TOCCollapsibleType from "@theme/TOCCollapsible";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof TOCCollapsibleType>;

export default function TOCCollapsibleWrapper(props: Props): ReactNode {
  return (
    <>
      <TOCCollapsible {...props} />
    </>
  );
}
