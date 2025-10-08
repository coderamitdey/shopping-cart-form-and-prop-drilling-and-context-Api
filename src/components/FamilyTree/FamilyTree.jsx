import React from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css'

const FamilyTree = () => {

    const asset = 'Diamond';
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <GrandPa asset={asset}></GrandPa>
        </div>
    );
};

export default FamilyTree;