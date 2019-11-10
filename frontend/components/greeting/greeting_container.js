import { connect } from 'react-redux';
import { greeting } from './greeting';


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mSTP)(greeting);
