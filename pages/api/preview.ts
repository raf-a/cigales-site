import { NextApiRequest, NextApiResponse } from "next";
import { createClient, linkResolver } from "utils/prismic";

const previewApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, documentId } = req.query;

  if (typeof token !== "string" || typeof documentId !== "string") {
    res.status(400).end();
    return;
  }

  const redirectUrl = await createClient(req)
    .getPreviewResolver(token, documentId)
    .resolve(linkResolver, "/");

  if (!redirectUrl) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData(token);

  // Redirect the user to the share endpoint from same origin. This is
  // necessary due to a Chrome bug:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=696204
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`
  );
  res.end();
};

export default previewApi;
