import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import stylesOnBoarding from './stylesOnBoarding';
import OnBoardButton from './OnBoardButton';

function ConnectionInfo({
  classes,
  deployTokenContract,
  symbol,
  name,
  decimals,
  totalSupply,
  setDeployTokenContract,
  setSymbol,
  setName,
  setDecimals,
  setTotalSupply,
  btnText,
  handleConnectionInfoSubmit,
}) {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={4}>
        <div>deployTokenContract: </div>
      </Grid>
      <Grid item xs={8}>
        <TextField
          className={classes.urlField}
          id="deployTokenContract-field"
          variant="outlined"
          value={deployTokenContract}
          onChange={(e) => setDeployTokenContract(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <div>symbol (string): </div>
      </Grid>
      <Grid item xs={8}>
        <TextField
          className={classes.urlField}
          id="symbol-field"
          variant="outlined"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <div>name (string): </div>
      </Grid>
      <Grid item xs={8}>
        <TextField
          className={classes.urlField}
          id="name-field"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <div>decimals (uint8): </div>
      </Grid>
      <Grid item xs={8}>
        <TextField
          className={classes.urlField}
          id="decimals-field"
          variant="outlined"
          value={decimals}
          onChange={(e) => setDecimals(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <div>totalSupply (uint256): </div>
      </Grid>
      <Grid item xs={8}>
        <TextField
          className={classes.urlField}
          id="totalSupply-field"
          variant="outlined"
          value={totalSupply}
          onChange={(e) => setTotalSupply(e.target.value)}
        />
      </Grid>
      <div className={classes.btnContainer}>
        <OnBoardButton text={btnText} submitForm={handleConnectionInfoSubmit} />
      </div>
    </Grid>
  );
}

ConnectionInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  deployTokenContract: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  decimals: PropTypes.string.isRequired,
  totalSupply: PropTypes.string.isRequired,
  setDeployTokenContract: PropTypes.func.isRequired,
  setSymbol: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setDecimals: PropTypes.func.isRequired,
  setTotalSupply: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  handleConnectionInfoSubmit: PropTypes.func.isRequired,
};

export default withStyles(stylesOnBoarding)(ConnectionInfo);
