import logo from "../assets/logos/Together2050.svg?url";
import photoAbubaker from "../assets/people/muhammad-abubaker.jpg";
import photoRaja from "../assets/people/raja-zeeshan-majeed.jpg";
import photoNayyab from "../assets/people/nayyab-mansoor.jpg";
import photoHyder from "../assets/people/hyder-raza.jpg";
import photoArbeeha from "../assets/people/arbeeha-zahid.jpg";
import photoDua from "../assets/people/dua-amjad.jpg";
import photoAhmed from "../assets/people/ahmed-mujtaba.jpg";
import photoSaira from "../assets/people/saira-gulzar.jpg";
import photoHassan from "../assets/people/muhammad-hassan.jpg";
import photoAimen from "../assets/people/aimen-sultan.jpg";
import photoAzmat from "../assets/people/azmat-wazir.jpg";
import photoHafsa from "../assets/people/hafsa-khalil.jpg";
import photoTariq from "../assets/people/tariq-mehmood.jpg";
import photoMostafa from "../assets/people/mostafa-kabir-siddiqui.jpg";
import photoSama from "../assets/people/sama-zaidi.jpg";
import photoMehwish from "../assets/people/mehwish-rana.jpg";
import photoIqbal from "../assets/people/iqbal-naeem.jpg";

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
