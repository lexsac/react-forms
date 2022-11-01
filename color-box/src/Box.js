import React from 'react';

function Box({ id, backgroundColor="blue",  width = 1, height = 1, handleRemove }) {
    const remove = () => handleRemove(id);
    return (
        <>
            <div
                style={{
                    backgroundColor,
                    width: `${width}em`,
                    height: `${height}em`
                }}
            />
                <button onClick={remove}>X</button>
        </>
    );
}

export default Box;