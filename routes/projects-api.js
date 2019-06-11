const express      = require('express'),
      router       = express.Router(),
      projectsJson = require('../myProjects.json');

router.get("/:collection", async (req, res) => {
    let collection = req.params.collection;
    let projects = await projectsJson[collection];
    await res.send(projects);
});

module.exports = router;
