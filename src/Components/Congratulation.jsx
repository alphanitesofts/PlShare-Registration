import React from 'react'
import { Modal } from 'pretty-modal'
import { toast } from "react-toastify";


const Congratulation = ({ shouldShow }) => {

    const showToaster = () => {
        toast.info('IOS version coming soon!', { theme: "dark" })
    }

    return (
        <div>

            <Modal open={shouldShow}>
                <div className='card-body text-white text-center'>
                    <h2 style={{ color: '#3EB8B4' }}>Congratulations,</h2>
                    <br className='bg-primary' />
                    <h5>You're successfully registered on <br /> Power Level share.</h5>
                    <br />
                    <p className='mb-4'>Now please download the PL share mobile application to claim your <b>$2</b> reward!</p>

                    <div className="d-flex justify-content-center">
                        <button onClick={showToaster} className='btn btn-outline-warning me-1 p-3' > <i class="fa-brands fa-app-store-ios" /> &nbsp;&nbsp; for IOS</button>
                        <a className='btn btn-outline-warning ms-1 p-3' href={require('./Sourcefiles/PLshare.apk')} download='PLshare' rel="noreferrer"  > <i class="fa-brands fa-google-play" /> &nbsp;&nbsp;Download Android APK</a>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default Congratulation