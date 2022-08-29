import React from "react";
import Styles from './product.module.scss';
import Heading from "../shared/Heading/Heading";
import Img from "../shared/Img/Img";
import Links from "../shared/Links/Links";
import Text from "../shared/Text/Text";
const Product = () => {
    return (
        <div className="container">
            <Heading headingType="h3" className={Styles.heading}  headingText="Explore our Products"/>
            <div className={`${Styles.product}`}>
                {
                    productItem.map((pvalue) => {
                        return (
                            <>
                                <div className={`${Styles.productItem}`}>
                                    <div className={Styles.product_img}>
                                    <Img src={pvalue.imgsrc} alt="product img "></Img>
                                    </div>
                                   
                                    <Links href="#" >{pvalue.links} <Text text="" textType="span" className="icon-arrow_forward_ios" /></Links>
                                </div>
                            </>
                        )
                    })


                    
                }
            </div>


            <div className={Styles.shopProduct}>
            {
                   shoppingProduct.map((value) => {
                        return (
                         
                                <div className={Styles.shoppingItem}>
                                    
                                    <Img src={value.imgsrc} alt="product img "></Img>
                                    
                                </div>
                            
                        )
                    })


                    
                }
            </div>
        </div>
    )
}

export default Product;

const productItem = [
    {
        imgsrc: 'product-1',
        links: 'paper'
    },
    {
        imgsrc: 'product-2',
        links: 'Ink & Toner '
    },
    {
        imgsrc: 'product-3',
        links: 'Technology'
    },
    {
        imgsrc: 'product-4',
        links: 'Furniture'
    },
    {
        imgsrc: 'product-5',
        links: 'Cleaning & Janitorial'
    },
    {
        imgsrc: 'product-6',
        links: 'Pack & Ship '
    },
    {
        imgsrc: 'product-7',
        links: 'Breakroom'
    },
    {
        imgsrc: 'product-8',
        links: 'Business Essentials'
    }
    
]
const shoppingProduct = [
    {
      imgsrc: "shoppinProduct1",
    },
    {
      imgsrc: "shoppinProduct2",
    },
    {
      imgsrc: "shoppinProduct3",
    },
    {
      imgsrc: "shoppinProduct4",
    },
    {
      imgsrc: "shoppinProduct1",
    },
    {
      imgsrc: "shoppinProduct2",
    },
    {
      imgsrc: "shoppinProduct3",
    },
    {
      imgsrc: "shoppinProduct4",
    },
    {
      imgsrc: "shoppinProduct1",
    },
    {
      imgsrc: "shoppinProduct2",
    },
    {
      imgsrc: "shoppinProduct3",
    },
    {
      imgsrc: "shoppinProduct4",
    },
  ];