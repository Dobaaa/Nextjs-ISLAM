import React from "react";
import Image from "next/image";
import LandingImg from "../../../../assets/landing.png";
import LandingDesignImg from "../../../../assets/designs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Landing.css";
import CateImg from "../../../../assets/cate.png";
import Link from "next/link";
import { useTranslations } from "next-intl";
const Landing = () => {
  const t = useTranslations("HomePage");

  return (
    <>
      <div className="Landing-parent  flex justify-center ">
        <div className="contianer w-100 flex items-center flex-col lg:flex-row lg:items-start justify-center   gap-20 pt-5 pe-5 ps-8">
          <div className="land-text flex-1 flex flex-col text-center items-center   lg:items-start  lg:text-start ">
            <h1>
              {t("landingHead")}
              <br /> {t("landingHeadBreak")}
            </h1>
            <p>{t("landingDisc")}</p>
            <div className="search  mt-8 flex items-center">
              <input
                type="search"
                name=""
                id=""
                placeholder={t("searchPlaceholder")}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon "
              />
            </div>
          </div>
          <div className="land-design relative flex-1">
            <Image
              src={LandingImg}
              alt=""
              className="rounded-md mt-8 w-[280px]"
            />
            <Image
              src={LandingDesignImg}
              alt=""
              className="LandingBackground max-w-[450px]"
            />
          </div>
        </div>
      </div>
      <div className="categories pt-3 pb-5 ">
        <div className="cate-head flex  justify-evenly p-4">
          <h4 className="font-bold ">{t("CateHead")}</h4>

          <span className="text-[var(--blue)]">{t("all")}</span>
        </div>
        <div className="box-parent flex justify-center">
          <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 ps-8 pe-8 justify-center gap-8">
            <Link href="/" className="cate-box">
              <Image src={CateImg} alt="" />
              <p>{t("Cate1")}</p>
            </Link>
            <Link href="/" className="cate-box">
              <Image src={CateImg} alt="" />
              <p>{t("Cate2")}</p>
            </Link>
            <Link href="/" className="cate-box">
              <Image src={CateImg} alt="" />
              <p>{t("Cate3")}</p>
            </Link>
            <Link href="/" className="cate-box">
              <Image src={CateImg} alt="" />
              <p>{t("Cate4")}</p>
            </Link>
            <Link href="/" className="cate-box">
              <Image src={CateImg} alt="" />
              <p>{t("Cate5")}</p>
            </Link>
            <Link href="/" className="cate-box">
              <Image src={CateImg} alt="" />
              <p>{t("Cate6")}</p>
            </Link>
            <Link href="/" className="cate-box">
              <Image src={CateImg} alt="" />
              <p>{t("Cate7")}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
