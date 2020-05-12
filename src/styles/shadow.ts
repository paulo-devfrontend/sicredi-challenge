import { css } from 'styled-components';

type Elevation = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;

function setOpacity(elevation: Elevation) {
  if (elevation <= 6) return 0.5;
  if (elevation > 6 && elevation <= 12) return 0.4;
  if (elevation > 12 && elevation <= 18) return 0.3;
  if (elevation > 18 && elevation <= 24) return 0.2;
}

export default function (elevation: Elevation) {
  const offsetY = elevation > 0 ? elevation - 1 : 0;
  const blur = elevation + 1;
  const opacity = setOpacity(elevation);
  const sentence = `0 ${offsetY}px ${blur}px rgba(0, 0, 0, ${opacity})`;
  return css`
    box-shadow: ${sentence};
  `;
}
