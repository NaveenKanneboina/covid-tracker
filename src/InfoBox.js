import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core';

function InfoBox(props) {
    return (
        <div className="infoBox">
            <Card>
                <CardContent className="cardContent">
                    <Typography className="title" color="textSecondary">{props.title}</Typography>
                    <h2 className="cases">{props.cases}</h2>
                    <Typography className="total" color="textSecondary">{props.total} Total</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
