import type { ComponentType } from 'react';

import type { ExperienceVisualization } from 'data/home';

import AppleVisual from './visuals/AppleVisual';
import FacebookVisual from './visuals/FacebookVisual';
import HackReactorVisual from './visuals/HackReactorVisual';
import MercedesVisual from './visuals/MercedesVisual';
import NobleHouseVisual from './visuals/NobleHouseVisual';
import RedOakVisual from './visuals/RedOakVisual';
import RivianVisual from './visuals/RivianVisual';
import ZillowVisual from './visuals/ZillowVisual';

const EXPERIENCE_VISUALS: Record<ExperienceVisualization, ComponentType> = {
  zillow: ZillowVisual,
  redoak: RedOakVisual,
  rivian: RivianVisual,
  facebook: FacebookVisual,
  mercedes: MercedesVisual,
  hackreactor: HackReactorVisual,
  apple: AppleVisual,
  noblehouse: NobleHouseVisual
};

type ExperienceVisualProps = {
  visualization: ExperienceVisualization;
};

export default function ExperienceVisual({
  visualization
}: ExperienceVisualProps) {
  const Visual = EXPERIENCE_VISUALS[visualization];

  return <Visual />;
}
