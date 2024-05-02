class Hotel {
    constructor(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
        checkAvailability(); {
            return this.rooms - this.booked;
        };
    }
}

const quayHotel = new Hotel ('Quay', 40, 25);
const parkHotel = new Hotel ('Park', 120, 77);

const details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();

const elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

const details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();

const elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;