import type { NextApiRequest, NextApiResponse } from "next";

// API URLs
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "@/config";
// Basic fetchlay
import { basicFetch } from "@/api/fetchFunctions";
// Types
import { Movies } from '@/api/types'

export default async function GET(req: NextApiRequest, res: NextApiResponse<Movies>) {
    // Grab search params
    const { page, search } = req.query;

    const endpoint: string = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;

    const data = await basicFetch<Movies>(endpoint);

    res.status(200).json(data);
}