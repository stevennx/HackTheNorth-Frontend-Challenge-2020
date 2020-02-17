import { connect } from "react-redux";
import LoginFormComponent from "./component";
import loginAction from "../../redux/modules/Login/actions";

const mapStateToProps = (state: any) => ({
  errorMessage: state.errorMessage,
});

interface StateProps {
    errorMessage: string
}

interface DispatchProps {
    loginAction: typeof loginAction;
}

export type Props = StateProps & DispatchProps;

export default connect(mapStateToProps, { loginAction })(LoginFormComponent);
