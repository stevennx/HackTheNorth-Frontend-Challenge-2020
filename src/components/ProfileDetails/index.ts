import { connect } from "react-redux";
import ProfileDetails from "./component";
import { requestProfile } from "../../redux/modules/Profile/actions";
import { EndpointResponse } from "../../redux/modules/Profile/types"
import { get } from 'lodash';

const mapStateToProps = (state: any) => ({
  profile: get(state, 'userProfile.profile', null)
});

interface StateProps {
  profile?: EndpointResponse
}

interface DispatchProps {
  requestProfile: typeof requestProfile 
}

export type Props = DispatchProps & StateProps;

export default connect(mapStateToProps, { requestProfile })(ProfileDetails);
