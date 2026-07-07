"use client";

import { Image as ImageIcon } from "lucide-react";

type UploadButtonProps = {
  onImageSelect: (file: File) => void;
};

export default function UploadButton({
  onImageSelect,
}: UploadButtonProps) {
  return (
    <>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            onImageSelect(file);
          }

          e.target.value = "";
        }}
      />

      <label
        htmlFor="image-upload"
        className="cursor-pointer rounded-xl p-3 transition hover:bg-slate-800"
      >
        <ImageIcon
          size={22}
          className="text-slate-400"
        />
      </label>
    </>
  );
}