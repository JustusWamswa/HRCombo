import { Modal } from '@mui/material'
import React from 'react'
import { DNA } from 'react-loader-spinner'

function Loader({loading}) {
    return (
        <Modal
        open={loading}
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
            <DNA
                visible={loading}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </Modal>
    )
}

export default Loader