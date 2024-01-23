import { useMemo } from "react";
import MoreButton from "../../../../../../components/MoreButton";
import { e2p } from "../../../../../../components/dateBox/Functions";
import { ICON_STAR, ICON_USER } from "../../../../../../constant/fontIcons";
import { ROOM_PAGE_TEXT } from "../../../../../../constant/text";

const showLimitComments = 8;
function SingleRate({ text, rate, completeRate = 5, isExpand = false }) {
  return (
    <div
      className={`${
        isExpand ? "w-full" : "w-1/2"
      } flex justify-between items-center px-2`}
    >
      <span> {text} </span>
      {isExpand ? (
        <div className="flex w-1/2 justify-between items-center">
          <div className="w-4/6">
            <div
              style={{ width: (rate * 100) / completeRate + "%" }}
              className="h-1 bg-black rounded-3xl"
            ></div>
          </div>
          <div className="w-1/6">
            <span className="text-lg font-semibold text-gray-700">
              {e2p(rate)}
            </span>
            <span>/{e2p(completeRate)}</span>
          </div>
        </div>
      ) : (
        <span>
          <span className="text-lg font-semibold text-gray-700">
            {e2p(rate)}
          </span>
          <span>/{e2p(completeRate)}</span>
        </span>
      )}
    </div>
  );
}
function SingleComment({ singleCommentData, isExpand = false, ...props }) {
  return (
    <div
      key={props.key}
      className={`${
        isExpand ? "w-full" : " w-[49%]"
      } rounded-lg flex flex-col gap-y-2 border border-gray-300  p-2 md:w-full`}
    >
      <div className="flex items-start gap-x-2 ">
        {singleCommentData.userImg ? (
          <img
            className=" rounded-full h-10 w-10"
            src={singleCommentData.userImg}
            alt=""
          />
        ) : (
          <span className="mt-1 rounded-full flex items-center justify-center h-10 w-10 bg-gray-200 ">
            <ICON_USER className="text-xl text-gray-700" />
          </span>
        )}
        <div className="flex flex-col items-start gap-y-1">
          <p className="font-semibold text-gray-600">
            {singleCommentData.userName}
          </p>
          <p className="text-gray-400">{singleCommentData.time}</p>
        </div>
        <span className="mr-auto flex items-center gap-x-1">
          <ICON_STAR className="text-[10px] text-gray-700 mb-1" />{" "}
          <span>{e2p(singleCommentData.rate)}</span>{" "}
        </span>
      </div>
      <p className="text-gray-500  leading-7 text-[14px] text-justify">
        {singleCommentData.text}
      </p>
      {singleCommentData.adminReply && (
        <p className="border-t border-gray-200 py-2">
          <span className="text-gray-500 font-semibold">
            {ROOM_PAGE_TEXT.body.commentResidence.adminReply}{" "}
          </span>
          <span className="text-gray-600"> {singleCommentData.adminText}</span>
        </p>
      )}
    </div>
  );
}
function AllComments({ commentRatesData, commentsData }) {
  return (
    <div className="popup-scroll scroll-none">
      <p className="mt-4">
        <ICON_STAR className="text-yellow-500 " />{" "}
        <span className="text-lg font-semibold">
          {e2p(commentRatesData.rate)}{" "}
          {ROOM_PAGE_TEXT.body.commentResidence.rate}
        </span>
      </p>
      <div dir="rtl" className="flex flex-wrap gap-y-2 text-gray-800 mt-2">
        <SingleRate
          rate={commentRatesData.safe}
          text={ROOM_PAGE_TEXT.body.commentResidence.safe}
          isExpand={true}
        />
        <SingleRate
          rate={commentRatesData.accepting}
          text={ROOM_PAGE_TEXT.body.commentResidence.accepting}
          isExpand={true}
        />

        <SingleRate
          rate={commentRatesData.clean}
          text={ROOM_PAGE_TEXT.body.commentResidence.clean}
          isExpand={true}
        />

        <SingleRate
          rate={commentRatesData.communication}
          text={ROOM_PAGE_TEXT.body.commentResidence.communication}
          isExpand={true}
        />

        <SingleRate
          rate={commentRatesData.value}
          text={ROOM_PAGE_TEXT.body.commentResidence.value}
          isExpand={true}
        />

        <SingleRate
          rate={commentRatesData.information}
          text={ROOM_PAGE_TEXT.body.commentResidence.information}
          isExpand={true}
        />
      </div>
      <hr className="bg-gray-500 my-4" />
      <p className="text-lg text-gray-600 font-semibold">
        {ROOM_PAGE_TEXT.body.commentResidence.header}
        <span className="text-gray-500 text-lg">
            {" "}
            {`(${e2p(commentsData.length)} ${
              ROOM_PAGE_TEXT.body.commentResidence.comment
            })`}
          </span>
      </p>
      <div className="flex w-full flex-wrap justify-between my-4 gap-y-2 ">
        {commentsData.map((commentData, i) => {
          return <SingleComment isExpand={true} key={i} singleCommentData={commentData} />;
        })}
      </div>
    </div>
  );
}
export default function CommentsResidence({ commentRatesData, commentsData }) {
  return (
    <>
      <div>
        <p className="text-lg text-gray-600 font-semibold">
          {ROOM_PAGE_TEXT.body.commentResidence.header}
        </p>
        <p className="mt-4">
          <ICON_STAR className="text-yellow-500 " />{" "}
          <span className="text-lg font-semibold">
            {e2p(commentRatesData.rate)}{" "}
            {ROOM_PAGE_TEXT.body.commentResidence.rate}
          </span>
          <span className="text-gray-500 text-lg">
            {" "}
            {`(${e2p(commentsData.length)} ${
              ROOM_PAGE_TEXT.body.commentResidence.comment
            })`}
          </span>
        </p>
        <div dir="rtl" className="flex flex-wrap gap-y-2 text-gray-800 mt-2">
          <SingleRate
            rate={commentRatesData.safe}
            text={ROOM_PAGE_TEXT.body.commentResidence.safe}
          />
          <SingleRate
            rate={commentRatesData.accepting}
            text={ROOM_PAGE_TEXT.body.commentResidence.accepting}
          />

          <SingleRate
            rate={commentRatesData.clean}
            text={ROOM_PAGE_TEXT.body.commentResidence.clean}
          />

          <SingleRate
            rate={commentRatesData.communication}
            text={ROOM_PAGE_TEXT.body.commentResidence.communication}
          />

          <SingleRate
            rate={commentRatesData.value}
            text={ROOM_PAGE_TEXT.body.commentResidence.value}
          />

          <SingleRate
            rate={commentRatesData.information}
            text={ROOM_PAGE_TEXT.body.commentResidence.information}
          />
        </div>
        <div className="flex w-full flex-wrap justify-between my-4 gap-y-2">
          {commentsData.map((commentData, i) => {
            if (i >= showLimitComments) return;
            return <SingleComment key={i} singleCommentData={commentData} />;
          })}
        </div>
      </div>
     {useMemo(()=>{
    return   <MoreButton
       text={`${ROOM_PAGE_TEXT.buttons.moreComments} ( ${e2p(
         commentsData.length
       )}${ROOM_PAGE_TEXT.body.commentResidence.case} )`}
       header={ROOM_PAGE_TEXT.body.commentResidence.header}
       PopupBody={
         <AllComments
           commentRatesData={commentRatesData}
           commentsData={commentsData}
         />
       }
     />
     },[commentsData])}
    </>
  );
}
