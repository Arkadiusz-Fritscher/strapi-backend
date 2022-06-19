// You should find some modules that convert CSV to Array of objects.
// For json you can use just JSON.parse() if fields are identical of both cases.
// const {importLibraryThatParsesCSV}  = require('{importLibraryThatParsesCSV}');

const db = "bauwerke";

module.exports = {
  /**
   * Get JSON or CSV file and create entries in strapi.
   */
  async uploadFile(ctx) {
    const {
      request: { body, files: { files } = {} },
    } = ctx; //getting the file.

    const CSVToArray = (data, delimiter = ",", omitFirstRow = false) =>
      data
        .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
        .split("\n")
        .map((v) => v.split(delimiter));

    console.log("body, files", body, files);

    // let fileTransformedToArray; //preparing empty array for storing entities.

    // // we will use different parse methods for each file type
    // if (files.type == 'text/csv') {
    //   fileTransformedToArray = importLibraryThatParsesCSV(files);
    // }
    // if (files.type == 'application/json') {
    //   fileTransformedToArray = importLibraryThatParsesJSON(files)  // or JSON.parse()
    // }
    // // now, as we have all data parsed as an Array,
    // // we can apply a foreach on it and create entities one by one
    // fileTransformedToArray.forEach(entity=> {
    //   await strapi.services[`${db}`].create(entity);
    // });
  },
};
