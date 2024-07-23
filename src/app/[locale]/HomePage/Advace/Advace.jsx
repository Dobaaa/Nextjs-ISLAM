import React from "react";
import "./Advace.css";
import { useTranslations } from "next-intl";

const Advace = () => {
  const t = useTranslations("HomePage");

  const Videosrc = "../../../assets/video.mp4";
  return (
    <div className="Advace-container flex items-center  flex-col  lg:flex-row  gap-5 p-12">
      <div className="Advace txt">
        <h2 className="Advace-head font-bold">{t("AdvaceHead")}</h2>
        <div className="Advace-box bg-[var(--grayLight)] p-8  mb-4 mt-4">
          <h4 className="font-bold">{t("AdvaceCardHead")}</h4>
          <p className="text-[var(--GrayCard)]">{t("AdvaceCardDesc")}</p>
        </div>
        <div className="Advace-box bg-[var(--grayLight)] p-8 mb-4 mt-4">
          <h4 className="font-bold">{t("AdvaceCardHead")}</h4>
          <p className="text-[var(--GrayCard)]">{t("AdvaceCardDesc")}</p>
        </div>
        <div className="Advace-box bg-[var(--grayLight)] p-8 mb-4 mt-4">
          <h4 className="font-bold">{t("AdvaceCardHead")}</h4>
          <p className="text-[var(--GrayCard)]">{t("AdvaceCardDesc")}</p>
        </div>
      </div>
      <div className="Advace-video w-[100%] relative  flex justify-center pe-4 ps-4">
        <video
          controls
          src={Videosrc}
          muted
          autoPlay={true}
          className=" w-[100%]"
        ></video>
      </div>
    </div>
  );
};

export default Advace;
