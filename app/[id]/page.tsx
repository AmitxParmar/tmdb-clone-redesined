import Breadcrumb from "@/components/Breadcrumb";
import MovieInfo from "@/components/MovieInfo";
import React from "react";

type Props = {};

const SingleMoviePage = (props: Props) => {
  return (
    <main>
      <Breadcrumb title="test" />
      <MovieInfo/>
    </main>
  );
};

export default SingleMoviePage;
