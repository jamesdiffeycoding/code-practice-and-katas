/* Description ---------------------------------------- 
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

/* Solution Example ----------------------------------- */
// due to the function needing to work for a large variety of units an iterable construct was ideal
// to neatly identify where to place the ","s and where to place the "and", I spliced the original array...
// ... and constructed the sentence in a second loop
// separating the concerns of each loop improved readability
// an advantage of this code format, it would be easy to add decades, centuries, milllenia etc later if needed

/* OLD SCHOOL FOR LOOP SOLUTION - SEE BELOW FOR UPDATED VERSION*/
function formatDuration(seconds) {
  if (seconds == 0) {
    return "now";
  }

  let remainder = seconds;
  let units = [
    { label: "year", divisor: 31536000, count: "?" },
    { label: "day", divisor: 86400, count: "?" },
    { label: "hour", divisor: 3600, count: "?" },
    { label: "minute", divisor: 60, count: "?" },
    { label: "second", divisor: 1, count: "?" },
  ];

  // set counts for each unit
  for (let i = 0; i < units.length; i++) {
    let num = Math.floor(remainder / units[i].divisor);
    remainder = remainder - num * units[i].divisor;
    if (num == 0) {
      // remove array current and adjust index down accordingly
      units.splice(i, 1);
      i--;
    } else {
      units[i].count = num;
    }
  }

  // construct sentence
  let sentence = "";

  for (let j = 0; j < units.length; j++) {
    if (units.length !== 1 && j == units.length - 1) {
      sentence += " and ";
    }
    if (units[j].count == 1) {
      sentence += `${units[j].count} ${units[j].label}`;
    } else {
      sentence += `${units[j].count} ${units[j].label}s`;
    }
    if (j <= units.length - 3) {
      sentence += ", ";
    }
  }

  return sentence;
}

/* ⭐ NEW SCHOOL ARRAY METHOD SOLUTION - SEE ABOVE FOR OLD SCHOOL VERSION */
// uses map, filter and forEach to improve readability

function formatDuration(seconds) {
  if (seconds == 0) {
    return "now";
  }

  let remainder = seconds;
  let units = [
    { label: "year", divisor: 31536000, count: "?" },
    { label: "day", divisor: 86400, count: "?" },
    { label: "hour", divisor: 3600, count: "?" },
    { label: "minute", divisor: 60, count: "?" },
    { label: "second", divisor: 1, count: "?" },
  ];

  // set counts for each unit
  units = units.map((current) => {
    const newCount = Math.floor(remainder / current.divisor);
    remainder -= newCount * current.divisor;
    return { ...current, count: newCount };
  });

  // remove unneeded values
  units = units.filter((current) => {
    return current.count > 0;
  });

  // construct sentence
  let sentence = "";

  units.forEach((current, index) => {
    if (units.length !== 1 && index == units.length - 1) {
      sentence += " and ";
    }
    if (current.count == 1) {
      sentence += `${current.count} ${current.label}`;
    } else {
      sentence += `${current.count} ${current.label}s`;
    }
    if (index <= units.length - 3) {
      sentence += ", ";
    }
  });

  return sentence;
}

// another solution
function formatDuration(seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = [];

  if (seconds === 0) return "now";

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds / time[key]);
      res.push((val += val > 1 ? " " + key + "s" : " " + key));
      seconds = seconds % time[key];
    }
  }

  return res.length > 1
    ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
    : res[0];
}

// another solution
function formatDuration(seconds) {
  if (!seconds) return "now";
  var strout = "";
  var s = seconds % 60;
  seconds = (seconds - s) / 60;
  var m = seconds % 60;
  seconds = (seconds - m) / 60;
  var h = seconds % 24;
  seconds = (seconds - h) / 24;
  var d = seconds % 365;
  seconds = (seconds - d) / 365;
  var y = seconds;

  var english = [];
  if (y) english.push(y + " year" + (y > 1 ? "s" : ""));
  if (d) english.push(d + " day" + (d > 1 ? "s" : ""));
  if (h) english.push(h + " hour" + (h > 1 ? "s" : ""));
  if (m) english.push(m + " minute" + (m > 1 ? "s" : ""));
  if (s) english.push(s + " second" + (s > 1 ? "s" : ""));

  return english.join(", ").replace(/,([^,]*)$/, " and$1");
}

/* Tests ---------------------------------------------

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
    assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
  });
});








*/
