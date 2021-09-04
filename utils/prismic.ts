import Prismic from "@prismicio/client";
import { Document } from "@prismicio/client/types/documents";

const apiEndpoint = "https://cigales-idf.prismic.io/api/v2";

export const getScriptSrc = () => {
  const match = apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/);
  if (!match) throw new Error("Invalid API endpoint");
  return `https://static.cdn.prismic.io/prismic.js?new=true&repo=${match[1]}`;
};

export const linkResolver = (doc: Document) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  return "/";
};

export const hrefResolver = (doc: Document) => {
  if (doc.type === "page") {
    return "/[uid]";
  }
  return "/";
};

export const createClient = (req: any = null) =>
  Prismic.client(apiEndpoint, {
    req,
  });
