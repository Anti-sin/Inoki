import Menu from "../models/Menu.js";

export const getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find({ available: true }).sort({
      category: 1,
      name: 1,
    });

    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch menu items",
      error: error.message,
    });
  }
};

export const getMenuItem = async (req, res) => {
  try {
    const menuItem = await Menu.findById(req.params.id);

    if (!menuItem) {
      return res.status(404).json({
        message: "Menu item not found",
      });
    }

    res.status(200).json(menuItem);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch menu item",
      error: error.message,
    });
  }
};

export const createMenuItem = async (req, res) => {
  try {
    const menuItem = await Menu.create(req.body);

    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create menu item",
      error: error.message,
    });
  }
};

export const updateMenuItem = async (req, res) => {
  try {
    const menuItem = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!menuItem) {
      return res.status(404).json({
        message: "Menu item not found",
      });
    }

    res.status(200).json(menuItem);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update menu item",
      error: error.message,
    });
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await Menu.findByIdAndDelete(req.params.id);

    if (!menuItem) {
      return res.status(404).json({
        message: "Menu item not found",
      });
    }

    res.status(200).json({
      message: "Menu item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete menu item",
      error: error.message,
    });
  }
};
