import express from "express";
import { createTutorial, deleteTutorial, getTutorial, getTutorials, updateTutorial } from "../controllers/tutorial.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Tutorial:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - published
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the tutorial
 *         title:
 *           type: string
 *           description: The title of your tutorial
 *         published:
 *           type: string
 *           description: The tutorial published 
 *         description:
 *           type: string
 *           description: The description of your tutorial
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the tutorial was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the tutorial was updated
 *       example:
 *         _id: d5fE_asz
 *         title: The New Turing Omnibus
 *         description: Tutorial Description
 *         published: Alexander K. Dewdney 
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Tutorials
 *   description: The tutorials managing API 
 */

// Get all tutorials
/**
 * @swagger
 * /tutorials:
 *   get:
 *     summary: Get all tutorials
 *     tags:
 *       - Tutorials
 *     responses:
 *       '200':
 *         description: A list of tutorials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tutorial'
 *       '404':
 *         description: Not found
 *         content:
 *           application/json:
 *             example:
 *               message: Tutorial not found
 */
router.get('/', getTutorials);

// Create a new tutorial
/**
 * @swagger
 * /tutorials:
 *   post:
 *     summary: Create a new tutorial
 *     tags:
 *       - Tutorials
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutorial'
 *     responses:
 *       '201':
 *         description: The created tutorial
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       '409':
 *         description: Conflict
 *         content:
 *           application/json:
 *             example:
 *               message: Tutorial already exists
 */
router.post('/', createTutorial);

// Get a tutorial by ID
/**
 * @swagger
 * /tutorials/{id}:
 *   get:
 *     summary: Get a tutorial by ID
 *     tags:
 *       - Tutorials
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tutorial
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The tutorial
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       '404':
 *         description: Not found
 *         content:
 *           application/json:
 *             example:
 *               message: Tutorial not found
 */
router.get('/:id', getTutorial);

// Update a tutorial by ID
/**
 * @swagger
 * /tutorials/{id}:
 *   patch:
 *     summary: Update a tutorial by ID
 *     tags:
 *       - Tutorials
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tutorial
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutorial'
 *     responses:
 *       '200':
 *         description: The updated tutorial
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutorial'
 *       '404':
 *         description: Not found
 *         content:
 *           application/json:
 *             example:
 *               message: Tutorial not found
 */
router.patch('/:id', updateTutorial);

// Delete a tutorial by ID
/**
 * @swagger
 * /tutorials/{id}:
 *   delete:
 *     summary: Delete a tutorial by ID
 *     tags:
 *       - Tutorials
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tutorial
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Tutorial deleted successfully
 *       '404':
 *         description: Not found
 *         content:
 *           application/json:
 *             example:
 *               message: Tutorial not found
 */
router.delete('/:id', deleteTutorial);

export default router;
