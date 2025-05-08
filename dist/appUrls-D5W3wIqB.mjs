const e = process.env.REACT_APP_URL_BASE_LOCAL || "", _ = process.env.REACT_APP_URL_BASE_PROD || "", A = {
  base: {
    local: e,
    prod: _
  },
  getBase({ environment: s }) {
    return s === "development" ? e : _;
  }
};
export {
  A as a
};
