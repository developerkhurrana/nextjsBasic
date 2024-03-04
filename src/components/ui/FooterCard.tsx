import React from "react";

function FooterCard({ title, Item_Title_1 }) {
  return (
    <div className="flex gap-4 flex-col">
      <div className="title text-4xl font-bold">{title}</div>
      <div className="item">{Item_Title_1}</div>
    </div>
  );
}

export default FooterCard;
