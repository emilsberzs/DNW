router.get("/", (req, res, next) => {
    const query = `
        SELECT * FROM events
        WHERE organizer_id = 1
    `;

    global.db.all(query, [], (err, events) => {
        if (err) {
            next(err);
        } else {
            res.render("organizer/home", { events });
        }
    });
});