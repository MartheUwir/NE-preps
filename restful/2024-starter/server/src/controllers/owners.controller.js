// make owners component

import Owners from "../models/owner.model.js"
import { createSuccessResponse, errorResponse, serverErrorResponse, successResponse } from "../utils/api.response.js";
import _ from "lodash";

//continue

export const createOwner = async (req, res) => {
    try {
        //work on checkphone and national ID later

        let owner = new Owners( 
            _.pick(req.body, [
                "firstname",
                "lastname",
                "nationalId",
                "email",
                "phone",
                "address"
            ])
        );
        try {
            await owner.save();
            return createSuccessResponse("Owner registered successfully", {}, res);
        } catch (ex) {
            return errorResponse(ex.message, res);
        }
        
    } catch (ex) {
        console.log(ex)
        return serverErrorResponse(ex, res);
    }
}


// Function to get paginated list of owners
export const getOwners = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const offset = (page - 1) * limit;

        const { count, rows } = await Owners.findAndCountAll({
            limit,
            offset
        });

        const totalPages = Math.ceil(count / limit);
        const returnObject = {
            data: rows,
            currentPage: page,
            totalPages,
            totalData: count,
        };

        return successResponse("Owners", returnObject, res);
    } catch (ex) {
        console.log(ex);
        return serverErrorResponse(ex, res);
    }
}

export const getAllOwners = async (req, res) => {
    try {
        let owners = await Owners.findAll();
        return successResponse("Owners fetched successfully", owners, res);
    } catch (ex) {
        console.log(ex);
        return serverErrorResponse(ex, res);
    }
}













