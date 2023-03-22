import axios from "axios";
import Product from "../models/product";
import joi from "joi";

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
})

export const getAll = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message,
            });
        }
        const data = await Product.find();
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            })
        }
        return res.json(data)
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const get = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            })
        }
        return res.json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

export const create = async (req, res) => {
    try {
        const data = await Product.create(req.body);
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không thêm được sản phẩm",
            })
        }
        return res.json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

export const update = async (req, res) => {
    try {
        const data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (data.length === 0) {
            return res.status(200).json({
                message: "Cập nhật sản phẩm  ko thành công",
            })
        }
        return res.json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

export const remove = async (req, res) => {
    try {
        const data = await Product.findOneAndDelete({ _id: req.params.id });
        if (data.length === 0) {
            return res.status(200).json({
                message: "Xoá sản phẩm  ko thành công",
            })
        }
        return res.json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}