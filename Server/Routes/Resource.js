const express = require("express");
const {
  createResource,
  fetchResources,
  deleteResource,
  updateResource,
} = require("../dist/prisma");
const authMiddleware = require("../middleware/middleware");
const { resourceSchema } = require("../Zod/zod");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json({
    message: "Resource Route is working fine!",
  });
});

Router.get("/fetch", authMiddleware, async (req, res) => {
  const userId = req.id;
  const resources = await fetchResources(userId);

  res.json({
    resources,
  });
});

Router.post("/create", authMiddleware, async (req, res) => {
  const payLoad = req.body;
  payLoad.userId = req.id;
  const { success } = resourceSchema.safeParse(payLoad);
  if (!success) {
    res.status(411).json({
      message: "Invalid Inputs",
    });
    return;
  }
  const resource = await createResource(payLoad);
  console.log(resource);
  if (!resource) {
    res.status(411).json({
      message: "Resource was not Posted",
    });
    return;
  }

  res.json({
    message: "Resource was Posted!",
  });
});

Router.put("/update", async (req, res) => {
  const payLoad = req.body;
  const updateStatus = await updateResource(payLoad);
  if (!updateStatus) {
    res.status(411).json({
      message: "Some Error Occurred While Updation!",
    });
    return;
  }

  res.json({
    message: "Resource was Updated!",
  });
});

Router.delete("/delete", authMiddleware, async (req, res) => {
  const resourceId = req.body.id;
  const deleteSt = await deleteResource(resourceId);

  if (!deleteSt) {
    res.status(411).json({
      message: "Some Error Occurred while Deletion .",
    });
    return;
  }
  res.json({
    message: "Deleted Successfully",
  });
});

module.exports = Router;
