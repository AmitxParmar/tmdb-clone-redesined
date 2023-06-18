import Image from "next/image";

// helpers
import { calcTime, convertMoney } from "@/helpers";
// components
import Thumb from "./Thumb";

//types
import { Crew, Credits } from "@/types";

type Props = {
  creditsPromise: Promise<Credits>;
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  summary: string;
  rating: number;
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfo = async ({
  creditsPromise,
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  time,
  budget,
  revenue,
}: Props) => {
  const credits = await creditsPromise;
    return <div className="relative w-full h-auto p-4">
        <div className="relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90">
            <div></div>
      </div>
  </div>;
};

export default MovieInfo;
