import Item from "../models/Item.js";

const getAllItemsPerformance = async (req, res) => {
    try {
        
        const result = await Item.aggregate([
            {
                $lookup: {
                    from: "performances", // Name of the collection B
                    localField: "itemId", // Field in collection A
                    foreignField: "itemId", // Field in collection B
                    as: "viewsData" // Output array field
                }
            },
            {
                $unwind: {
                    path: "$viewsData",
                    preserveNullAndEmptyArrays: true // Keep documents even if no match is found
                }
            },
            {
                $project: {
                    name: 1,
                    itemId: 1,
                    totalView: "$viewsData.totalView" // Extract totalView from joined data
                }
            }
        ]);

        res.status(200).json({ items: result });
    } catch (error) {
        res.status(500).json({ message: 'There is something wrong' })
    }
}

export { getAllItemsPerformance }