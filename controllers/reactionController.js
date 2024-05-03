const Thought = require('../models/Thought');

const reactionController = {
    createReaction: async (req, res) => {
        try {
            const thought = await Thought.findById(req.params.thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }

            thought.reactions.push({
                reactionId: req.body.reactionId,
                reactionBody: req.body.reactionBody,
                username: req.body.username
            });

            await thought.save();

            res.status(201).json(thought);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteReaction: async (req, res) => {
        try {
            const thought = await Thought.findById(req.params.thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }

            thought.reactions = thought.reactions.filter(reaction => reaction.reactionId !== req.params.reactionId);

            await thought.save();

            res.status(204).end();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = reactionController;
