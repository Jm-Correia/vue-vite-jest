import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())


app.get("/v1/notification", async (request, response) => {
    console.log("here")
    return response.status(200).json({
        message: "Notification send."
    })
});

app.listen(3000, () => {
    console.log("Server ON port 3000")
})