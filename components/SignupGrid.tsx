import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import { Masonry } from '@mui/lab';

const BoxGrid = () => {
    const boxStyles = {
        width: 170,
        borderRadius: '16px',
    };

    const boxData = [
        { height: 212, color: '#ffffff' },
        { height: 212, color: '#D9D9D9' },
        { height: 212, color: '#ffffff' },
        { height: 212, color: '#D9D9D9' },
        { height: 106, color: '#FFFFFFE5' },
        { height: 212, color: '#D9D9D9' },
        { height: 106, color: '#ffffff' },
        { height: 212, color: '#D9D9D9' },
        { height: 106, color: '#ffffff' },
        { height: 212, color: '#D9D9D9' },
        { height: 212, color: '#ffffff' },
        { height: 212, color: '#D9D9D9' },
    ];

    return (
        <Box className={'overflow-y-auto scroll-hidden pt-2'} style={{ scrollbarWidth: 'none' }}>
            <Masonry columns={3} spacing={3} sequential>
                {boxData.map((item, index) => (
                    <Paper
                        key={index}
                        sx={{
                            height: item.height,
                            backgroundColor: item.color,
                            borderRadius: '16px',
                        }}
                    />
                ))}
            </Masonry>
        </Box>

    );
};

export default BoxGrid;