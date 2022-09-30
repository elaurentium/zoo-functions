const data = require('../data/zoo_data');

const { species, hours } = data;

function returnObject() {
  const object = {};

  Object.keys(hours).forEach((day) => {
    if (day === 'Monday') {
      object[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      object[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species.filter((specie) =>
          specie.availability.includes(day)).map((elemento) => elemento.name),
      };
    }
  });

  return object;
}

function checkParam(param) {
  if (species.filter((element) => element.name).map((element) =>
    element.name).some((element) => element === param)) {
    return species.find((specie) => specie.name === param).availability;
  }
  if (Object.keys(hours).includes(param)) {
    return { [param]: returnObject()[param] };
  }
  return returnObject();
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return returnObject();
  }
  return checkParam(scheduleTarget);
}

console.log(getSchedule('elephants'));

module.exports = getSchedule;
