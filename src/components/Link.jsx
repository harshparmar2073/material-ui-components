import * as React from 'react';
import Link from '@mui/material/Link';

export default function LinkExample() {
  return (
    <>
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      Button Link
    </Link>
     <Link href="#" variant="body2">
     {'click here'}
   </Link>
   </>
  );
}
