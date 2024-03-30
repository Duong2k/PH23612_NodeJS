import Category from "../models/category";

export const getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        if (categories.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            });
        }
        return res.json(categories);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const get = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate("products");
        if (category.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            });
        }
        return res.json(category);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const create = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        if (category.length === 0) {
            return res.status(200).json({
                message: "Không thêm được danh mục",
            });
        }
        return res.json(category);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const update = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (category.length === 0) {
            return res.status(200).json({
                message: "Cập nhật danh mục không thành công",
            });
        }
        return res.json(category);
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const cate = await Category.findOneAndDelete({ _id: req.params.id });
        return res.json({
            message: "Xóa danh mục thành công",
            cate,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};