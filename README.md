# mockten flight booking system

#endpoints

POST
/api/register
This endpoint should allow users to register.

to post:- 
body:{ name:String,email:String,password:String}

response:{"msg":"user registred"}

POST
/api/login
This endpoint should allow users to login.

to post:- 
body:{email:String,password:String}

response:{"msg":"user found"} or {"msg":"new user or wrong credentials"}

GET
/api/flights
This endpoint should return a list of all available flights.

response:[data]

GET
/api/flights/:id
This endpoint should return the details of a specific flight identified by its ID.

response:Flight data of that id

POST
/api/flights
This endpoint should allow users to add new flights to the system.

body:{
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number,
}

response:{"msg":"saved flight"}


PUT / PATCH
/api/flights/:id
This endpoint should allow users to update the details of a specific flight identified by its ID.
204

body:{
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number,
}

DELETE
/api/flights/:id
This endpoint should allow users to delete a specific flight identified by its ID.
202

response:{"msg":"flight deleted"}

POST
/api/booking
This endpoint should allow the user to book flights.
201

body:{
  user: { type: String, ref: "User" },
  flight: { type: String, ref: "Flight" },
}

GET
/api/dashboard
This point should list all the bookings so far with the user and flight details.
200

