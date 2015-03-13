# nice-date

> Tiny dependency-free JavaScript date utility library

1. [Installation](#installation)
2. [Usage](#usage)
  - [Instantiate](#instantiate)
  - [daysOf](#daysof)
  - [get](#get)
  - [diff](#diff)
  - [add](#add)
  - [sub](#sub)
  - [Default Options](#default-options)
3. [Upcoming](#upcoming)
4. [License](#license)

## Installation

NPM:

```
npm i --save nice-date
```

Require in Node.js:

```javascript
var NiceDate = require('nice-date');
```

## Usage

### Instantiate

> new NiceDate([date, opts])

Optionally pass a *date* as the first argument and any default *opts* you want to override as the second. If you want to only pass options, you can pass `null` as the date argument.

```javascript
var date = new NiceDate(null, {
  indicators: {
    milliseconds: "milli"
  }
});
```

### daysOf

> NiceDate.daysOf(measure)

Extract the number of days within a given time measure, e.g. number of days in the current (relative to instantiated date) week or month. Each day is returned as an array element, represented by a unix timestamp.

```javascript
var date = new NiceDate();

date.daysOf("week"); // -> [1425859200000, 1425945600000, ...]
date.daysOf("w");    // -> [1425859200000, 1425945600000, ...]

date.daysOf("month"); // -> [1425164400000, 1425250800000, ...]
date.daysOf("m");     // -> [1425164400000, 1425250800000, ...]

date.daysOf("calendarMonth"); // -> see below
date.daysOf("cm");            // -> see below
```

While the **month** measure will collect all days between the first and the last day of the month, **calendarMonth** will in addition collect days between the month start and the first day of that week, as well as the days between the month end and the last day of that week. Useful when working with e.g. a calendar.

```javascript
date.daysOf("week").forEach(function(day) {
  console.log(new NiceDate(day).get("weekday"));
});
```

Console output:

```
-> Monday
-> Tuesday
-> Wednesday
-> Thursday
-> Friday
-> Saturday
-> Sunday
```

### get

> NiceDate.get(format)

Displays the date in one of a number of formats.

```javascript
var date = new NiceDate("2015-03-12");

// Get unix timestamp
date.get("unix"); // -> 1426118400000
date.get("u");    // -> 1426118400000

// Get day of month
date.get("day"); // -> 12
date.get("d");   // -> 12

// Get week day name
date.get("weekday"); // -> "Thursday"
date.get("wd");      // -> "Thursday"

// Get week day short name
date.get("weekdayShort"); // -> "Thu"
date.get("wds");          // -> "Thu"

// Get week number (of year)
date.get("week"); // -> 11
date.get("w");    // -> 11

// Get month name
date.get("month"); // -> "March"
date.get("m");     // -> "March"

// Get month short name
date.get("monthShort"); // -> "Mar"
date.get("ms");         // -> "Mar"

// Get year
date.get("year"); // -> 2015
date.get("y");    // -> 2015

// Get short year
date.get("yearShort"); // -> 15
date.get("ys");        // -> 15

// Get date (ISO presentation)
date.get("isoDate"); // -> "2015-03-12"
date.get("date");    // -> "2015-03-12"
date.get("isod");    // -> "2015-03-12"

// Get datetime (ISO presentation) (timezone CET in example)
date.get("isoDateTime"); // -> "2015-03-12 01:00"
date.get("datetime");    // -> "2015-03-12 01:00"
date.get("dt");          // -> "2015-03-12 01:00"
date.get("isodt");       // -> "2015-03-12 01:00"
```

### diff

> NiceDate.diff()

Displays the time difference between the date and now.

```javascript
// now: 2015-03-12 10:00
var past = new NiceDate("2015-03-12 09:52"),
    future = new NiceDate("2015-03-12 11:59"),
    waaay = new NiceDate("2018-03-12");

past.diff();   // -> "8m ago"
future.diff(); // -> "in 2h"
waaay.diff();  // -> "in 3y"
```

### add

> NiceDate.add(number, format)

Add *number* amount of *format* to a date.

```javascript
var date = new NiceDate("2015-03-12");

date.add(1, "days").get("date"); // -> "2015-03-13"
date.add(1, "day").get("date");  // -> "2015-03-13"
date.add(1, "d").get("date");    // -> "2015-03-13"

date.add(1, "weeks").get("date"); // -> "2015-03-19"
date.add(1, "week").get("date");  // -> "2015-03-19"
date.add(1, "w").get("date");     // -> "2015-03-19"

date.add(1, "months").get("date"); // -> "2015-04-12"
date.add(1, "month").get("date");  // -> "2015-04-12"
date.add(1, "m").get("date");      // -> "2015-04-12"

date.add(1, "years").get("date"); // -> "2016-03-12"
date.add(1, "year").get("date");  // -> "2016-03-12"
date.add(1, "y").get("date");     // -> "2016-03-12"
```

### sub

> NiceDate.sub(number, format)

Opposite of *NiceDate.add*.

### Default Options

Options determine how date related strings are displayed, below are the default options.

```javascript
{

  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],

  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],

  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],

  daysShort: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ],

  /**
   * Short representations of time measurements.
   *
   * @type {Object}
   */
  indicators: {
    year:         "y",
    month:        "m",
    week:         "w",
    day:          "d",
    hour:         "h",
    minute:       "m",
    second:       "s",
    milliseconds: "ms",
    past:         "ago",
    future:       "in",
    now:          "Just now"
  }

}
```

## Upcoming

- General improvements and tweaks.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)