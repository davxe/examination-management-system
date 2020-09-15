import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {AiFillTwitterCircle,AiOutlineCopyrightCircle} from 'react-icons/ai'
import {FaFacebookSquare,FaGithub,FaYoutube,FaLinkedin} from 'react-icons/fa'
function Footer(){
    return(
        // <div className='footer d-inline-block' style={{width:'100%',height:'80px', backgroundColor:'black',color:'white', fontSize:'20px'}} >
        //         <div className='copyright'>
        //             <Row>
        //                     <Col md={7}>
        //                         <h5 className="text-right pt-4"><AiOutlineCopyrightCircle/> 2020 - 2021, All rights reserved.</h5>
        //                     </Col> 
        //                 <Col md={12}>
        //                     <h5 className="text-right pt-4"><AiOutlineCopyrightCircle/> 2020 - 2021, All rights reserved.</h5>
        //                     <a href='https://twitter.com/@Princek52074297'><AiFillTwitterCircle className='text-info' style={{fontSize:'45px'}}/></a>&nbsp;&nbsp;
        //                     <a href='https://twitter.com/@Princek52074297'><AiFillTwitterCircle className='text-info' style={{fontSize:'45px'}}/></a>&nbsp;&nbsp;
        //                 </Col>
        //             </Row>
                    
        //         </div>

        //     </div>

        <div class="d-flex flex-column">

        <footer className="page-footer font-small mt-5 bg-dark text-light ">  
            <div className="container-fluid ml-0 text-center text-md-left"> 
                <div className="row pt-3 pb-3">
                    <div className="col-md-8 mt-md-0 mt-3">
                        <h3 className='text-light text-center'><AiOutlineCopyrightCircle/> 2020 - 2021, All rights reserved.</h3>
                    </div> 
                    <hr className="clearfix w-100 d-md-none pb-3" /> 
                    {/* <div className="col-md-2 mb-md-0 mb-3"> 
                    </div>  */}
                    <div className="col-md-4 mb-md-0 mb-3"> 
                        {/* <h4>Personal Links</h4> */}
                        <a href='https://twitter.com/@Princek52074297'><AiFillTwitterCircle className='text-info' style={{fontSize:'45px'}}/></a>&nbsp;&nbsp;
                        <a href='https://www.facebook.com/davxe'><FaFacebookSquare className='text-primary' style={{fontSize:'45px'}}/></a>&nbsp;&nbsp;
                        <a href='https://github.com/davxe'><FaGithub className='text-light' style={{fontSize:'45px'}}/></a>&nbsp;&nbsp;
                        <a href='https://www.youtube.com/channel/UClN7421hR4zgRTOUtbJTBJg'><FaYoutube className='text-danger' style={{fontSize:'45px'}}/></a>&nbsp;&nbsp;
                        <a href='https://www.linkedin.com/in/prince-kaushal-589b48199/'><FaLinkedin style={{fontSize:'45px',color:'#4d9fe8'}}/></a>&nbsp;&nbsp;

                    </div>
                </div> 
            </div> 
        </footer> 
    </div>
    )
}
export default Footer