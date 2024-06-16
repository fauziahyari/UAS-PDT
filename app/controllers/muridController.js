const murid = require("../models/murid");

// CRUD operations
exports.createmurid = async (req, res) => {
  const murid = new murid(req.body);
  try {
    await murid.save();
    res.status(201).send(murid);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getmurids = async (req, res) => {
  try {
    const murids = await murid.find({});
    res.status(200).send(murids);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getmurid = async (req, res) => {
  try {
    const murid = await murid.findById(req.params.id);
    if (!murid) {
      return res.status(404).send();
    }
    res.status(200).send(murid);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatemurid = async (req, res) => {
  try {
    const murid = await murid.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!murid) {
      return res.status(404).send();
    }
    res.status(200).send(murid);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletemurid = async (req, res) => {
  try {
    const murid = await murid.findByIdAndDelete(req.params.id);
    if (!murid) {
      return res.status(404).send();
    }
    res.status(200).send(murid);
  } catch (error) {
    res.status(500).send(error);
  }
};
