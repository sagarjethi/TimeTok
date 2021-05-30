import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import stylesOnBoarding from './stylesOnBoarding';
import RimbleButton from './RimbleButton';

function MetaMaskConnect({ classes, btnText, handleMetaMaskSubmit }) {
  return (
    <Grid container spacing={4} alignItems="center">
      <div className={classes.btnContainer}>
        <RimbleButton text={btnText} click={handleMetaMaskSubmit} />
      </div>
    </Grid>
  );
}

MetaMaskConnect.propTypes = {
  classes: PropTypes.object.isRequired,
  btnText: PropTypes.string.isRequired,
  handleMetaMaskSubmit: PropTypes.func.isRequired,
};

export default withStyles(stylesOnBoarding)(MetaMaskConnect);
