const StartupMentor = require("../models/StartupMentors");

exports.getAll = async (req, res) => {
  const { startupId } = req.query;
  const filter = startupId ? { startupId } : {};
  const mentors = await StartupMentor.find(filter);
  res.json(mentors);
};

exports.getOne = async (req, res) => {
  const mentor = await StartupMentor.findById(req.params.id);
  if (!mentor) return res.status(404).json({ message: "Mentor not found" });
  res.json(mentor);
};

exports.create = async (req, res) => {
  try {
    const mentor = new StartupMentor(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const mentor = await StartupMentor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });
    res.json(mentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  await StartupMentor.findByIdAndDelete(req.params.id);
  res.json({ message: "Mentor deleted" });
};