import * as Yup from 'yup'

export const fromTuyenDungvalidationSchema = Yup.object().shape({
    file: Yup.mixed()
    .test('fileType', 'Bạn vui lòng chọn đúng định dạng', (value :any) => {
      if (!value) {
        // No file was selected
        return false
      }

      // Get the file extension
      const fileExtension = value.name.split('.').pop().toLowerCase()
      // Check if the file extension is valid
      if( ['pdf', 'png', 'jpg','jepg'].includes(fileExtension) )
      {

        return true
      }else
      {
        return false
      }
    })
    .required('Bạn vui lòng nhập file'),
    role: Yup.string().required('Bạn vui lòng chọn chức vụ'),
    name: Yup.string().min(6,"Vui lòng nhập đủ họ và tên").required('Bạn vui điền tên'),
    email: Yup.string().email("email khoong hợp lệ").min(6,"Vui lòng nhập dủ email").required('Bạn vui điền email'),
    number: Yup.string()
    .matches(/^[0-9]{10}$/, 'Số điện thọai không hợp lệ')
    .required('Bạn vui lòng điền số điện thoại')


  } )

