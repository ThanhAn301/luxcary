import React from 'react'
import {
    Breadcrumbs as MUIBreadcrumbs,
    Link,
    Typography
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components'




const Breadcrumbs = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname

    const pathnames = pathname.split("/").filter(x => x);
    return (
        <MUIBreadcrumbs aria-label="breadcrumb" sx={{fontSize:'0.8rem'}}>
            <Link onClick={() => navigate('/')} color="inherit" underline="none" sx={{cursor: 'pointer'}} >
                HOME
            </Link>
            {pathnames.map((pname, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
                const isLast = index === (pathnames.length-1)
                return isLast ?
                    (<Typography key={index} color="#000"
                        sx={{textTransform: 'uppercase',
                            fontSize: '0.8rem'    
                        }}
                    >{pname}</Typography>)
                    : (<Link key={index} color="inherit" underline="none" onClick={() => navigate(routeTo)} sx={{textTransform: 'uppercase',cursor: 'pointer',fontSize: '0.8rem'}}>
                        {pname}
                    </Link>
                    );
            })}
        </MUIBreadcrumbs>
    );
};


export default Breadcrumbs

