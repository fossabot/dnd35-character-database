import { Box } from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'

import Label from './Label'
import Value from './Value'

const ImageValue = React.memo(({ input, ...props }) => {
  const [, meta] = useField(props.name)
  const { value } = meta

  return (
    input
      ? (
        <>
          <Label>画像URL</Label>
          <br />
          <Value input {...props} />
        </>
      )
      : (
        <Box width="100%" border={1} style={{ maxHeight: '250px' }}>
          <img
            alt=""
            src={value}
            style={{
              maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto',
            }}
          />
        </Box>
      )
  )
})
ImageValue.displayName = 'ImageValue'

export default ImageValue
