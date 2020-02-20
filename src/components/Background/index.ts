import { connect } from "react-redux";
import LoginFormComponent from "./component";
import fireRippleEffect from "../../redux/modules/Background/actions";

interface DispatchProps {
  fireRippleEffect: typeof fireRippleEffect;
}

export interface Props extends DispatchProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

export default connect(null, { fireRippleEffect })(LoginFormComponent);
