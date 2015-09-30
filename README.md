# Overview

Provides three functions for anaylitics of the data set [Hawaii Directory of Green Employers](https://data.hawaii.gov/Employment/Hawaii-Directory-Of-Green-Employers/mq86-5ta6).

# Installation

Include the following scripts in your html file:
```
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/greenjobs.js"></script>
<script src="greenjobs.js"></script>
```

# Usage

Here are some example function calls:
```
<script>
  console.log("List Industries", listIndustries(greenjobs));
  console.log("County Green Jobs", countyGreenJobs(greenjobs));
  console.log("Jobs With Keywords", jobsWithKeyword(greenjobs, "PV"));
</script>
```
See the greenjobs.js file for more details on the functions.

# Credits 

Uses the [Underscore](http://underscorejs.org) library.
