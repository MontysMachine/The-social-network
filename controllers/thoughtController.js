const Thought = require('../models/Thought');

const thoughtController = {
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getThoughtById: async (req, res) => {
        try {
            const thought = await Thought.findById(req.params.id);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createThought: async (req, res) => {
        try {
            const thought = await Thought.create(req.body);
            res.status(201).json(thought);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateThought: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(thought);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteThought: async (req, res) => {
        try {
            await Thought.findByIdAndDelete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
};

module.exports = thoughtController;

