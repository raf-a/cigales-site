import React, { ComponentType, VFC } from "react";
import Content from "./slices/Content";
import Numbers from "./slices/Numbers";
import QuoteList from "./slices/QuoteList";
import { SliceProps } from "./slices/SliceProps";

const slices: Record<string, ComponentType<SliceProps>> = {
  content: Content,
  numbers: Numbers,
  quote_list: QuoteList,
};

const SliceZone: VFC<{ sliceZone: any }> = ({ sliceZone }) => {
  return (
    <div className="container">
      {sliceZone.map((slice: any, index: number) => {
        const Slice = slices[slice.slice_type];
        if (!Slice) {
          console.warn("Unhandled slice in SliceZone");
          console.log(slice);
          return null;
        }
        return (
          <div key={index} className="slice">
            <Slice slice={slice} />
          </div>
        );
      })}
      <style jsx>{`
        .slice {
          margin: 8rem 0;
        }
      `}</style>
    </div>
  );
};

export default SliceZone;
