export const FIRE_RIPPLE_EFFECT = "FIRE_RIPPLE_EFFECT";

export type Coordinates = {
  x: number;
  y: number;
};
export interface JQueryData extends Coordinates {
  $background: any;
}

export type RippleActionType = {
  type: typeof FIRE_RIPPLE_EFFECT;
  payload: JQueryData;
};
