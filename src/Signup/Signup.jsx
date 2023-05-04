import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <section class="signup">
            <div class="container">
            <form class="login row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <div class="form-group text-center mb-3">
                        <input type="text" placeholder="الاسم الاول " />
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input type="text" placeholder="الاسم الاخير " />
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input type="text" placeholder="عدد الاجزاء المحفوظة" />
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <div class="form-group text-center mb-3">
                        <input 
                        id="pass"
                        type="password" placeholder="تعيين كلمة السر" />
                        <i class="fa-solid fa-lock"></i>
                        <i 
                        id="iconpass"
                        class="fa-solid fa-eye"></i>
                    </div>
                    <div class="text-center mb-3">
                        <Link 
                        class="abtn"
                        to="/">
                            انشاء حساب
                        </Link>
                    </div>
                    <Link to="/login" class="d-block text-center mb-2">
                        تسجيل الدخول ... ؟
                    </Link>
                </div>
                <div class="col-md-4"></div> 
            </form>
        </div>
    </section>
  )
}

export default Signup