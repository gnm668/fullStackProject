import { connect } from 'react-redux';
import { greeting } from './greeting';


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps)(greeting);
