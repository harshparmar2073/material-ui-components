import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function SkeletonExample() {
  return (
    <>
    <Typography variant='h2'>  This Skeleton component</Typography>
    <Stack spacing={1}>
    
      <Skeleton variant="text" sx={{ fontSize: '20px' }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={50} height={60} />
      <Skeleton variant="rectangular" width={50} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
    </>
  );
}
