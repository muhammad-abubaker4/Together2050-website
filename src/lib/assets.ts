import logo from "../assets/logos/Together2050.svg?url";
import photoAbubaker from "../assets/people/muhammad-abubaker.webp";
import photoRaja from "../assets/people/raja-zeeshan-majeed.webp";
import photoNayyab from "../assets/people/nayyab-mansoor.webp";
import photoHyder from "../assets/people/hyder-raza.webp";
import photoArbeeha from "../assets/people/arbeeha-zahid.webp";
import photoDua from "../assets/people/dua-amjad.webp";
import photoAhmed from "../assets/people/ahmed-mujtaba.webp";
import photoSaira from "../assets/people/saira-gulzar.webp";
import photoHassan from "../assets/people/muhammad-hassan.webp";
import photoAimen from "../assets/people/aimen-sultan.webp";
import photoAzmat from "../assets/people/azmat-wazir.webp";
import photoHafsa from "../assets/people/hafsa-khalil.webp";
import photoTariq from "../assets/people/tariq-mehmood.webp";
import photoMostafa from "../assets/people/mostafa-kabir-siddiqui.webp";
import photoSama from "../assets/people/sama-zaidi.webp";
import photoMehwish from "../assets/people/mehwish-rana.webp";
import photoIqbal from "../assets/people/iqbal-naeem.webp";

const PORTRAITS: Record<string, string> = {
  "muhammad-abubaker": photoAbubaker,
  "raja-zeeshan-majeed": photoRaja,
  "nayyab-mansoor": photoNayyab,
  "hyder-raza": photoHyder,
  "arbeeha-zahid": photoArbeeha,
  "dua-amjad": photoDua,
  "ahmed-mujtaba": photoAhmed,
  "saira-gulzar": photoSaira,
  "muhammad-hassan": photoHassan,
  "aimen-sultan": photoAimen,
  "azmat-wazir": photoAzmat,
  "hafsa-khalil": photoHafsa,
  "tariq-mehmood": photoTariq,
  "mostafa-kabir-siddiqui": photoMostafa,
  "sama-zaidi": photoSama,
  "mehwish-rana": photoMehwish,
  "iqbal-naeem": photoIqbal,
};

export function getLogoSrc(): string {
  return logo;
}

export function getPortraitSrc(id: string): string | undefined {
  return PORTRAITS[id];
}
