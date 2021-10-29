const db = require('../persistence');

module.exports = async (req, res) => {
    await db.updateItem(req.params.id, {
        name: req.body.name,
    });
    const item = await db.getItem(req.params.id);
    res.send(item);
};