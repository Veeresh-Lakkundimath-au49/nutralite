import modalStyles from '@/styles/Modal.module.scss'
import Image from 'next/image'
import { useState } from 'react'



const myFunc=()=>{
    const [modal,setModal]=useState(false)
    return(
        // {modal ? <div className={modalStyles.loginModal}>
            

            <div>
                <button onClick={setModal(!modal)}>Open Modal</button>

                {modal ? <div className={modalStyles.loginModal}>
                        <div className={modalStyles.socialBtn}>
                            <div className={modalStyles.crossBtn}><a href="#" onClick={()=>{setModal(!modal)}}><Image src="/crossMark.png" height={20} width={20}></Image></a></div>
                        
                            <div className={modalStyles.orLineContainer}>
                              <div className={modalStyles.orLine}></div>
                              <div>OR</div>
                              <div className={modalStyles.orLine}></div>
                              </div>

                        <div className={modalStyles.modalHead}><h2>LOG IN TO PARTICIPATE</h2></div>
                        
                          <div>
                              <button className={modalStyles.socialItem} >
                              {/* onClick={glogin} */}

                                <div className={modalStyles.googleLoginBtn}>
                                  <Image src="/googleIcon.png" height={25} width={25}></Image>
                                  <h2>GOOGLE</h2> 
                                </div>
                              </button>

                              <button className={modalStyles.socialItem}>
                                <div className={modalStyles.googleLoginBtn}>
                                  <Image src="/facebookLogo.png" height={25} width={25}></Image>
                                  <h2>FACEBOOK</h2> 
                                </div>
                              </button>
                              
                              {/* <div className={modalStyles.orLine}>OR</div> */}

                              
                            </div>

                          </div>

                        <form>
                              <div >
                                  <input className={modalStyles.input} required type="email" placeholder="Enter Email" /> 
                                  {/* onChange={(e)=>{setEmail(e.target.value)}} */}
                              </div>

                              <div>
                                <button className={modalStyles.nxtBtn} >NEXT</button>
                                {/* onClick={(e)=>{e.preventDefault(),setnextBtn(true)}} */}

                              </div>
                        </form>
            
                      
            </div>:null}
            </div>

    )
}

export default myFunc