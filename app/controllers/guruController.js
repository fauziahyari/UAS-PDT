const guru = require("../models/guru");

// CRUD operations
exports.createguru = async (req, res) => {
  const guru = new guru(req.body);
  try {
    await guru.save();
    res.status(201).send(guru);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getgurus = async (req, res) => {
  try {
    const gurus = await guru.find({});
    res.status(200).send(gurus);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getguru = async (req, res) => {
  try {
    const guru = await guru.findById(req.params.id);
    if (!guru) {
      return res.status(404).send();
    }
    res.status(200).send(guru);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateguru = async (req, res) => {
  try {
    const guru = await guru.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!guru) {
      return res.status(404).send();
    }
    res.status(200).send(guru);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteguru = async (req, res) => {
  try {
    const guru = await guru.findByIdAndDelete(req.params.id);
    if (!guru) {
      return res.status(404).send();
    }
    res.status(200).send(guru);
  } catch (error) {
    res.status(500).send(error);
  }
};
