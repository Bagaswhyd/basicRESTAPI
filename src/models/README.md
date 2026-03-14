📌 Fungsi:
Tempat mendefinisikan struktur data (schema/model), biasanya dipakai untuk database seperti MongoDB (Mongoose) atau Sequelize (MySQL/PostgreSQL).

// callback
, (err, rows) => {
        if (err) {
            res.json({
                message: "connection failed"
            })
        }

        res.json({
            message: "connection success",
            data: rows
        })
    }