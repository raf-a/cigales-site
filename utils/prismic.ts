import Prismic from "@prismicio/client";
import { Document } from "@prismicio/client/types/documents";
import { QueryOptions } from "@prismicio/client/types/ResolvedApi";
import { PreviewData } from "next";
import { Link } from "prismic-reactjs";

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
  if (doc.type === "blog") {
    return "/blog";
  }
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`;
  }
  return "/";
};

export const hrefResolver = (doc: Document) => {
  if (doc.type === "page") {
    return "/[uid]";
  }
  if (doc.type === "blog") {
    return "/blog";
  }
  if (doc.type === "blog_post") {
    return "/blog/[uid]";
  }
  return "/";
};

const client = Prismic.client(apiEndpoint);

export const createClient = (req: any = null) =>
  Prismic.client(apiEndpoint, {
    req,
  });

const buildOptions = (previewData: PreviewData): QueryOptions =>
  typeof previewData === "string" ? { ref: previewData } : {};

export const getHomepage = async (previewData?: PreviewData) =>
  await client.getSingle("homepage", buildOptions(previewData));

export const getByUID = async (
  type: string,
  uid: string,
  previewData: PreviewData
) => await client.getByUID(type, uid, buildOptions(previewData));

export const getLinkUrl = (link: any) => Link.url(link, linkResolver);
