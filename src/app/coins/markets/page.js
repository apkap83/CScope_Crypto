import CoinsList from "@/app/ui/coinsList/coinsList";
import { ListSkeleton } from "@/app/ui/skeleton/skeletons";
import Pagination from "@/app/ui/pagination/pagination";
import { Fragment, Suspense } from "react";

export default function Home({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <Fragment>
      <Suspense key={query + currentPage} fallback={<ListSkeleton />}>
        <CoinsList query={query} currentPage={currentPage} />
      </Suspense>
      <Suspense>
        {!query && (
          <div className="mt-5 flex w-full justify-center">
            <Pagination />
          </div>
        )}
      </Suspense>
    </Fragment>
  );
}
