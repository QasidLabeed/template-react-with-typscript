import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Admin from "../layouts/Admin";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    render={
      (props) => {
        //TODO: Reenable after auth flow integration
        // if (auth.isAuthenticated) {
        //   return <Admin {...props} />
        // } else {
        //   return <Redirect to="/auth/login" />;
        // }
        return <Admin {...props} />
      }
    }
    {...rest}

  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authStore,
});

export default connect(mapStateToProps)(PrivateRoute);
