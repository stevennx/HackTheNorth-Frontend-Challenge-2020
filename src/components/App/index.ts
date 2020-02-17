import { connect } from "react-redux";
import App from "./component";

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.isAuthenticated,
});

interface StateProps {
    isAuthenticated: string
}

export type Props = StateProps;

export default connect(mapStateToProps)(App);
