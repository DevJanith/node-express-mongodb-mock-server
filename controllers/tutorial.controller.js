import mongoose from 'mongoose';
import Tutorial from "../models/tutorial.model.js";

/**
 * Get all tutorials
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A promise representing the completion of the operation.
 */
export const getTutorials = async (req, res) => {
    try {
        const tutorials = await Tutorial.find();

        res.status(200).json(tutorials);
    } catch (error) {
        console.error("Error retrieving tutorials:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

/**
 * Create a new tutorial
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A promise representing the completion of the operation.
 */
export const createTutorial = async (req, res) => {
    const tutorialData = req.body;

    try {
        const newTutorial = await Tutorial.create(tutorialData);

        res.status(201).json(newTutorial);
    } catch (error) {
        console.error("Error creating tutorial:", error);
        res.status(409).json({ error: "Conflict - Unable to create tutorial" });
    }
};

/**
 * Get a tutorial by ID
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A promise representing the completion of the operation.
 */
export const getTutorial = async (req, res) => {
    const { id } = req.params;

    try {
        const tutorial = await Tutorial.findById(id);

        if (!tutorial) {
            return res.status(404).json({ error: "Tutorial not found" });
        }

        res.status(200).json(tutorial);
    } catch (error) {
        console.error("Error retrieving tutorial:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

/**
 * Update a tutorial by ID
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A promise representing the completion of the operation.
 */
export const updateTutorial = async (req, res) => {
    const { id } = req.params;
    const { title, description, published } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: `No Tutorial with id: ${id}` });
        }

        const updatedTutorial = await Tutorial.findByIdAndUpdate(
            id,
            { title, description, published },
            { new: true }
        );

        if (!updatedTutorial) {
            return res.status(404).json({ error: "Tutorial not found" });
        }

        res.status(200).json(updatedTutorial);
    } catch (error) {
        console.error("Error updating tutorial:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

/**
 * Delete a tutorial by ID
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A promise representing the completion of the operation.
 */
export const deleteTutorial = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: `No Tutorial with id: ${id}` });
        }

        const deletedTutorial = await Tutorial.findByIdAndDelete(id);

        if (!deletedTutorial) {
            return res.status(404).json({ error: "Tutorial not found" });
        }

        res.status(200).json({ message: "Tutorial Deleted Successfully" });
    } catch (error) {
        console.error("Error deleting tutorial:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
