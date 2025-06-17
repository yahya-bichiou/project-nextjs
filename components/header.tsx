"use client";
import Logo from "./logo";
import Language from "./language";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();

  return (
    <header className="h-screen">
      <div className={"h-full flex flex-col"}>
        <Language />
        <Logo local = {locale} />
        {/* Slogan vertically centered in remaining space */}
        <div className="flex-1 flex flex-col justify-end pb-60 pl-40">
          <h2 className="text-6xl font-bold text-purple-400">{t("title")}</h2>
          <h2 className="text-4xl font-bold mt-2">{t("subtitle")}</h2>
          <h2 className="text-2xl mt-8 text-gray-300">{t("description")}</h2>
          <h2 className="text-2xl mt-2 text-gray-300">{t("text")}</h2>
          <h2 className="text-2xl mt-2 text-gray-300">{t("text2")}</h2>
          <div className="flex items-center gap-4">
            <button className="bg-purple-400 hover:bg-purple-500 transition-colors duration-200 rounded-lg text-white mt-5 px-6 py-3 font-medium">
              {t("getStarted")}
            </button>
            <a
              href={`/${locale}/docs`}
              className="flex items-center gap-1 text-purple-400 hover:text-purple-500 transition-colors mt-5 group"
            >
              {t("documentation")}{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
