"use strict";

import helper from "../assets/javascripts/helpers/google-search";
const instances = helper.redirects;

describe("Helper", () => {
  const instanceObjectKeys = ["link", "q"];

  test("There is at least 1 redirect instance in the config", () => {
    expect(instances.length).toBeGreaterThan(0);
  });

  test("Each entry has all object keys", () => {
    // for readability: `every` instead of short-circuit `some`
    const hasAllKeys = instances.every((instance) =>
      instanceObjectKeys.every((key) => instance.hasOwnProperty(key))
    );

    expect(hasAllKeys).toBeTruthy();
  });

  test("Each entry has all object values", () => {
    // for readability: `every` instead of short-circuit `some`
    const hasAllValues = instances.every((instance) =>
      instanceObjectKeys.every((key) => instance[key])
    );

    expect(hasAllValues).toBeTruthy();
  });
});
