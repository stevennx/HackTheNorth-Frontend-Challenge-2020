export const FIRE_RIPPLE_EFFECT = "FIRE_RIPPLE_EFFECT";

export type JQueryData = {
    x: number,
    y: number,
    $background: any
}

export type RippleActionType = {
    type: typeof FIRE_RIPPLE_EFFECT;
    payload: JQueryData
}