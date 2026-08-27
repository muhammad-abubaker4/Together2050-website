/**
 * Logos:
 *   Together2050.svg: primary mark (red TOGETHER, white 2050)
 *
 * Team filenames currently in use:
 *   Muhammad Abubaker.jpeg
 *   Raja Zeeshan.jpeg
 *   Saira Gulzar.jpg      (when core team is complete)
 *   Nayyab Mansoor.jpg    (when core team is complete)
 */

import logo from "../assets/logos/Together2050.svg?url";
import photoMuhammad from "../assets/team/Muhammad Abubaker.jpeg";
import photoRaja from "../assets/team/Raja Zeeshan.jpeg";
// import photoSaira from "../assets/team/Saira Gulzar.jpg";
// import photoNayyab from "../assets/team/Nayyab Mansoor.jpg";

const TEAM_PHOTOS: Record<string, string> = {
  "muhammad-abubaker": photoMuhammad,
  "raja-zeeshan-majeed": photoRaja,
  // "saira-gulzar": photoSaira,
  // "nayyab-mansoor": photoNayyab,
};

export function getLogoSrc(): string {
  return logo;
}

export function getTeamPhotoSrc(id: string): string | undefined {
  return TEAM_PHOTOS[id];
}
