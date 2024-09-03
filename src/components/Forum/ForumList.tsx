import React from "react";
import ForumCard from "./ForumCard";

type Props = {};

const ForumList = (props: Props) => {
  return (
    <div>
      {[1, 2].map((_, idx) => (
        <div key={idx}>
          <ForumCard />
        </div>
      ))}
    </div>
  );
};

export default ForumList;
