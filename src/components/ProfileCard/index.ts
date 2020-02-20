import { connect } from "react-redux";
import ProfileCard from "./component";
import { requestProfile } from "../../redux/modules/Profile/actions";
import { EndpointResponse } from "../../redux/modules/Profile/types"
import get from 'lodash.get';

const mapStateToProps = (state: any) => ({
  profile: get(state, 'userProfile.profile', null)
});

export interface StateProps {
  profile?: EndpointResponse
}

export interface DispatchProps {
  requestProfile: typeof requestProfile 
}

export type Props = DispatchProps & StateProps;

export default connect(mapStateToProps, { requestProfile })(ProfileCard);
