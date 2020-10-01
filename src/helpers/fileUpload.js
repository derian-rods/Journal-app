export const fileUpload = async (file) => {

    const cloudURl = ' https://api.cloudinary.com/v1_1/diqooa36s/upload';
    const formData = new FormData()
    formData.append('upload_preset', 'my-journalapp');
    formData.append('file', file);
    try {
        const resp = await fetch(cloudURl,{
            method: 'Post',
            body: formData
        });
        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url ;
        }else{
            throw await resp.json();
        }
        /* return url img */
        
    } catch (error) {
        console.log(`code: ${error.code} | menssage: ${error.message}`)
    }
}