import { connect } from "react-redux";
import LoginFormComponent from "./component";
import loginAction from "../../redux/modules/Login/actions";

interface DispatchProps {
    loginAction: typeof loginAction;
}

export type Props = DispatchProps;

export default connect(null, { loginAction })(LoginFormComponent);
