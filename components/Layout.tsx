import { Document } from "@prismicio/client/types/documents";
import React, { FC } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Wave from "./Wave";

const Layout: FC<{
  homepageDoc: Document;
}> = ({ children, homepageDoc }) => (
  <>
    <Header homepageDoc={homepageDoc} />
    {children}
    <Wave />
    <Container padding colored>
      <Footer homepageDoc={homepageDoc} />
    </Container>
  </>
);

export default Layout;
