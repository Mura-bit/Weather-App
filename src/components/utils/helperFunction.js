
const getDayOfWeek = () => {
    const todaysDay = new Date();
  let todaysWeekDay = todaysDay.getDay();
    switch (todaysWeekDay) {
      case 0:
        todaysWeekDay = "Sunday";
        break;
      case 1:
        todaysWeekDay = "Monday";
        break;
      case 2:
        todaysWeekDay = "Tuesday";
        break;
      case 3:
        todaysWeekDay = "WEdnesday";
        break;
      case 4:
        todaysWeekDay = "Thursday";
        break;
      case 5:
        todaysWeekDay = "Friday";
        break;
      case 6:
        todaysWeekDay = "Saturday";
        break;
      default:
        break;
    }
  return todaysWeekDay;
};

const getMonth = () => {
     const todaysDay = new Date();
    let todaysMonth = todaysDay.getMonth();
    switch (todaysMonth) {
      case 0:
        todaysMonth = "January";
        break;
      case 1:
        todaysMonth = "February";
        break;
      case 2:
        todaysMonth = "March";
        break;
      case 3:
        todaysMonth = "April";
        break;
      case 4:
        todaysMonth = "May";
        break;
      case 5:
        todaysMonth = "June";
        break;
      case 6:
        todaysMonth = "July";
        break;
      case 7:
        todaysMonth = "August";
        break;
      case 8:
        todaysMonth = "September";
        break;
      case 9:
        todaysMonth = "October";
        break;
      case 10:
        todaysMonth = "November";
        break;
      case 11:
        todaysMonth = "December";
            break;
        default:
            break;
    }
    return todaysMonth;
}

export { getDayOfWeek, getMonth };
