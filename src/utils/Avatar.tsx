import React from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import SVG from "react-inlinesvg";

interface AvatarProps {
  username: string;
  w: number;
  h: number;
}

function Avatar({ username, w, h }: AvatarProps) {
  const avatar = createAvatar(lorelei, {
    seed: username,
  });
  const svg = avatar.toString();

  return (
    <div className="bg-white rounded-full">
      <SVG src={svg} width={w} height={h} />
    </div>
  );
}

export default Avatar;
