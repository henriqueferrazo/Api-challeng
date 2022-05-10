import app from "./app"

const port = process.env.PORT || 5000

app.listen(port, () => `Servidor funcionando na port ${port}`)

