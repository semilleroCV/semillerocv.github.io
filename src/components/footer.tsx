import { Typography, Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-black">
      <div className="container flex flex-col mx-auto">
        {/* Sección de llamada a la acción */}
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5">
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="text-2xl md:text-3xl text-center font-bold"
            color="white"
          >
            {t("cta")}
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
              <p
                className="text-center
              w-full
              bg-teal-800
              mt-6
              px-8
              py-3
              text-gray-700
              font-semibold
              rounded-full
              shadow-lg
              text-white"
              >
                {t("registration_closed")}
              </p>
          </div>
        </div>

        {/* Sección de logo, título y redes sociales */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo y título a la izquierda */}
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/logos/logo.png"
              alt="Tool Logo"
              width={36}
              height={36}
              className="rounded-md"
            />
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              as="a"
              variant="h6"
              className="text-gray-50 whitespace-nowrap"
            >
              Hands-on Computer Vision
            </Typography>
          </div>

          {/* Logo UIS */}
          <div className="w-screen flex items-center justify-center lg:mr-8">
            <Image
              src="/logos/uis.png"
              alt="UIS Logo"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>

          {/* Redes sociales a la derecha */}
          <div className="flex w-fit justify-center gap-4 mt-4 md:mt-0">
            `
            <a
              href="https://discord.gg/MkCpdsHZzJ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visita nuestro canal de Discord"
            >
              <IconButton
                size="sm"
                color="white"
                variant="text"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-brands fa-discord text-xl" />
              </IconButton>
            </a>
            {/* YouTube Button */}
            <a
              href="https://www.youtube.com/@Hands-OnCV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visita nuestro canal de YouTube"
            >
              <IconButton
                size="sm"
                color="white"
                variant="text"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-brands fa-youtube text-xl" />
              </IconButton>
            </a>
            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/handsoncv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
            >
              <IconButton
                size="sm"
                color="white"
                variant="text"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-brands fa-instagram text-xl" />
              </IconButton>
            </a>
            {/* GitHub Button */}
            <a
              href="https://github.com/semilleroCV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visita nuestro repositorio en GitHub"
            >
              <IconButton
                size="sm"
                color="white"
                variant="text"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-brands fa-github text-xl" />
              </IconButton>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          color="white"
          className="text-center mt-12 font-normal !text-gray-50"
        >
          &copy; {CURRENT_YEAR} {t("made_by")} <a>Students ❤️</a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
