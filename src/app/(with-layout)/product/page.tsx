"use client"
import UploadProduct from "@/components/(withLayout)/Products/UploadProduct";
import image from '../../../assets/product/product.png'
import { useState } from "react";
import { Pagination } from "antd";
import ProductCart from "@/components/(withLayout)/Products/ProductCart";

const Product = () => {

    const data = [
        {
            id: 1,
            name: 'T Shirt',
            image: image,
            price: 120,
            size: ['s', 'm', 'l', 'xl', 'xxl'],
            description: 'Mens Starry Sky Printed Shirt 100% Cotton Fabric'
        },
        {
            id: 2,
            name: 'Hoodie',
            image: image,
            price: 150,
            size: ['m', 'l', 'xl', 'xxl'],
            description: 'Cozy Fleece Hoodie with Front Pocket'
        },
        {
            id: 3,
            name: 'Denim Jacket',
            image: image,
            price: 180,
            size: ['s', 'm', 'l', 'xl'],
            description: 'Classic Denim Jacket with Button Closure'
        },
        {
            id: 4,
            name: 'Sweater',
            image: image,
            price: 140,
            size: ['s', 'm', 'l', 'xl', 'xxl'],
            description: 'Warm Knitted Sweater with Ribbed Cuffs'
        },
        {
            id: 5,
            name: 'Casual Shirt',
            image: image,
            price: 130,
            size: ['m', 'l', 'xl'],
            description: 'Lightweight Casual Shirt with Checkered Pattern'
        },
        {
            id: 6,
            name: 'Jacket',
            image: image,
            price: 200,
            size: ['s', 'm', 'l'],
            description: 'Waterproof Jacket with Adjustable Hood'
        },
        {
            id: 7,
            name: 'Blazer',
            image: image,
            price: 220,
            size: ['m', 'l', 'xl'],
            description: 'Elegant Blazer with Two Buttons and Pockets'
        },
        {
            id: 8,
            name: 'Polo Shirt',
            image: image,
            price: 110,
            size: ['s', 'm', 'l', 'xl'],
            description: 'Comfortable Polo Shirt with Embroidered Logo'
        },
        {
            id: 9,
            name: 'Tank Top',
            image: image,
            price: 100,
            size: ['s', 'm', 'l'],
            description: 'Soft Cotton Tank Top for Summer'
        },
        {
            id: 10,
            name: 'Button-Down Shirt',
            image: image,
            price: 140,
            size: ['m', 'l', 'xl', 'xxl'],
            description: 'Formal Button-Down Shirt with Fine Stripes'
        },
        {
            id: 11,
            name: 'Pullover',
            image: image,
            price: 160,
            size: ['s', 'm', 'l'],
            description: 'Chunky Knit Pullover with Crew Neck'
        },
        {
            id: 12,
            name: 'Cardigan',
            image: image,
            price: 170,
            size: ['m', 'l', 'xl'],
            description: 'Button-Front Cardigan with Soft Wool Blend'
        },
        {
            id: 13,
            name: 'Windbreaker',
            image: image,
            price: 130,
            size: ['s', 'm', 'l', 'xl'],
            description: 'Lightweight Windbreaker with Zipper Closure'
        },
        {
            id: 14,
            name: 'Long Sleeve Shirt',
            image: image,
            price: 125,
            size: ['m', 'l', 'xl', 'xxl'],
            description: 'Comfortable Long Sleeve Shirt with a Classic Fit'
        },
        {
            id: 15,
            name: 'Zip-Up Hoodie',
            image: image,
            price: 160,
            size: ['s', 'm', 'l', 'xl'],
            description: 'Soft Zip-Up Hoodie with Adjustable Drawstrings'
        }
    ];

    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalItems = 50;
    const pageSize = 15;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };


    return (
        <div>
            <UploadProduct></UploadProduct>
            <div>
                <div className=" grid grid-cols-3 gap-8 mt-8 ">
                    {
                        data.map(data => <ProductCart key={data?.id} data={data}></ProductCart>)
                    }
                </div>
                <div className="py-6">
                    <Pagination
                        align="end"
                        className="custom-pagination-all"
                        current={currentPage}
                        pageSize={pageSize}
                        total={totalItems}
                        onChange={handlePageChange} defaultCurrent={1}
                    />
                </div>

            </div>
        </div>
    );
};

export default Product;