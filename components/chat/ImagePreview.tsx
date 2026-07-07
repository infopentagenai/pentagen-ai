"use client";

import Image from "next/image";
import { X } from "lucide-react";

type ImagePreviewProps = {
  file: File;
  onRemove: () => void;
};

export default function ImagePreview({
  file,
  onRemove,
}: ImagePreviewProps) {
  const imageUrl = URL.createObjectURL(file);

  return (
    <div className="relative w-fit">
      <Image
        src={imageUrl}
        alt="Preview"
        width={120}
        height={120}
        className="rounded-xl border border-slate-700 object-cover"
      />

      <button
        onClick={onRemove}
        className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1"
      >
        <X
          size={16}
          className="text-white"
        />
      </button>
    </div>
  );
}