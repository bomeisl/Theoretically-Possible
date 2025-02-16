import React from 'react';

const NotesIFrame = ({ uri, title }) => {
    return (
        <iframe
            src={uri}
            title={title}
            width="100%"
            height="800px"
        />
    );
};

export default NotesIFrame;