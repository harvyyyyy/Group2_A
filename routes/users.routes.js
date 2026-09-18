const express = require("express");
const routes = express();

app.get('/', (req, res) => {
    const users =[
	{
	id: 1,
	name: "Candia",
	email: "candia@gmail.com"}];

    res.json({
        {
          "success": true,
          "data": [users],
          "meta": {
            "timestamp": "2026-09-17T18:45:00.000Z",
            "count": 1
          }
        }
    });
});

