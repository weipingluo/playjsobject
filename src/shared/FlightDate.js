const moment = require('moment');
const firstDate = moment('1970-01-01');
const forever = moment('9999-12-31');
const dateFormat = "YYYY-MM-DD";
export default class FlightDate {
    constructor(startDate = firstDate, endDate = forever) {
        endDate
        moment(startDate).isValid() ? this.startDate = moment(startDate) : this.startDate = firstDate;
        moment(endDate).isValid() ? this.endDate = moment(endDate) : this.endDate = forever;
    }

    print() {
        return `${this.startDate.format(dateFormat)}-${this.endDate.format(dateFormat)}`;
    }

    toJSON() {
        return `{"startDate":${this.startDate.format(dateFormat)},"endDate":${this.endDate.format(dateFormat)}}`;
    }

    theSame(another) {
        this.validateParameter(another);
        if (this.startDate.isSame(another.startDate) && this.endDate.isSame(another.endDate)) {
            return true;
        }
        return false;
    }

    validateParameter(flightDate) {
        if (!(flightDate instanceof FlightDate)) {
            throw new Error("Paramenter type error");
        }
    }

    isOverlappedWith(another) {
        this.validateParameter(another);
        if (this.startDate.isAfter(another.endDate) || another.startDate.isAfter(this.endDate)) {
            return false;
        }
        return true;
    }

    isAdjacentWith(another) {
        this.validateParameter(another);
        const millSecsInADay = 24 * 60 * 60 * 1000;
        if (this.endDate.valueOf() + millSecsInADay === another.startDate.valueOf() ||
            another.endDate.valueOf() + millSecsInADay === this.startDate.valueOf()) {
            return true;
        }
        return false;
    }

    static sort(flightDates) {
        if (!Array.isArray(flightDates)) {
            throw new Error("Paramenter type error");
        }

        flightDates.forEach(function (fd) {
            this.validateParameter(fd);
        });

        flightDates.sort(function (a, b) {
            if (a.startDate.isAfter(b.startDate)) {
                return 1;
            } else if (a.startDate.isBefore(b.startDate)) {
                return -1;
            } else if (a.endDate.isAfter(b.endDate)) {
                return 1;
            } else if (a.endDate.isBefore(b.endDate)) {
                return -1;
            }
            return 0;
        })
    }

}