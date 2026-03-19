"use client";
import { Undo2Icon } from "lucide-react";

export default function HomeButton() {
  function handleClick() {
    window.location.href = "/";
  }
  return (
    <a
      className="text-blue-500 hover:text-blue-700 items-center cursor-pointer justify-center flex text-xl"
      onClick={handleClick}
    >
      <Undo2Icon />
      Back to Home
    </a>
  );
}
