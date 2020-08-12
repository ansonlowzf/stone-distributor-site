import { Box, Typography } from "@material-ui/core"
import * as React from "react"

export const Footer = () => {
  return (
    <Box
      component="footer"
      py={5}
      mt={{ xs: 10, sm: 13, md: 15 }}
      bgcolor="primary.main"
    >
      <Typography align="center">
        © 2013 - {new Date().getFullYear()}, Your Company Name
      </Typography>
    </Box>
  )
}
