import multer from 'multer'
import {nanoid} from 'nanoid'



const storage = multer.diskStorage({
    destination: (req, file, callbackfn) => {
        callbackfn(null, './public/temp')
    },
    filename: function (req, file, callbackfn)  {
        const uniqueSuffix = nanoid(5);

        callbackfn(null, file.fieldname + '-' + uniqueSuffix);
    }
})

export const upload = multer({ storage: storage })

