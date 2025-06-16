'use client';
import { useTranslations } from 'next-intl';
export default function Logo() {
  const t = useTranslations('Logo');
    return (
        <div className="flex justify-center items-start pt-5">
          <a href={t("to")}><img
            src="/images/logo.svg"
            width={200}
            alt="UploadThing Logo"
          /></a>
        </div>
    );
}