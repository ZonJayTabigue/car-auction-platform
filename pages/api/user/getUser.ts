import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

console.log("user control")

export default async function handler (
   req: NextApiRequest,
   res: NextApiResponse
) {
   res.status(200).json({ name: 'John Deep'})
}