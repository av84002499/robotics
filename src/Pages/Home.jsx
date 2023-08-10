import React from 'react'

const Home = () => {
    return (
        <div>

            <div className="card ">
                <div className="card-body bg-white m-0">
                    <h6 className='text-center fs-1 padding-top '>Careers</h6>
                    <h6 className="text-start fs-1">About Peppermint</h6>
                    <p className="text-align-left">Peppermint is an award-winning robotics company, supported by SINE IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial and Enterprise robots and platforms for mobility-led services. The Engineering team has 50+ years of experience in building deep-tech and robotics products. Robots built on the Peppermint Platform are deployed across 13 cities in 4 countries!</p>
                </div>
            </div>

            <div>
                <div className=" text-primary text-center p-5">
                    <h6>WE'RE HIRING!</h6>
                    <h2 className="text-center text-dark fs-1 p-1">Current Openings</h2>
                </div>
            </div>

            <div className='container mt-5'>
                <div className="row">

                    <div className="col col-4">
                        {/* Card - 1 */}
                        <div className="card text-bg-white ">
                            <div className="card-body ">
                                <p className="font-weight-normal text-center ">SDE II</p>
                                <p className="font-weight-normal text-center  ">Software Development Engineer II</p>
                                <p className="bi bi-dot">Python, API, MongoDB.</p>
                                <p className='bi bi-dot'>Dockers, Flutter.</p>
                                <p className='bi bi-dot'>Mobile/Web App
                                </p>
                                <t>Development</t>


                            </div>
                        </div>
                    </div>

                    <div className="col col-4">
                        {/* Card - 2 */}
                        <div className="card text-bg-white ">
                            <div className="card-body ">
                                <p className="font-weight-normal text-center ">RE - I (PERCEPTION)</p>
                                <p className="font-weight-normal text-center ">Robotics Engineer I</p>
                                <p className="bi bi-dot">C++, ROS1/ROS2,</p>
                                <p className='bi bi-dot'>SLAM, OpenCV..</p>
                                <p className='bi bi-dot'>CUDA, Pytorch.</p>
                                <p className='bi bi-dot'>TensorFlow, Navigation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col col-4">
                        {/* Card - 3 */}
                        <div className="card text-bg-white ">
                            <div className="card-body ">
                                <p className="font-weight-normal text-center ">SCE I</p>
                                <p className="font-weight-normal text-center ">Supply Chain Engineer</p>
                                <p className="bi bi-dot">Lean Six Sigma</p>
                                <p className='bi bi-dot'>Supply chain management.</p>
                                <p className='bi bi-dot'>Inventory</p>
                                <p className='bi bi-dot'>JIT</p>


                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='text4 raw -3 text-center p-5'>“If you are excited about the prospect of building awesome tech and robots, we’d love to hear from you”. Please email us at  <t className= 'text-primary'> hr@getpeppermint.com</t> </div>
                    </div>

                </div>
            </div>

            <div className="card ">
                <div className="card-body bg-dark m-0">
                    <div className='container mt-5'>
                        <div className="row ">

                            <div className="col col-4">
                                {/* Card - 1 */}
                                <div className="card text-bg-dark ">
                                    <div className="card-body ">
                                    <img src="ing1.png" alt="logo" />
                                        <p className="font-weight-normal m-3 ">Aubotz Labs Pvt Ltd</p>
                                        <p className="font-weight-normal ">CIN: U29100MH2019PTC324975</p>
                                        <p className="bi bi-dot">Survey No 116, 3/1, opp. ShubhTej Mangal Karyalay, near Balaji Chowk, Jai Bhavani Nagar, Pashan, Pune, Maharashtra 411021</p>
                                        <p className='bi bi-dot'>info@getpeppermint.co</p>
                                        <p className='bi bi-dot'>+91 89567 10044</p>
                                        <p className='bi bi-dot'>Recent Posts</p>
                                        <p className='bi bi-dot'>Elevating Efficiency: Evolution of Material Handling with AMRs</p>
                                        <p className='bi bi-dot'>Autonomous Mobile Robots: The Future of Efficient Material Handling</p>
                                        <p className='bi bi-dot'>Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-4">
                                {/* Card - 2 */}
                                <div className="card text-bg-dark ">
                                    <div className="card-body ">
                                        <h2 className="font-weight-normal">Quick Links</h2>
                                        <p className="bi bi-dot">Home</p>
                                        <p className='bi bi-dot'>FAQs</p>
                                        <p className='bi bi-dot'>Case Studies</p>
                                        <p className='bi bi-dot'>Products</p>
                                        <p className='bi bi-dot'>Blog</p>
                                        <p className='bi bi-dot'>Privacy Policy</p>
                                        <p className='bi bi-dot'>Careers</p>



                                    </div>
                                </div>
                            </div>

                            <div className="col col-4">
                                {/* Card - 3 */}
                                <div className="card text-bg-dark">
                                    <div className="card-body ">
                                        <h2 className="font-weight-normal">Recent Posts</h2>
                                        <p className="bi bi-dot">Elevating Efficiency: Evolution of Material Handling with AMRs</p>
                                        <p className='bi bi-dot'>Autonomous Mobile Robots: The Future of Efficient Material Handling.</p>
                                        <p className='bi bi-dot'>Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports</p>
                                        </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Home