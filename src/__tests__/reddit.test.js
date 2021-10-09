"use strict";

import helper from "../assets/javascripts/helpers/reddit";
const instances = helper.redirects;

describe("Helper", () => {
  test("There is at least 1 redirect instance in the config", () => {
    expect(instances.length).toBeGreaterThan(0);
  });
});
