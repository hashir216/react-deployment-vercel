import React, { useState, useEffect } from 'react';
import './Shop.css'; // Ensure this path is correct
import { AiFillHeart, AiFillEye, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';

const Shop = ({ shop = [], Filter, allcatefilter, addtocart }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Handle product detail page
  const detailpage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };

  // Close product detail page
  const closedetail = () => {
    setShowDetail(false);
  };

  // Handle category filter
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(shop);
    } else {
      setFilteredProducts(shop.filter(product => product.cat === selectedCategory));
    }
  }, [selectedCategory, shop]);

  // Handle logging shop data
  useEffect(() => {
    console.log('Shop data:', shop);
  }, [shop]);

  return (
    <>
      {/* Product Detail Modal */}
      {showDetail && detail && (
        <div className='product_detail'>
          <button className='close_btn' onClick={closedetail} aria-label="Close product details">
            <AiOutlineClose />
          </button>
          <div className='container'>
            <div className='img_box'>
              <img src={detail.image} alt={detail.Name} />
            </div>
            <div className='info'>
              <h4># {detail.cat}</h4>
              <h2>{detail.Name}</h2>
              <p>Description of the product</p>
              <h3>${detail.price}</h3>
              <button onClick={() => addtocart(detail)}>Add To Cart</button>
            </div>
          </div>
        </div>
      )}

      {/* Shop Page Content */}
      <div className='shop'>
        <h2># Shop</h2>
        <p>Home . Shop</p>
        <div className='container'>
          <div className='left_box'>
            <div className='category'>
              <div className='header'>
                <h3>All Categories</h3>
              </div>
              <div className='box'>
                <ul>
                  <li onClick={() => { setSelectedCategory('All'); allcatefilter(); }}># All</li>
                  <li onClick={() => { setSelectedCategory('tv'); Filter('tv'); }}># TV</li>
                  <li onClick={() => { setSelectedCategory('laptop'); Filter('laptop'); }}># Laptop</li>
                  <li onClick={() => { setSelectedCategory('watch'); Filter('watch'); }}># Watch</li>
                  <li onClick={() => { setSelectedCategory('speaker'); Filter('speaker'); }}># Speaker</li>
                  <li onClick={() => { setSelectedCategory('electronics'); Filter('electronics'); }}># Electronics</li>
                  <li onClick={() => { setSelectedCategory('headphone'); Filter('headphone'); }}># Headphone</li>
                  <li onClick={() => { setSelectedCategory('phone'); Filter('phone'); }}># Phone</li>
                </ul>
              </div>
            </div>
            <div className='banner'>
              <div className='img_box'>
                <img src='image/shop_left.avif' alt='Shop Banner Left' />
              </div>
            </div>
          </div>

          <div className='right_box'>
            <div className='banner'>
              <div className='img_box'>
                <img src='image/shop_top.webp' alt='Shop Banner Top' />
              </div>
            </div>
            <div className='product_box'>
              <h2>Shop Products</h2>
              <div className='product_container'>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((curElm) => (
                    <div key={curElm.id} className='box'>
                      <div className='img_box'>
                        <img src={curElm.image} alt={curElm.Name} />
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>${curElm.price}</p>
                        <div className='icon'>
                          <button onClick={() => detailpage(curElm)} aria-label="View product details">
                            <AiFillEye />
                          </button>
                          <button aria-label="Add to Wishlist">
                            <AiFillHeart />
                          </button>
                          <button onClick={() => addtocart(curElm)} aria-label="Add to Cart">
                            <AiOutlineShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No Products Found!</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
