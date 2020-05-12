# Aboder Reservation Service

![](https://i.imgur.com/kAziWMj.gif)

### Links

* [dockerhub](https://hub.docker.com/r/airtreentree/reservations-service)

## Getting Started

This service is supported on Node v12.13.0

Install package dependencies.

`npm install`

---

Install mongodb server community edition if not already installed.
https://www.mongodb.com/download-center/community

Version 4.2.3 of mongod is supported.

Seed the service database for development.

`npm run seed`

---

The modules mount to:

```
<div id='availability' />
<div id='priceSummary' />
```

## scripts

`webpack-dev`:

Build development bundle of client module.

---

`webpack-prod`:

Build production bundle of client module.

---

`webpack-server`:

Starts a webpack-dev-server on port 9000.

---

`seed`:

Creates a mongo database `room-reservations` in docker database

Creates and seeds collection `availabilities`
for 100 rooms

---

`seed-dev`:

Identical to `seed` but seeds a local mongo database

---

`start`:

Builds and starts the application

---

`dev`:

`nodemon` is required for `dev` and is not included in the package dependencies. `nodemon` must be installed separately or globally.


Builds and watches client and server. Starts server with hot reloading.

---

`build`:

Builds the application

---

## API Spec

- [Get Room Reservation Details](#Get-Room-Reservation-Details)


## Get Room Reservation Details

`GET /api/reservations/:roomid`

### Parameters

| Params | Type |
| --- | --- |
| :roomId | `String` |

### Response:

| Field | Type | Description |
| ----- | ---- | ---------- |
| _id | `String` | 
| roomId | `String` | 
| reservations | [`Reservation[]`](#Reservation) | An array of [reservation](#Reservation) objects. |
| pricesPerGuests | `Number[]` | An array of prices. <br> The index corresponds to the number of guests. <br>The value corresponds to the price per night. |
| minNights | `Number` | Minimum number of nights allowed for a reservation.
| maxNights | `Number` | Maximum number of nights allowed for a reservation.
| minGuests | `Number` | Minimum number of guests allowed for a reservation.
| maxGuests | `Number` | Maximum number of guests allowed for a reservation.
| maxInfants | `Number` | Maximum  number of infants allowed for a reservation.
| minInfants | `Number` | Just kidding (I think)


```
    {
        "_id": "123456789abcdef",
        "roomId" "fedcba987654321",
        "reservations": [
            {
                "startDate": 7376,
                "length": 5
            },
            ...
        ],
        "pricesPerGuests": [
            50,
            100,
            150
        ],
        "minNights: 2,
        "maxNights: 7,
        "minGuests: 1,
        "maxGuests: 5,
        "maxInfants: 5,
    }
```

### Reservation:

| Field | Type | Description
| ----- | ---- | ---
| startDate | `Number` | The number of days since 2000/1/1.
| length | `Number` | The number of nights for the reservation.

---
