import { Fragment, Suspense } from "react";
import Search from "@/app/ui/search/search";

export default function Layout({ children }) {
  return (
    <Fragment>
      <h1 className="text-xl my-2">Coins List</h1>
      <Suspense>
        <Search placeholder="Search coins..." />
      </Suspense>
      {children}
    </Fragment>
  );
}
