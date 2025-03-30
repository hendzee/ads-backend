import { ROOT_URL } from '../config.js';
import Item from '../models/Item.js';
import generateItemId from '../utils/generateItemId.js';

// GET ALL ITEMS FROM DB
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();

        res.status(200).json({ items: items });
    } catch (error) {
        
        res.status(500).json({ message: 'There is something wrong' })
    }
}

// GET DETAILS ITEM BY ID
const getItem = async(req, res) => {
    try {
        const item = await Item.findOne({ _id: req.params.id });

        res.status(200).json({ item: item });
    } catch (error) {
        
        res.status(500).json({ message: 'There is something wrong' })
    }
}

// CREATE ITEM
const addItem = async(req, res) => {
    try {
        let images = [];

        if (req.files) {
            images = req.files.map(e => {
                return `${ROOT_URL}/images/${e.filename}`;
            })
        }

        const itemId = await generateUniqueItemId();

        const newData = {
            name: req.body.name,
            itemId: itemId,
            images: images,
            info: req.body.info,
            additionalInfo: req.body.additionalInfo ? req.body.additionalInfo : null,
            checkoutUrl: req.body.checkoutUrl.toLowerCase().trim(),
            stock: req.body.stock ? req.body.stock : 0,
            price: req.body.price,
            discount: req.body.discount
        }
    
        const newItem = await Item.insertOne(newData);
    
        res.status(200).json({ item: newItem });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There is something wrong' });
    }
}

// UPDATE ITEM
const editItem = async(req, res) => {
    try {
        let images = [];
        let oldImages = req.body.oldImages;
        let newImages = [];

        if (req.files) {
            newImages = req.files.map(e => {
                return `${ROOT_URL}/images/${e.filename}`;
            })
        }

        images = [...newImages, ...oldImages];

        const newData = {
            name: req.body.name,
            images: images,
            info: req.body.info,
            additionalInfo: req.body.additionalInfo ? req.body.additionalInfo : '',
            checkoutUrl: req.body.checkoutUrl.toLowerCase().trim(),
            stock: req.body.stock ? req.body.stock : 0,
            price: req.body.price,
            discount: req.body.discount
        }
    
        const newItem = await Item.findOneAndUpdate(
            { _id: req.params.id },
            newData,
            { new: true }
        );
    
        res.status(200).json({ item: newItem });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There is something wrong' });
    }
}

// GENERATE UNIQUE ITEM ID
const generateUniqueItemId = async () => {
    let isUnique = false;
    let itemId = generateItemId();

    do {
        itemId = generateItemId();

        const isIdExist = await Item.findOne({ itemId: itemId });

        if (!isIdExist) isUnique = true;
    } while (!isUnique);

    return itemId;
}

// CREATE DUMMY DATA OF ITEMS
const createDummyData = async () => {
    const img1 = `${ROOT_URL}/images/item1.png`;
    const img2 = `${ROOT_URL}/images/item2.png`;
    const img3 = `${ROOT_URL}/images/item3.png`;
    const img4 = `${ROOT_URL}/images/item4.png`;
    const img5 = `${ROOT_URL}/images/item5.png`;
    const img6 = `${ROOT_URL}/images/item6.png`;

    const dummyAdditionalInfo = [
        "Rasa Manis Alami – Memiliki rasa manis seperti madu tanpa tambahan gula.",
        "Tekstur Lembut & Daging Tebal – Lebih nikmat dikonsumsi langsung atau dicampur dengan makanan lain.",
        "Sumber Energi Alami – Kaya akan karbohidrat, serat, dan nutrisi yang memberikan energi tahan lama.",
        "Kaya Nutrisi – Mengandung serat, vitamin, dan mineral seperti kalium dan magnesium yang baik untuk kesehatan.",
        "Baik untuk Pencernaan – Kandungan seratnya membantu melancarkan sistem pencernaan.",
        "Pilihan Sehat untuk Camilan – Cocok untuk diet sehat dan alternatif pemanis alami dalam berbagai hidangan."
    ];

    const dummyItems = [
        { 
            name: 'Buah Pisang Radja',
            price: 19000,
            stock: 16,
            images: [img1, img1, img1, img1, img1, img1],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 20,
            info: 'Pisang, camilan alami yang lezat dan penuh energi! Kaya akan serat, vitamin, dan rasa manis alami yang menyegarkan. Cocok untuk sarapan, camilan sehat, atau campuran dalam smoothies dan dessert favorit Anda.',
            additionalInfo: dummyAdditionalInfo
        },
        { 
            name: 'Baju Flanel Kotak Hitam Kuning',
            price: 89000,
            stock: 12,
            images: [img2, img2, img2, img2, img2, img2],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 5,
            info: 'Tampil santai tapi tetap stylish dengan baju flanel kotak! Bahannya lembut, hangat, dan cocok untuk segala suasana—dari hangout santai hingga gaya streetwear yang kece. Padukan dengan jeans atau kaos favorit, dan siap tampil effortlessly cool!',
            additionalInfo: dummyAdditionalInfo
        },
        { 
            name: 'Laptop Toshiba',
            price: 7800000,
            stock: 3,
            images: [img3, img3, img3, img3, img3, img3],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 0,
            info: 'Kerja, belajar, atau gaming? Apa pun kebutuhanmu, laptop dengan performa tinggi siap mendukung setiap langkahmu. Desain stylish, baterai tahan lama, dan kecepatan tanpa kompromi—semua dalam satu genggaman!',
            additionalInfo: dummyAdditionalInfo
        },
        { 
            name: 'Kurma Tunis Madu',
            price: 90000,
            stock: 16,
            images: [img4, img4, img4, img4, img4, img4],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 15,
            info: 'Rasakan kelembutan dan manis alami Kurma Tunis Madu, pilihan terbaik untuk camilan sehat dan penuh energi! Tekstur lembut, rasa legit seperti madu, dan kaya akan nutrisi. Cocok untuk berbuka puasa, teman ngopi, atau hadiah istimewa.',
            additionalInfo: dummyAdditionalInfo
        },
        { 
            name: 'Topi Fashion Pria Wanita',
            price: 19000,
            stock: 10,
            images: [img5, img5, img5, img5, img5, img5],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 15,
            info: 'info',
            additionalInfo: null
        },
        { 
            name: 'Blender Miyako F-7625',
            price: 250000,
            stock: 16,
            images: [img6, img6, img6, img6, img6, img6],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 10,
            info: 'info',
            additionalInfo: null
        },
    ];

    // SET ITEM ID
    for (let i = 0; i < dummyItems.length; i++) {
        dummyItems[i].itemId = await generateUniqueItemId();
    }

    try {
        const createItems = await Item.insertMany(dummyItems);

        console.log(createItems.length + ' dummies data has been creted')
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllItems,
    getItem,
    createDummyData,
    addItem,
    editItem
}