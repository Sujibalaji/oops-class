class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if (rating == undefined) {
            this.rating = "PG";
        }
        else {
            this.rating = rating;
        }

    }


    getPG(moviesArr) {
        var result = [];
        for (var i = 0; moviesArr.length; i++) {
            if (moviesArr[i] == "PG") {
                result.push(moviesArr[i]);
            }
        }
        return result;
    }
}
var obj = new movie("Casino Royale", "Eon Productions", "PG­13");
var obj1 = new movie("Royale", "Eon Productions");
console.log(obj);
console.log(obj1);


//Circle - Class
//Convert the UML diagram to Typescript class.- use number for double

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    get circleRadius() {
        return `The radius of circle is ${this.radius}`;

    }
    get circleColor() {
        return `The color of circle is ${this.color}`;
    }
    set circleRadius(radius) {
        `${this.radius = radius}`;
    }
    set circleColor(color) {
        `${this.color = color}`;
    }
    get toString() {
        return `the circle is [radius =${this.radius}, AND color =${this.color}]`;
    }
    get area() {
        return `The area of circle ${Math.PI * this.radius * this.radius}`;
    }
    get circumference() {
        return `The Circumference is ${2 * Math.PI * this.radius}`;
    }
}
var objVal = new Circle(1.0, "red");
console.log(objVal);
console.log(objVal.toString);
console.log(objVal.area);
console.log(objVal.circumference);
console.log(objVal.circleRadius = 2.0);
console.log(objVal.circleColor = "violet");
console.log(objVal);

//Write a “person” class to hold all the details:

class Person {
    constructor(Name, Age, Education, Email, Address) {
        this.Name = Name;
        this.Age = Age;
        this.Education = Education;
        this.Email = Email;
        this.Address = Address;

    }
}
var personDetails = new Person(
    "Sujitha", 28, "MCA", "learningsuji@gmail.com", "Bangalore");
console.log(personDetails);

//write a class to calculate the Uber price.

class uberPrice {
    constructor(baseFare, costPerMinute, costPerKm, bookingFee, surgFee) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
        this.surgFee = surgFee;
    }
    uberFare(RideTime, RideDistance) {
        var fare = this.baseFare + (this.costPerMinute * RideTime + this.costPerKm * RideDistance * this.surgFee)
            + this.bookingFee;
        return ` Fare for your Ride is ${fare}`;
    }
}
var obj = new uberPrice(10, 4, 20, 3, 2);
console.log(obj.uberFare(5, 3 * (5 / 8))); 