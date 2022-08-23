import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PublicRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    render={
      (props) => {
        if (!auth.isAuthenticated) {
          return <Component {...props} />
        } else {
          return <Redirect to="/timeline" />;
        }   
      }
    }
    {...rest}

  />
);

PublicRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authStore,
});

export default connect(mapStateToProps)(PublicRoute);
