import React, { useEffect, useState } from 'react';
import { SliderData, products } from "../drive-download-20240403T064718Z-001/products";
import { serviceData } from "../drive-download-20240403T064718Z-001/products";
import { discoutProducts } from "../drive-download-20240403T064718Z-001/products";
import { PlusCircle} from "react-feather";


// import { products } from "../drive-download-20240403T064718Z-001/products";



    // sliders
const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevSlide = () => {
        const newIndex = (activeIndex === 0) ? SliderData.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
    };

    const StarRating = ({ rating }) => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push(<span key={i} style={{color:"gold"}}>&#9733;</span>); // Filled star
        } else {
          stars.push(<span key={i}>&#9734;</span>); // Empty star
        }
      }
      return <div>{stars}</div>;
    };

    const handleNextSlide = () => {
        const newIndex = (activeIndex === SliderData.length - 1) ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
    };
    function click(){
      alert("hello")

    }
    const specificIds = ["10", "11", "12","13","14","15","20","21","22","23"];
    const salesid=["01","02","03","26","04","05","06","27"]
   

    return (
      
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {SliderData.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2 style={{ color: "black", marginBottom:'180px',marginRight:'400px'}}>{item.title}</h2>
                                        <p style={{ color: "black"}}>{item.desc}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={item.cover} className="d-block w-100" alt={item.title} style={{ width: "100%", height: "450px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={handlePrevSlide}
                style={{ color: "black" }}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={handleNextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

               {/* Cards */}
               
               
               
               <div className='container'>
                  <div className='row'>
                    {serviceData.map((service, index) => (
                      
                      <div key={index} className='col-md-3' >
                        <div className='card' style={{backgroundColor:service.bg,height:"200px"}}>
                        <h2>{service.icon}</h2>
                        <h2>{service.title}</h2>
                        <p>{service.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
            </div>

            {/* Big Discount */}
            <h2 style={{marginTop:"80px"}}>Big Discount</h2>
            <div className='container'>
              <div className='row'>
                { discoutProducts.map((Discount,index)=>(
                  <div  key={index}className='col-md-4'>
                    <div className='card'>
                        <button style={{marginRight:"30px",borderRadius:"25px"}}>{Discount.discount}%Off</button>
                        <img src={Discount.imgUrl}/>
                        <p>{Discount.productName}</p>
                        <StarRating rating={Discount.rating} />
                        <h2>${Discount.price}</h2>
                       
                        <h2  onClick={()=>{click()}} className="position-absolute bottom-0 end-0 m-3" 
                            style={{borderRadius:"50px",width:"25px" }}><PlusCircle/> </h2>
                        


                    </div>
                  </div>
                ))}
              </div>

            </div>
            
              <h2>New arrivals</h2>
              <div className='container'>
                <div className='row'>
                  {products.map((product) => (
                    specificIds.includes(product.id) && ( // Only render if the product ID is in specificIds
                      <div className='col-md-4' key={product.id}>
                        <div className='card'>
                          <img src={product.imgUrl} alt={product.productName} />
                          <p>{product.productName}</p>
                          <StarRating rating={product.rating} />
                          <h2>${product.price}</h2>
                          <h2 onClick={() => click()} className="position-absolute bottom-0 end-0 m-3" 
                              style={{ borderRadius: "50px", width: "25px", height: "25px" }}>
                            <PlusCircle/> 
                          </h2>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>


              <h2>Best Sales</h2>
              <div className='container'>
                <div className='row'>
                  {products.map((product) => (
                    salesid.includes(product.id) && ( // Only render if the product ID is in specificIds
                      <div className='col-md-4' key={product.id}>
                        <div className='card'>
                          <img src={product.imgUrl} alt={product.productName} />
                          <p>{product.productName}</p>
                          <StarRating rating={product.rating} />
                          <h2>${product.price}</h2>
                          <h2 onClick={() => click()} className="position-absolute bottom-0 end-0 m-3" 
                              style={{ borderRadius: "50px", width: "25px", height: "25px" }}>
                            <PlusCircle/> 
                          </h2>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            
            


            

               

      </div>

       

                  
                
    );
};





export default Home;

