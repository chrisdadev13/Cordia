import React from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import SVG from "react-inlinesvg";

function Avatar(props: { username: string }) {
  const avatar = createAvatar(lorelei, {
    seed: props.username,
  });
  const svg = avatar.toString();

  return <SVG src={svg} width={64} height={64} />;
}

export default Avatar;
