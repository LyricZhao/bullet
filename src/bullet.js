import React from 'react';

const FontStyle = {
    fontSize: '2em',
    fontWeight: '400',
    lineHeight: '1.4'
};

const StyledBullet = ({ msg, size = 'normal', color}) => {
    const fontSize = size;
    return (
        <div style={{fontSize}}>
            <div style={{...FontStyle, color: color}}> {msg} </div>
        </div>
    );
};

export default StyledBullet;
