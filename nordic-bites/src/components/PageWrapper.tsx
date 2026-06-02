import type { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return <div className="page-transition">{children}</div>;
}

export default PageWrapper;
