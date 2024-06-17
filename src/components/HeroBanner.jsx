import {Box, Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.jpg'
import HeroBannerImage2 from '../assets/images/banner.png'

import { useState } from 'react'

const HeroBanner = () => {

  const [gender, setGender] = useState(false)

  const handleClick = ()=>{
    setGender(!gender)
  }

  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{
        fontSize: { lg: '44px', xs: '40px'}
      }}
      mb="23px" mt="30px">
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color="error" href="#exercises"
      sx={{
        backgroundColor: "#ff2625", padding: "19px"
      }}>Explore Exercises</Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none'} 
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img onClick={handleClick} style={{ borderRadius:"30px", cursor: "pointer" }} src={gender ? HeroBannerImage2 : HeroBannerImage} alt="banner"
      className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner