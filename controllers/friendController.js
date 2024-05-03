const User = require('../models/User');

const friendController = {
    addFriend: async (req, res) => {
        try {
            const user = await User.findById(req.params.userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (!user.friends.includes(req.params.friendId)) {
                user.friends.push(req.params.friendId);
                await user.save();
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    removeFriend: async (req, res) => {
        try {
            const user = await User.findById(req.params.userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            user.friends = user.friends.filter(friendId => friendId !== req.params.friendId);
            await user.save();

            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = friendController;
