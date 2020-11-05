import React from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";


const ProductCard = ({product}) => {

  const platformLogos = product.platforms.map(
    (platform) => platform.platform_logo.url,
  );
  return (
  <div className="border">
    <CardHeader name = {product.name}
    platformLogos = {platformLogos}>
    </CardHeader>
    <CardBody></CardBody>
    <CardFooter></CardFooter>
  </div> 
  );
};

export default ProductCard;
