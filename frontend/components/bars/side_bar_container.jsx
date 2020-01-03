import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from './side_bar';

const mSTP = (state, ownProps) => ({
    ownProps: ownProps
});

const mDTP = null;

export default withRouter(connect(mSTP, mDTP)(SideBar));