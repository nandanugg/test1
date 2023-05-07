const express = require("express");

export default {
  /**
   * handle response
   * @param {Object} payload
   * @param {express.Response} res
   */
  send(payload, res) {
    if (payload.code) {
      res.sendStatus(payload.code).send(payload);
    }
    res.send(payload);
  },
};
