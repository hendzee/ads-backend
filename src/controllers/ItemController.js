import Item from '../models/Item.js';

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

// CREATE DUMMY DATA OF ITEMS
const createDummyData = async () => {
    const img1 = 'http://localhost:3000/images/item1.png';
    const img2 = 'http://localhost:3000/images/item2.png';
    const img3 = 'http://localhost:3000/images/item3.png';
    const img4 = 'http://localhost:3000/images/item4.png';
    const img5 = 'http://localhost:3000/images/item5.png';
    const img6 = 'http://localhost:3000/images/item6.png';

    const dummyItems = [
        { 
            name: 'Buah Pisang Radja',
            price: 19000,
            stock: 16,
            images: [img1, img1, img1, img1, img1, img1],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 20,
            info: 'Pisang, camilan alami yang lezat dan penuh energi! Kaya akan serat, vitamin, dan rasa manis alami yang menyegarkan. Cocok untuk sarapan, camilan sehat, atau campuran dalam smoothies dan dessert favorit Anda.',
            additionalInfo: '<ul><li><strong>Rasa Manis Alami</strong> – Memiliki rasa manis seperti madu tanpa tambahan gula.</li><li><strong>Tekstur Lembut & Daging Tebal</strong> – Lebih nikmat dikonsumsi langsung atau dicampur dengan makanan lain.</li><li><strong>Sumber Energi Alami</strong> – Kaya akan karbohidrat, serat, dan nutrisi yang memberikan energi tahan lama.</li><li><strong>Kaya Nutrisi</strong> – Mengandung serat, vitamin, dan mineral seperti kalium dan magnesium yang baik untuk kesehatan.</li><li><strong>Baik untuk Pencernaan</strong> – Kandungan seratnya membantu melancarkan sistem pencernaan.</li><li><strong>Pilihan Sehat untuk Camilan</strong> – Cocok untuk diet sehat dan alternatif pemanis alami dalam berbagai hidangan.</li></ul>'
        },
        { 
            name: 'Baju Flanel Kotak Hitam Kuning',
            price: 89000,
            stock: 12,
            images: [img2, img2, img2, img2, img2, img2],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 5,
            info: 'Tampil santai tapi tetap stylish dengan baju flanel kotak! Bahannya lembut, hangat, dan cocok untuk segala suasana—dari hangout santai hingga gaya streetwear yang kece. Padukan dengan jeans atau kaos favorit, dan siap tampil effortlessly cool!',
            additionalInfo: '<ul><li><strong>Rasa Manis Alami</strong> – Memiliki rasa manis seperti madu tanpa tambahan gula.</li><li><strong>Tekstur Lembut & Daging Tebal</strong> – Lebih nikmat dikonsumsi langsung atau dicampur dengan makanan lain.</li><li><strong>Sumber Energi Alami</strong> – Kaya akan karbohidrat, serat, dan nutrisi yang memberikan energi tahan lama.</li><li><strong>Kaya Nutrisi</strong> – Mengandung serat, vitamin, dan mineral seperti kalium dan magnesium yang baik untuk kesehatan.</li><li><strong>Baik untuk Pencernaan</strong> – Kandungan seratnya membantu melancarkan sistem pencernaan.</li><li><strong>Pilihan Sehat untuk Camilan</strong> – Cocok untuk diet sehat dan alternatif pemanis alami dalam berbagai hidangan.</li></ul>'
        },
        { 
            name: 'Laptop Toshiba',
            price: 7800000,
            stock: 3,
            images: [img3, img3, img3, img3, img3, img3],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 0,
            info: 'Kerja, belajar, atau gaming? Apa pun kebutuhanmu, laptop dengan performa tinggi siap mendukung setiap langkahmu. Desain stylish, baterai tahan lama, dan kecepatan tanpa kompromi—semua dalam satu genggaman!',
            additionalInfo: '<ul><li><strong>Rasa Manis Alami</strong> – Memiliki rasa manis seperti madu tanpa tambahan gula.</li><li><strong>Tekstur Lembut & Daging Tebal</strong> – Lebih nikmat dikonsumsi langsung atau dicampur dengan makanan lain.</li><li><strong>Sumber Energi Alami</strong> – Kaya akan karbohidrat, serat, dan nutrisi yang memberikan energi tahan lama.</li><li><strong>Kaya Nutrisi</strong> – Mengandung serat, vitamin, dan mineral seperti kalium dan magnesium yang baik untuk kesehatan.</li><li><strong>Baik untuk Pencernaan</strong> – Kandungan seratnya membantu melancarkan sistem pencernaan.</li><li><strong>Pilihan Sehat untuk Camilan</strong> – Cocok untuk diet sehat dan alternatif pemanis alami dalam berbagai hidangan.</li></ul>'
        },
        { 
            name: 'Kurma Tunis Madu',
            price: 90000,
            stock: 16,
            images: [img4, img4, img4, img4, img4, img4],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 15,
            info: 'Rasakan kelembutan dan manis alami Kurma Tunis Madu, pilihan terbaik untuk camilan sehat dan penuh energi! Tekstur lembut, rasa legit seperti madu, dan kaya akan nutrisi. Cocok untuk berbuka puasa, teman ngopi, atau hadiah istimewa.',
            additionalInfo: '<ul><li><strong>Rasa Manis Alami</strong> – Memiliki rasa manis seperti madu tanpa tambahan gula.</li><li><strong>Tekstur Lembut & Daging Tebal</strong> – Lebih nikmat dikonsumsi langsung atau dicampur dengan makanan lain.</li><li><strong>Sumber Energi Alami</strong> – Kaya akan karbohidrat, serat, dan nutrisi yang memberikan energi tahan lama.</li><li><strong>Kaya Nutrisi</strong> – Mengandung serat, vitamin, dan mineral seperti kalium dan magnesium yang baik untuk kesehatan.</li><li><strong>Baik untuk Pencernaan</strong> – Kandungan seratnya membantu melancarkan sistem pencernaan.</li><li><strong>Pilihan Sehat untuk Camilan</strong> – Cocok untuk diet sehat dan alternatif pemanis alami dalam berbagai hidangan.</li></ul>'
        },
        { 
            name: 'Topi Fashion Pria Wanita',
            price: 19000,
            stock: 10,
            images: [img5, img5, img5, img5, img5, img5],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 15,
            info: 'info',
            additionalInfo: 'additional info'
        },
        { 
            name: 'Blender Miyako F-7625',
            price: 250000,
            stock: 16,
            images: [img6, img6, img6, img6, img6, img6],
            checkoutUrl: 'https://hendras.orderonline.id/mukena-dewasa---katun-micro-polos-2-in-1',
            discount: 10,
            info: 'info',
            additionalInfo: 'additional info'
        },
    ];

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
    createDummyData
}