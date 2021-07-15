import React from "react";
import "./Home.css";
import Product from "./Product";
import CarouselPage from './slideFeature';

function Home() {
    return (
        <div className="home">
            <div className = "home__container">
                <CarouselPage className="carousel" />
                    <h2>SNEAKERS</h2>
                    <div className="home__row">
                        <Product 
                            id="1794874"
                            title="ADIDAS ORIGINALS NMD_R1 2.0 SPORT INSPIRED Black SHADED sneakers" 
                            price={99.99} 
                            image="https://i.ibb.co/0s3pdnc/adidas-nmd.png" 
                            rating = {5}
                        />
                        <Product 
                                id="4254354345"
                                title="NEW BALANCE M 1500 SDS NIKE 1 RETRO HIGH OG SHADOW 2.0 SNEAKERS " 
                                price={198.99} 
                                image={"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png"} 
                                rating={4}
                            />
                        
                    </div>
                <h2>e-GADGETS</h2>
                <div className="home__row">
                        <Product
                         id="3794874"
                         title="Apple MacBook Air 1.1GHz i5 Processor,8GB 512GB St                      " 
                         price={499.99} 
                         image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRrhbMF_4ld7NTLaTFeM8chOE9QcjzMJvKhPEiCKL2SViJlK3BLjiAu3TIAHOpwjhIwiCU0jKHLlKKgJx2uCKgnQqq8EKcJrEXha_ptySl6O5OkNY-ojM36&usqp=CAE" 
                         rating = {5}
                        />
        
                    <Product
                         id="52134874"
                         title="Latest Apple Airpods Max green" 
                         price={379.99} 
                         image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyeJXRyrdrfbDk3WDjgrG_wQGOaBALVShUM5A2fZVq_LCQuXp08dxqzM38DisuLCBmYV8UzHcXqljryWDdtRcqTllRVNndyunTzgfQv4IY3Ddbjb1rEMaidQ&usqp=CAE" 
                         rating = {5}
                    />
                    <Product 
                            id="4254354345"
                            title="Home Theater - M1 Chip(2021 , 3rd Gen)" 
                            price={598.99} 
                            image={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRAyYLvORZpDbeBjlTQ9b0RfbtD8JK59cRC6DqpqfeFmvp3GLau9NnSGHBhr-yYj2v_QTdPeT-_aYEicDj98GfnXiz3GB91qmabl6vXRA5M4zBRxigdKbFY&usqp=CAE"} 
                            rating={4}
                        />
                </div>

                <h2>JACKETS</h2>
                <div className="home__row">
                    <Product 
                        id="1794874"
                        title="Vero Moda Western cotton stretch DENIM JACKET-Grey Black" 
                        price={99.99} 
                        image="https://i.ibb.co/XzcwL5s/black-shearling.png" 
                        rating = {5}
                    />
                    <Product 
                            id="4254354345"
                            title="HERE & NOW Women grey solid cropped DENIM Jacket" 
                            price={98.99} 
                            image={"https://i.ibb.co/N71k1ML/grey-jean-jacket.png"} 
                            rating={4}
                        />     
                </div>

                <h2>WOMENS</h2>
                <div className="home__row">
                <Product
                         id="6794874"
                         title="RIO printed Blue SMOCK Tank Top NYKAA" 
                         price={99.99} 
                         image="https://i.ibb.co/7CQVJNm/blue-tank.png" 
                         rating = {4}
                    />
                    <Product
                         id="52134874"
                         title="Yellow Track Suit MONTE CARLO" 
                         price={139.99} 
                         image="https://i.ibb.co/v1cvwNf/yellow-track-suit.png" 
                         rating = {5}
                    />
                    <Product
                         id="52134874"
                         title="SASSAFRAS rare printed Floral Dress" 
                         price={329.99} 
                         image="https://i.ibb.co/KV18Ysr/floral-skirt.png" 
                         rating = {5}
                    />
                </div>

                <h2>MENS</h2>
                <div className="home__row">
                    <Product 
                        id="1794874"
                        title="Rare rabbit sloven linen ava max off pink FLORAL shirt" 
                        price={99.99} 
                        image="https://i.ibb.co/RvwnBL8/pink-shirt.png" 
                        rating = {5}
                    />
                    <Product 
                            id="4254354345"
                            title="Vero Moda Western cotton stretch DENIM JACKET-BLUE" 
                            price={79.99} 
                            image={"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png"} 
                            rating={4}
                        />     
                </div>

                <h2>OTHER ACCESSORIES</h2>
                <div className="home__row">
                    <Product 
                        id="7000024"
                        title="Waterproof NYLON BACKPACK multi pocket " 
                        price={39.99} 
                        image="https://salesstores.in/wp-content/uploads/2021/06/AMAZINGBAG_2070bfa2-c5f6-41ea-b9f4-3067a4c93163-300x300.jpg" 
                        rating = {4}
                    />
                    <Product
                         id="52134874"
                         title="Canon EOS C500 Mark II 5.9K Full-Frame Camera Body" 
                         price={729.99} 
                         image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQaumBaHFAoHs_eRdK-HFj8A9ueYl3zQWFnhLQyu-icIuv77xzKk6USebVw7Br2BwlbgfJuWU30EtIc48D1CpULMHvm1kU9xOFJyc4C7FEPxa7e5N8rljRu&usqp=CAE"
                         rating = {5}
                    />
                    
                    <Product
                        id="8903850"
                        title="Novel CONTAGION by Jack Stapleton Laurie Montgomery" 
                        price={199.99} 
                        image={"https://images-na.ssl-images-amazon.com/images/I/51idfsusFVL.jpg"} 
                        rating={3}
                    />
                </div>
                
            
            </div>

        </div>
    );
}
export default Home;

/* line 12   <CarouselPage className="carousel" />  */