import express from "express"


 

const app = express()

const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
    const products = [
  {
    id: 1,
    name: "Logo",
    description: "Simple and clean design with your brand's logo on the chest.",
    price: 999,
    color: "White",
    size: ["S", "M", "L", "XL"],
    image: "https://img.sonofatailor.com/images/customizer/product/highneck/DeepBlue_Regular.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "Desi",
    description: "Features bold, desi pop culture references and memes.",
    price: 1099,
    color: "Black",
    size: ["S", "M", "L", "XL"],
    image: "https://condomshop.pk/cdn/shop/products/plain-red-tshirt.jpg?v=1449214693",
    inStock: true,
  },
  {
    id: 3,
    name: "Artistic",
    description: "A beautiful hand-drawn or AI-generated abstract design.",
    price: 1199,
    color: "Beige",
    size: ["S", "M", "L", "XL"],
    image: "https://i5.walmartimages.com/seo/White-Tshirt-for-Men-Gildan-2000-Men-T-Shirt-Cotton-Men-Shirt-Original-Men-s-Shirts-Best-Mens-Classic-Short-Sleeve-Tee_c9ecef4f-8e1e-4f24-8786-e88f1846255c.a79d87519fef1e4e9d626ff3b446742c.jpeg",
    inStock: true,
  },
  {
    id: 4,
    name: "MotivationalS",
    description: "Powerful quotes printed in a bold typographic style.",
    price: 999,
    color: "Grey",
    size: ["S", "M", "L", "XL"],
    image: "https://pangaia.com/cdn/shop/files/DNA_Oversized_T-Shirt_-Summit_Blue-1.png?v=1707830032",
    inStock: true,
  },
  {
    id: 5,
    name: "Limited",
    description: "Exclusive drop designed in collaboration with a local artist.",
    price: 1299,
    color: "Black",
    size: ["M", "L"],
    image: "https://reigningchamp.jp/cdn/shop/files/SS25_RC-1474_AIRFORCEBLUE_T-SHIRT_off_jp.jpg?crop=center&height=1024&v=1747946786&width=1024",
    inStock: false,
  }
];

if (req.query.search) {
   const filterProducts =   products.filter((product) => product.name.toLowerCase().includes(req.query.search.toLowerCase()))
   res.send(filterProducts)
   return;
}
setTimeout(() => {
     res.send(products)
}, 3000)

})

app.listen(port, () => {
console.log(`Server runing at port ${port}`);
})