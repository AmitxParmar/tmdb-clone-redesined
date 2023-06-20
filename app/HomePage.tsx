"use client";
import React, { useState } from "react";

import Link from "next/link";

//fetch hoook
import { useFetchMovies } from "@/app/api/fetchHooks";
// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "@/config";
// components
import Header from "@/components/Header/Header";
import Hero from "@/components/Header/Hero";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Spinner from "@/components/Skeletons/Cards";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  // error handling
  if (error) return <div>Oh noooooooo something went wrong!</div>;
  console.log(data);
  return (
    <main
      className="main-element relative h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data.pages[0].results[0].backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data.pages[0].results[0].backdrop_path
              : "/no-image.jpg"
          }
          title={data.pages[0].results[0].title}
          text={data.pages[0].results[0].overview}
        />
      ) : null}
      <Grid
        className="p-4 max-w-7xl m-auto"
        title={
          query
            ? `Search Results: ${data?.pages[0].total_results}`
            : "Popular Movies"
        }
      >
        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`}>
                  <div className="cursor-pointer hover:opacity-80 duration-300">
                    <Card
                      imgUrl={
                        movie.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                          : "/no_image.jpg"
                      }
                      title={movie.original_title}
                    />
                  </div>
                </Link>
              ))
            )
          : null}
      </Grid>
      {isLoading || isFetching ? (
        <div className="grid max-w-7xl m-auto p-4 grid-cols-auto-fill gap-8">
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
          <div className="bg-gray-300/50 animate-pulse h-60 rounded-lg w-40"></div>
        </div>
      ) : null}
    </main>
  );
};

export default HomePage;
