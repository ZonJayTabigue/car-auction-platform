import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler (
   req: NextApiRequest,
   res: NextApiResponse
) {
   if  (req.method === 'GET') {
      console.log("teeeest")
   }
}