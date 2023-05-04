import React from 'react'
import { Link } from 'react-router-dom'
function Categories() {
  return (
    <section className="cats py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <p>المرحلة الاولي</p>
                                    <p>سورة النبأ-الناس</p>
                                </div>
                                <p className="count">1</p>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <i className="fa-solid fa-lock text-dark "></i>
                                    <p>المرحلة الثانية</p>
                                    <p>سورة ...</p>
                                </div>
                                <p className="count">2</p>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <i className="fa-solid fa-lock text-dark "></i>
                                    <p>المرحلة الثالثة</p>
                                    <p>سورة ...</p>
                                </div>
                                <p className="count">3</p>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <i className="fa-solid fa-lock text-dark "></i>
                                    <p>المرحلة الرابعة</p>
                                    <p>سورة ...</p>
                                </div>
                                <p className="count">4</p>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <i className="fa-solid fa-lock text-dark "></i>
                                    <p>المرحلة الخامسة</p>
                                    <p>سورة ...</p>
                                </div>
                                <p className="count">5</p>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <i className="fa-solid fa-lock text-dark "></i>
                                    <p>المرحلة السادسة</p>
                                    <p>سورة ...</p>
                                </div>
                                <p className="count">6</p>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <i className="fa-solid fa-lock text-dark "></i>
                                    <p>المرحلة السابعة</p>
                                    <p>سورة ...</p>
                                </div>
                                <p className="count">7</p>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <i className="fa-solid fa-lock text-dark "></i>
                                    <p>المرحلة الثامنة</p>
                                    <p>سورة ...</p>
                                </div>
                                <p className="count">8</p>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <i className="fa-solid fa-lock text-dark "></i>
                                    <p>المرحلة التاسعة</p>
                                    <p>سورة ...</p>
                                </div>
                                <p className="count">9</p>
                            </Link>
                        </div>
                        <div className="col-md-6 mb-3">
                            <Link to="/details" className="item">
                                <div>
                                    <i className="fa-solid fa-lock text-dark "></i>
                                    <p>المرحلة العاشرة</p>
                                    <p>سورة ...</p>
                                </div>
                                <p className="count">10</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Categories