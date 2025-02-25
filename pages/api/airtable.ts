// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Airtable from "airtable";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method !== "POST")
  //   return res.status(404).json({ error: "Not found" });

  const baseId = process.env.AIRTABLE_BASE;
  const apiKey = process.env.AIRTABLE_API_KEY;
  const tableName = "Contact";

  if (baseId && apiKey) {
    const db = new Airtable({ apiKey: apiKey }).base(baseId);
    const table = db(tableName);

    await table.create({
      Name: req.body.name,
      Email: req.body.email,
      Message: req.body.message,
    });

    res.status(200).json({ success: true });
  }
}
