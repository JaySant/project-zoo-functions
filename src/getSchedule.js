const data = require('../data/zoo_data');

function officeHour(dayWeek) {
  if (dayWeek === 'Monday') {
    return 'CLOSED';
  }
  const hoursAM = Object.values(data.hours[dayWeek])[0];
  const hoursPM = Object.values(data.hours[dayWeek])[1];
  return `Open from ${hoursAM}am until ${hoursPM}pm`;
}

function availability(dayWeek) {
  if (dayWeek === 'Monday') {
    return 'The zoo will be closed!';
  }

  const animals = data.species.filter((item) => item.availability.includes(dayWeek));
  return animals.map((item) => item.name);
}

function noParam() {
  const objHours = {};
  Object.keys(data.hours).forEach((item) => {
    objHours[item] = {
      officeHour: officeHour(item),
      exhibition: availability(item),
    };
  });
  return objHours;
}

function animal(animalWeek) {
  return data.species.find((item) => item.name.includes(animalWeek)).availability;
}

function day(dayWeek) {
  const objHours = {};
  objHours[dayWeek] = {
    officeHour: officeHour(dayWeek),
    exhibition: availability(dayWeek),
  };
  return objHours;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (data.species.some((item) => item.name === scheduleTarget)) {
    return animal(scheduleTarget);
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return day(scheduleTarget);
  }
  return noParam();
}
module.exports = getSchedule;
