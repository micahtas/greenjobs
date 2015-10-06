/** Analytics of Green Jobs.
 * Created by Micah on 9/29/2015.
 */

/* globals _ */
/* exported testData, listIndustries, countyGreenJobs, jobsWithKeyword */

/**
 * Test variable to test the data set greenJobs.
 */
//var testData = greenjobs.splice(0, 9);

/**
 * Function that returns a list of jobs
 * @param data the data set of jobs and it's info.
 * @returns a list of jobs.
 */
/*
function findIndustries(data)
{
  return _.pluck(data, "Industry");
}
*/
/**
 * Function that returns a list of jobs with no duplicates.
 * @param data the data set of jobs and it's info.
 * @returns returns all of the jobs in the data set with no duplicates.
 */

function listIndustries(data)
{
  if(!_.every(data, hasIndustry))
  {
    throw new Error("No Industry field.");
  }
  if(!_.every(data, isEmpty))
  {
    throw new Error("Industry field is empty.");
  }
  return _.uniq(_.pluck(data, "Industry"));
}

/**
 * Returns true if the passed record has Industry field.
 * @param record the record.
 * @returns {boolean} true if Industry field is present.
 */
function hasIndustry(record)
{
  return record.hasOwnProperty("Industry");
}

/**
 * Returns true if the Industry field is empty.
 * @param record the record.
 * @returns {boolean} true if the Industry field is empty.
 */
function isEmpty(record)
{
  return record["Industry"] !== "";
}


/**
 * Function that returns an object where the keys are county names and the values are the number of green jobs.
 * @param data the data set of jobs and it's info.
 * @returns returns the number of green jobs in the county.
 */
function countyGreenJobs(data)
{
  return _.countBy(data, function(data){
    return data["County"];
  });
}

/**
 * Function that returns a list of job titles containing the passed string.
 * @param data the data set of jobs and it's info.
 * @param keyWord string to search for as keyword in job title.
 * @returns a list of the jobs matching the keyword.
 */
function jobsWithKeyword(data, keyWord)
{
  return _.pluck(_.filter(data, function(word){
    return word["Job Title"].indexOf(keyWord) !== -1;
  }), 'Job Title');
}