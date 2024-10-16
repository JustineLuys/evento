import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const btnStyles =
  "text-white px-5 py-3 flex items-center gap-2 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};
export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex items-center justify-between w-full">
      {previousPath ? (
        <PaginationButton
          href={previousPath}
          btnStyles={btnStyles}
          direction="previous"
        >
          Previous
        </PaginationButton>
      ) : (
        <div />
      )}
      {nextPath ? (
        <PaginationButton
          href={nextPath}
          btnStyles={btnStyles}
          direction="next"
        >
          Next
        </PaginationButton>
      ) : (
        <div />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  children: React.ReactNode;
  direction: "previous" | "next";
  href: string;
  btnStyles: string;
};
function PaginationButton({
  children,
  href,
  btnStyles,
  direction,
}: PaginationButtonProps) {
  return (
    <Link href={href} className={btnStyles}>
      {direction === "previous" && (
        <>
          <ArrowLeftIcon /> {children}
        </>
      )}
      {direction === "next" && (
        <>
          {children} <ArrowRightIcon />
        </>
      )}
    </Link>
  );
}
