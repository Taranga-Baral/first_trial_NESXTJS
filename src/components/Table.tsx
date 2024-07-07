/* eslint-disable @next/next/no-css-tags */
"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  battery_life: number;
}

const ProductsTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    axios
      .get("https://static.staticsave.com/laptoppartial/laptops-json.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleSeeMore = (id: number) => {
    setExpandedProductId(expandedProductId === id ? null : id);
  };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('button') && !target.classList.contains('see-more')) {
      router.push(`/product/${id}`);
    }
  };

  return (
    <div className="products-container">
      <style>{`
        .products-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          padding: 15px;
        }

        .product-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 280px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: justify;
          transition: transform 0.2s, height 0.3s ease;
          height: 50vh; /* Fixed initial height */
          cursor: pointer;
        }

        .product-card.expanded {
          height: auto;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-image {
          max-width: 100%;
          height: auto;
          border-bottom: 1px solid #ddd;
          margin-bottom: 10px;
        }

        .product-name {
          font-size: 1.3em;
          margin: 8px 0;
        }

        .product-price,
        .product-description,
        .product-battery {
          font-size: 0.95em;
          margin: 4px 0;
        }

        .see-more {
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
          font-size: 0.9em;
          margin-top: 5px;
        }

        .button-container {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
        }

        .product-card:hover .button-container {
          opacity: 1;
        }

        .button {
          background-color: #007bff;
          border: none;
          color: white;
          padding: 8px 16px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 0.9em;
          margin: 4px 2px;
          transition: background-color 0.3s, transform 0.3s;
          border-radius: 5px;
          cursor: pointer;
        }

        .button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }

        @media (max-width: 600px) {
          .product-card {
            width: 100%;
          }
        }
      `}</style>
      {products.map((product) => (
        <div
          key={product.id}
          className={`product-card ${
            expandedProductId === product.id ? "expanded" : ""
          }`}
          onClick={(event) => handleCardClick(event, product.id)}
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: NPR {product.price}</p>
            <p className="product-description">
              {product.description.length > 100 &&
              expandedProductId !== product.id
                ? `${product.description.substring(0, 100)}...`
                : product.description}
            </p>
            {product.description.length > 100 && (
              <p className="see-more" onClick={() => toggleSeeMore(product.id)}>
                {expandedProductId === product.id ? "See Less" : "See More"}
              </p>
            )}
            <p className="product-battery">
              Battery Life: {product.battery_life} hours
            </p>
          </div>
          <div className="button-container">
            <button className="button">Details</button>
            <button className="button">Add to Cart</button>
            <button className="button">Buy</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsTable;
