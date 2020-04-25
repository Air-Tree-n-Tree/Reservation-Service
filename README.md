# Air Tree n Tree Reservation Service

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

### client

`build-dev`:

Build development bundle of client module.

---

`build-prod`:

Build production bundle of client module.

---

`start-dev`:

Starts a webpack-dev-server on port 9000.

---

### server

`seed`:

Creates a mongo database `room-reservations`


Creates and seeds collection `availabilities`
with 100 documents of dummy reservation data.

---

`start`:

Starts the proxy service server locally.

---


`dev`:

__`nodemon` is required for `dev-server` and is not included in the package dependencies. `nodemon` must be installed separately or globally.__ 

Starts and watches the proxy service server.

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
