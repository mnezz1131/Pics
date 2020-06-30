import axios from 'axios'

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers:{
      Authorization: 'Client-ID ANWRTldr9QUUMlMfZhRCeU97Qp1IVnbsKPEB-u_qMUg'
      }
})

