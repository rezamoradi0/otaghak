import React from "react";
import ShareRoom from "../header/ShareRoom";
import AddFavorite from "../header/AddFavorite";
import { e2p } from "../../../../components/dateBox/Functions";
export default function ImagesGalleryHeader({ swiperRealIndex ,swiperIndexes}) {
  return (
    <div className="flex flex-row-reverse  w-full justify-between items-center">
      <div className="flex gap-4">
        <ShareRoom className={"[&_]:text-white"} />
        <AddFavorite className={"[&_]:text-white"} />
      </div>
      <div className="text-white text-base">
        {e2p(swiperRealIndex+1) + " / " + e2p(swiperIndexes)}
      </div>
    </div>
  );
}
