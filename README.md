# Air Tree n Tree Reservation Service

---

## API Spec

- [Get Room Reservation Details](#get-room-reservation-details) 


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
| reservations | [`Reservation`](#Reservation)`[]` | An array of [reservation](#Reservation) objects. |
| pricesPerGuests | `Number[]` | An array of prices. <br> The index corresponds to the number of guests. <br>The value corresponds to the price per night. |
| minNights | `Number` | Minimum number of nights allowed for a reservation.
| maxNights | `Number` | Maximum number of nights allowed for a reservation
| minGuests | `Number` | Minimum number of guests allowed for a reservation
| maxGuests | `Number` | Maximum number of guests allowed for a reservation
| maxInfants | `Number` | Maximum  number of infants allowed for a reservation


```
    {
        "_id": "123456789abcdef",
        "roomId" "fedcba987654321"
        "reservations": [
            {
                "startDate": 7376,
                "length": 5
            },
            ...
        ],
        "pricesPerGuests": [
            0,
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
| startDate | `Number` | The number days since 2000/1/1
| length | `Number` | The number of nights for the reservation

---
