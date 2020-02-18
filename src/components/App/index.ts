import { connect } from "react-redux";
import App from "./component";

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.userLogin.isAuthenticated,
});

interface StateProps {
    isAuthenticated: boolean
}

export type Props = StateProps;

export default connect(mapStateToProps)(App);
