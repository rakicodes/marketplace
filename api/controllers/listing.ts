import asyncHandler from "express-async-handler";

/**
 ** @desc    get listing by its id
 ** @route   GET /api/:id
 ** @access  Public
 */
export const getOne = asyncHandler(async (req, res) => {});

/**
 ** @desc    get all listings
 ** @route   GET /api
 ** @access  Public
 */
export const getAll = asyncHandler(async (req, res) => {});

/**
 ** @desc    add new listing
 ** @route   POST /api
 ** @access  Private
 */
export const add = asyncHandler(async (req, res) => {});

/**
 ** @desc    edit listing
 ** @route   PUT /api/:id
 ** @access  Private
 */
export const edit = asyncHandler(async (req, res) => {});

/**
 ** @desc    delete listing
 ** @route   DELETE /api
 ** @access  Private
 */
export const remove = asyncHandler(async (req, res) => {});