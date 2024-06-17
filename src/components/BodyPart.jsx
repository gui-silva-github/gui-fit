import {Stack, Typography} from '@mui/material'

import Icon from '../assets/icons/gym.png'
import { Height } from '@mui/icons-material'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px' }}
        onClick={()=>{
            if (item === 'chest' || item === 'cardio' || item === 'neck' || item === 'shoulders'){
              window.open(`https://musclewiki.com/exercises/male/${item}`, '_blank')
            } else if (item === 'all'){
              window.open('https://musclewiki.com', '_blank')
            } else if (item === 'lower legs'){
              window.open(`https://musclewiki.com/exercises/male/calves`, '_blank')
            } else if (item === 'upper legs'){
              window.open(`https://musclewiki.com/exercises/male/quads`, '_blank')
            } else if (item === 'lower arms'){
              window.open(`https://musclewiki.com/exercises/male/forearms`, '_blank')
            } else if (item === 'upper arms'){
              window.open(`https://musclewiki.com/exercises/male/biceps`, '_blank')
            } else if (item === 'waist'){
              window.open(`https://musclewiki.com/exercises/male/abdominals`, '_blank')
            } else {
              window.open(`https://musclewiki.com/exercises/male/lats`, '_blank')
            }
        }}
        onMouseLeave={()=>{
          setBodyPart(item)
          window.scrollTo({top: 1800, left: 100, behavior: "smooth"})
        }}
    >
        <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart