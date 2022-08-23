import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    render={
      (props) => {
        if (auth.isAuthenticated) {
          return <Component {...props} />
        } else {
          return <Redirect to="/auth/login" />;
        }
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
