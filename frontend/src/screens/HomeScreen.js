import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBoxProducts from '../components/LoadingBoxProducts';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const topProductList = useSelector((state) => state.topProductList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    topProducts: topProducts,
  } = topProductList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listTopProducts());
  }, [dispatch]);
  return (
    <div>
      <h2>Top Products</h2>
      {loadingProducts ? (
        <LoadingBox></LoadingBox>
      ) : errorProducts ? (
        <MessageBox variant="danger">{errorProducts}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <Carousel showArrows autoPlay showThumbs={false}>
            {products.map((product) => (
              <div key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <img src={product.image} alt={product.name} />
                  <p className="legend">{product.name}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </>
      )}
      <h2>Featured Products</h2>
      {loading ? (
        Array(12)
          .fill(0)
          .map((_, index) => <LoadingBoxProducts key={index}></LoadingBoxProducts>)
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
