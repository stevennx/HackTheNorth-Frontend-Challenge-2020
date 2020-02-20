import { RippleActionType, FIRE_RIPPLE_EFFECT, JQueryData } from "./types";

export default ({x, y, $background} : JQueryData): RippleActionType => ({
  type: FIRE_RIPPLE_EFFECT,
  payload: {
    x: x,
    y: y, 
    $background: $background
  }
});
