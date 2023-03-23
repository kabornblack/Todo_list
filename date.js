

exports.getDate = function() {
  let today  = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
};

//just a sample to show that our exports object can have multiple functions
//module.exports.getDay = function (): can take out the module infront and it will still work and give a shorter code
exports.getDay = function () {
  let today  = new Date();

  let options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
