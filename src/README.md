// Buat basic route
// app.method(path, handler);

//Method use, Secara general
// app.use("/", (req, res, next) => {
//     res.send("Hello World");
// });

app.post("/", (req, res) => {
    res.send("Hello Post Method");
});

// app.get("/", (req, res) => {
//     res.send('<h1Hello Get Method</h1>');
// });

app.get("/", (req, res) => {
    res.json({
        Name: "Muhammad Bagas Wahyudi",
        NIM: "1301220296",
    });
});

app.put("/", (req, res) => {
    res.send("Hello Put Method");
});

app.delete("/", (req, res) => {
    res.send("Hello Delete Method");
});

// port 
const port = 4000;