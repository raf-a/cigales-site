import { NextApiRequest, NextApiResponse } from "next";

const exitPreviewApi = (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData();
  res.writeHead(307, { Location: "/" });
  res.end();
};

export default exitPreviewApi;
