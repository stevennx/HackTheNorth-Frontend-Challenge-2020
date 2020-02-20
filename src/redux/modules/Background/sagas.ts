import { put, takeLatest, delay } from "redux-saga/effects";
import { RippleActionType, FIRE_RIPPLE_EFFECT } from "./types";
import fireRippleEffect from "./actions";

export function* fireRipple(action: RippleActionType) {
  const jquery = action.payload.$background;
  jquery.ripples({
    interactive: false,
    resolution: 400,
    dropRadius: 0,
    perturbance: 0.005
  });
  // Ripple 6 times and waiting 1.5s between each ripple
  jquery.ripples("drop", action.payload.x, action.payload.y, 40, 0.15);
  for (let i = 0; i < 5; i++) { 
    yield delay(1500);
    jquery.ripples("drop", action.payload.x, action.payload.y, 40, 0.15);
  }

  yield delay(14000);
  jquery.ripples("destroy");
  yield put(fireRippleEffect(action.payload));
}

export function* watchFireRippleEffect() {
  yield takeLatest(FIRE_RIPPLE_EFFECT, fireRipple);
}
